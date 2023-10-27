<template>
  <div class="video-container" ref="videoContainerRef">
    <div id="teleport-upload-modal" class="contents">
      <div class="title-area">
        <div class="original">
          <strong :class="isUploaded ? 'uploaded' : 'not-uploaded'"
            >Original
          </strong>
        </div>
        <div class="pixell-ai">
          <strong :class="isInferred ? 'uploaded' : 'not-uploaded'"
            >PIXELL AI</strong
          >
        </div>
      </div>

      <div class="video-area" ref="videoAreaRef">
        <button ref="draggableButton" class="drag-btn"></button>
        <video ref="originalVideo">
          <source :src="originalVideoSrc" />
        </video>
        <div id="video-clipper" ref="videoClipperRef">
          <video ref="inferenceVideo">
            <source :src="inferredVideoSrc" />
          </video>
        </div>
        <button class="share-btn"></button>
      </div>
      <div class="timeline-area">
        <TimeLine
          :isVideoPlay="isVideoPlay"
          :originalVideo="originalVideo"
          :inferenceVideo="inferenceVideo"
        />
        <div class="video-menu-area">
          <FontAwesomeIcon
            icon="play"
            class="fa-flip-both fa-3x prev-button"
            @click="moveVideo('backward')"
          />
          <FontAwesomeIcon
            icon="circle-play"
            class="fa-3x play-button"
            @click="play"
          />
          <FontAwesomeIcon
            icon="play"
            class="fa-3x next-button"
            @click="moveVideo('forward')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, toRefs } from "vue";
  import TimeLine from "@components/video/TimeLine.vue";
  const videoContainerRef = ref<HTMLDivElement | null>(null);
  const videoAreaRef = ref<HTMLDivElement | null>(null);
  const videoClipperRef = ref<HTMLDivElement | null>(null);
  const originalVideo = ref<HTMLVideoElement | null>(null);
  const inferenceVideo = ref<HTMLVideoElement | null>(null);
  const draggableButton = ref<HTMLButtonElement | null>(null);
  const isVideoPlay = ref(false);
  const isMouseDownBtn = ref(false);
  interface Props {
    isUploaded: boolean;
    isInferred: boolean;
    originalVideoSrc: string;
    inferredVideoSrc: string;
  }
  const props = defineProps<Props>();
  const { isUploaded, isInferred, originalVideoSrc, inferredVideoSrc } =
    toRefs(props);
  const draggable = ($target: HTMLButtonElement) => {
    const videoContainer = videoContainerRef.value;
    let isPress = false;
    document.onmouseup = () => {
      isPress = false;
      isMouseDownBtn.value = false;
    };
    const start = () => {
      isPress = true;
      isMouseDownBtn.value = true;
    };
    const move = (e: MouseEvent) => {
      if (!isPress) return;
      if (videoContainer !== null) {
        const rect = videoContainer.getBoundingClientRect();
        if ("pageX" in e) {
          const position =
            ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
          if (position < 100 && position > 0) {
            $target.style.left = position + "%";
          } else if (position <= 0) {
            $target.style.left = "0px";
          } else if (position >= 100) {
            $target.style.left = "100%";
          }
        }
      }
    };
    const end = () => {
      isPress = false;
      isMouseDownBtn.value = false;
    };
    $target.onmousedown = start;
    $target.onmouseup = end;
    if (videoContainer !== null) {
      videoContainer.onmousemove = move;
      videoContainer.onmouseout = move;
    }
  };
  const trackLocation = (e: MouseEvent | TouchEvent) => {
    if (isMouseDownBtn.value) {
      const videoContainer = videoContainerRef.value;
      const videoClipper = videoClipperRef.value as HTMLDivElement;
      const clippedVideo = inferenceVideo.value as HTMLVideoElement;
      if (videoContainer !== null) {
        const rect = videoContainer.getBoundingClientRect();
        if ("pageX" in e) {
          const position =
            ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
          if (position < 100 && position > 0) {
            videoClipper.style.width = position + "%";
            clippedVideo.style.width = (100 / position) * 100 + "%";
            clippedVideo.style.zIndex = "3";
          } else if (position <= 0) {
            videoClipper.style.width = "0";
            clippedVideo.style.width = "0";
          } else if (position >= 100) {
            videoClipper.style.width = "100%";
            clippedVideo.style.width = "100%";
          }
        }
      }
    }
  };
  // 영상 재생
  const play = () => {
    if (originalVideo.value !== null && inferenceVideo.value !== null) {
      if (originalVideo.value.paused) {
        originalVideo.value.play();
        inferenceVideo.value.play();
        isVideoPlay.value = true;
      } else {
        originalVideo.value.pause();
        inferenceVideo.value.pause();
        isVideoPlay.value = false;
      }
    }
  };
  // 영상 이동
  const moveVideo = (type: string) => {
    if (originalVideo.value !== null && inferenceVideo.value !== null) {
      if (type == "forward") {
        inferenceVideo.value.currentTime += 10;
        originalVideo.value.currentTime += 10;
      } else {
        inferenceVideo.value.currentTime -= 10;
        originalVideo.value.currentTime -= 10;
      }
    }
  };
  // 영상종료됬을때 스와이프 중지
  const handleVideoEnded = () => {
    isVideoPlay.value = false;
  };
  onMounted(() => {
    const videoContainer = videoContainerRef.value;
    const draggableButtonRef = draggableButton.value;

    if (draggableButtonRef !== null && videoContainer !== null) {
      draggable(draggableButtonRef);
      videoContainer.addEventListener("mousemove", trackLocation, false);
      videoContainer.addEventListener("mouseout", trackLocation, false);
      videoContainer.addEventListener("touchstart", trackLocation, false);
      videoContainer.addEventListener("touchmove", trackLocation, false);
    }
    if (originalVideo.value !== null) {
      originalVideo.value.addEventListener("ended", handleVideoEnded, false);
      originalVideo.value.addEventListener("timeupdate", (e) => {}, false);
      originalVideo.value.addEventListener(
        "seeking",
        (e) => {
          if (originalVideo.value !== null) {
            console.log(Math.floor(originalVideo.value.currentTime));
          }
        },
        false
      );
    }
  });
