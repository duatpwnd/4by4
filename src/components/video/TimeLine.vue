<template>
  <swiper
    class="swiper-container"
    @swiper="onSwiper"
    :modules="modules"
    :slides-per-view="10"
    :virtual="{ enabled: true, cache: true }"
    :breakpoints="{
      320: {
        slidesPerView: 7,
      },
      1300: {
        slidesPerView: 8,
      },
      1400: {
        slidesPerView: 9,
      },
      1500: {
        slidesPerView: 10,
      },
    }"
  >
    <swiper-slide v-for="(slide, index) in 40" :key="index"
      ><img src="@images/test.svg" />
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
  import { onMounted, toRefs, ref, watch } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Virtual } from "swiper/modules";
  import "swiper/css";
  import { Swiper as swiperInstance } from "swiper/types";
  interface Props {
    isVideoPlay: boolean;
    originalVideo: HTMLVideoElement | null;
    inferenceVideo: HTMLVideoElement | null;
  }
  const props = defineProps<Props>();
  const { isVideoPlay, originalVideo, inferenceVideo } = toRefs(props);
  const swiperRef = ref<any | null>(null);
  const modules = [Autoplay, Virtual];
  const onSwiper = (swiperInstance: swiperInstance) => {
    swiperRef.value = swiperInstance;
    // 무한루프 방지
    swiperInstance.on("reachEnd", () => {
      swiperInstance.autoplay.stop();
    });
    // 창줄였다 늘렸을때 스와이프에 빈공간이 생기는거 방지
    swiperInstance.on("resize", () => {
      swiperInstance.update();
    });
  };
  watch(isVideoPlay, (curr, prev) => {
    if (swiperRef.value !== null) {
      if (curr) {
        swiperRef.value.params.autoplay.delay = 0;
        swiperRef.value.params.speed = 1000;
        swiperRef.value.autoplay.start();
      } else {
        swiperRef.value.autoplay.stop();
      }
    }
  });
  // swipe 클릭시 영상도 해당시간으로 이동
  const moveVideo = (currentTime: number) => {
    if (originalVideo.value !== null && inferenceVideo.value !== null) {
      inferenceVideo.value.currentTime = currentTime;
      originalVideo.value.currentTime = currentTime;
    }
  };
  // const onSwiper = (swiper) => {
  //   console.log(swiper);
  // };
  // const onSlideChange = () => {
  //   console.log("slide change");
  // };
  onMounted(() => {});
</script>
<style lang="scss">
  .swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    .swiper-slide {
      cursor: pointer;
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
  }
</style>
