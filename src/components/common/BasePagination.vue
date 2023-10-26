<template>
  <ul class="pagination-wrapper">
    <li
      class="prev-button"
      v-if="!first"
      @click="pagingFn(Number(currentPage) - 1)"
    >
      &lt;
    </li>
    <li
      v-for="(a, index) in totalPages"
      :class="
        Number(index) + Number(startIndex) == Number(currentPage)
          ? 'active-page'
          : ''
      "
      :key="startIndex"
      @click="pagingFn(startIndex)"
    >
      {{ Number(index) + Number(startIndex) }}
    </li>
    <li
      class="next-button"
      v-if="!last"
      @click="pagingFn(Number(currentPage) + 1)"
    >
      >
    </li>
  </ul>
</template>
<script setup lang="ts">
  import { onMounted, reactive, ref, toRefs } from "vue";
  import { useRoute, useRouter } from "vue-router";
  interface Props {
    startIndex: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    pagingFn: () => void;
  }
  const router = useRouter();
  const route = useRoute();
  const props = defineProps<Props>();
  const {
    startIndex,
    pageSize,
    currentPage,
    first,
    last,
    pagingFn,
    totalPages,
  } = toRefs(props);
</script>
<style scoped lang="scss">
  .pagination-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      width: 100%;
      text-align: center;
      cursor: pointer;
      font-size: 30px;
      color: #a8a8a8;
      &.active-page {
        color: #686de0;
      }
    }
  }
</style>
