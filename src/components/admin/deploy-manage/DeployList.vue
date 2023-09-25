<template>
  <FontAwesomeIcon
    icon="plus"
    class="add-button"
    @click="router.push(route.fullPath + '&type=register')"
  />
  <BaseTable :ths="ths" :items="items">
    <template #thead>
      <tr>
        <th v-for="(th, index) in ths" :key="index">
          {{ th }}
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(item, index) in 100" :key="index">
        <td>
          {{ index }}
        </td>
        <td>192.168.12.13</td>
        <td>test</td>
        <td>test</td>
        <td>
          <BaseProgress value="80" />
        </td>
        <td class="control">
          <FontAwesomeIcon
            icon="gear"
            class="setting-button"
            @click="router.push(route.fullPath + '&type=settings')"
          />
          <FontAwesomeIcon
            icon="trash"
            class="remove-button"
            @click="remove(index)"
          />
        </td>
      </tr>
    </template>
  </BaseTable>
</template>
<script setup lang="ts">
  import { inject, ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { EventType, Emitter } from "mitt";
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string; fn?: () => void }>
  >;
  const ths = ["#", "Host", "GPU", "Image", "ContainerID", "Control"];
  const items = ref([]);
  const router = useRouter();
  const route = useRoute();

  const remove = (index: number) => {
    console.log(index);
    emitter.emit("update:alert", {
      isActive: true,
      message: "삭제하시겠습니까?",
      fn: () => {
        console.log("삭제api");
      },
    });
  };
</script>
<style scoped lang="scss">
  .add-button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    color: white;
    z-index: 1;
    cursor: pointer;
    background: #0095ff;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    padding: 10px;
  }
  thead {
    tr {
      th {
        &:first-child {
          width: 2%;
        }
        &:last-child {
          width: 4%;
        }
      }
    }
  }
  tbody {
    tr {
      td {
        &:first-child {
          width: 2%;
        }
        &:last-child {
          width: 4%;
        }
      }
    }
    .control {
      .setting-button {
        margin-right: 10px;
      }
    }
  }
</style>
