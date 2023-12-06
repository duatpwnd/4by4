<template>
  <nav class="lnb">
    <FontAwesomeIcon
      icon="right-from-bracket"
      class="sign-out-button"
      @click="signOut"
    />
    <ul>
      <li v-for="(item, index) in lnbNav" :key="index">
        <button
          @click="router.push(item.path)"
          :class="route.fullPath.indexOf(item.path) >= 0 ? 'active' : ''"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </nav>
  <div class="container">
    <nav class="gnb">
      <ul>
        <li>
          <button
            :class="route.fullPath.indexOf('serverManage') >= 0 ? 'active' : ''"
            @click="
              decideLnbNav('serverManage');
              router.push(
                route.path +
                  '?mainCategory=serverManage&subCategory=serverStatus'
              );
            "
          >
            서버관리
          </button>
        </li>
        <li>
          <button
            :class="route.fullPath.indexOf('modelManage') >= 0 ? 'active' : ''"
            @click="
              decideLnbNav('modelManage');
              router.push(
                route.path + '?mainCategory=modelManage&subCategory=modelStatus'
              );
            "
          >
            모델관리
          </button>
        </li>
        <li>
          <button
            :class="route.fullPath.indexOf('deployManage') >= 0 ? 'active' : ''"
            @click="
              decideLnbNav('deployManage');
              router.push(
                route.path +
                  '?mainCategory=deployManage&subCategory=deployStatus'
              );
            "
          >
            배포관리
          </button>
        </li>
      </ul>
    </nav>
    <main>
      <keep-alive>
        <component :is="currComp" />
      </keep-alive>
    </main>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, shallowRef, inject } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import ServerStatus from "@/components/admin/server-manage/ServerStatus.vue";
  import ModelStatus from "@/components/admin/model-manage/ModelStatus.vue";
  import DeployStatus from "@/components/admin/deploy-manage/DeployStatus.vue";
  const signOut = inject("signOut");
  const currComp = shallowRef();
  const lnbNav = ref<{ name: string; path: string }[]>([]); // 서브메뉴 배열
  const route = useRoute();
  const router = useRouter();
  // 상위 메뉴에 따라 서브메뉴 결정
  const decideLnbNav = (category: string) => {
    lnbNav.value = [];
    if (category == "serverManage") {
      lnbNav.value.push(
        {
          name: "서버현황",
          path: "/admin?mainCategory=serverManage&subCategory=serverStatus",
        }
        // {
        //   name: "test",
        //   path: "/admin?mainCategory=serverManage&subCategory=test",
        // }
      );
      currComp.value = ServerStatus;
    } else if (category == "modelManage") {
      lnbNav.value.push({
        name: "모델현황",
        path: "/admin?mainCategory=modelManage&subCategory=modelStatus",
      });
      currComp.value = ModelStatus;
    } else if (category == "deployManage") {
      lnbNav.value.push({
        name: "배포현황",
        path: "/admin?mainCategory=deployManage&subCategory=deployStatus",
      });
      currComp.value = DeployStatus;
    }
  };
  onMounted(() => {
    // 새로고침시 서브메뉴 세팅
    decideLnbNav(route.query.mainCategory as string);
    if (route.query.mainCategory == undefined) {
      decideLnbNav("serverManage");
      router.push(
        route.path + "?mainCategory=serverManage&subCategory=serverStatus"
      );
    }
  });
</script>
<style scoped lang="scss">
  .gnb,
  .lnb {
    font-size: 18px;
    .sign-out-button {
      height: 50px;
      color: #ff4343;
      cursor: pointer;
    }

    li {
      display: inline-block;
      width: 100%;
      button {
        width: 100%;
        box-sizing: border-box;
        padding: 16px 0px;
        border-radius: 5px;
        display: inline-block;
        font-weight: 400;
        color: rgb(99, 115, 129);
        &.active {
          color: rgb(33, 43, 54);
          background-color: rgba(145, 158, 171, 0.16);
          font-weight: 700;
        }
      }
    }
  }
  .lnb {
    width: 200px;
    display: inline-block;
    height: 100%;
    text-align: center;
    padding: 20px 8px;
    box-sizing: border-box;
    vertical-align: top;
    position: relative;
    border-right: 1px solid rgba(145, 158, 171, 0.24);
    background-color: rgb(249, 250, 251);
    ul {
      height: calc(100% - 113px);
      width: calc(100% - 16px);
      position: absolute;
      bottom: 20px;
      li {
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
    }
  }
  .container {
    width: calc(100% - 200px);
    display: inline-block;
    padding: 20px 0;
    height: 100%;
    box-sizing: border-box;
    background-color: rgba(249, 250, 251, 0.8);
    main {
      position: relative;
      height: calc(100% - 73px);
    }
    .gnb {
      width: 100%;
      border-top: 1px solid rgba(145, 158, 171, 0.24);
      border-bottom: 1px solid rgba(145, 158, 171, 0.24);
      ul {
        display: flex;
        li {
          width: 33.333%;
          padding: 10px 0;
          text-align: center;
        }
      }
    }
  }
</style>