</script>
<style scoped lang="scss">
  .video-container {
    display: inline-block;
    width: calc(100% - 320px);
    height: 100%;
    box-sizing: border-box;
    .contents {
      position: relative;
      background-color: black;
      height: 100%;
      padding-top: 22px;
      box-sizing: border-box;
      .title-area {
        margin-bottom: 46px;
      }
      .title-area {
        .original,
        .pixell-ai {
          width: 50%;
          display: inline-block;
          text-align: center;
          strong {
            display: inline-block;
            text-align: center;
            border-radius: 4px;
            font-size: 25px;
            padding: 13px 0;
            width: 150px;
            margin: 0 auto;
            &.uploaded {
              border: 3px solid #44f641;
              color: #44f641;
            }
            &.not-uploaded {
              border: 3px solid white;
              color: white;
            }
          }
        }
      }
      .video-area {
        height: calc(100% - 353px);
        position: relative;
        .drag-btn {
          @include background("drag_ico.svg", 36px, 36px, center);
          width: 36px;
          height: 36px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          cursor: grab;
        }

        .share-btn {
          @include background("share_ico.svg", 40px, 45px, center);
          width: 40px;
          height: 45px;
          position: absolute;
          bottom: -80px;
          right: 40px;
          z-index: 3;
        }

        > video {
          width: 100%;
          position: absolute;
          height: 100%;
        }

        #video-clipper {
          width: 50%;
          position: absolute;
          overflow: hidden;
          height: 100%;

          video {
            width: 200%;
            height: 100%;
          }
        }
      }
      .timeline-area {
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        height: 128px;

        .swiper-container {
          margin-bottom: 10px;
          height: calc(100% - 58px);
        }
        .video-menu-area {
          svg {
            cursor: pointer;
          }
          .play-button {
            margin: 0 20px;
            color: white;
          }
          .prev-button,
          .next-button {
            color: white;
          }
        }
      }
    }
  }
</style>
