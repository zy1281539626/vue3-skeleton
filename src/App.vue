<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import Skeleton from "@/components/skeleton/index.vue";
import { SkeletonItem } from "@/components/skeleton/types.d";

// 卡片骨架屏
const CardSkeletonItem: SkeletonItem = {
  gap: "10px",
  group: [
    { type: "image", height: "150px" },
    { type: "line", num: 2 },
  ],
};

// 图标骨架屏
const IconSkeletonItem: SkeletonItem = {
  gap: "10px",
  group: [
    { type: "rect", width: "50px", height: "50px", align: "center" },
    { type: "line" },
  ],
};

// 自定义骨架屏
const item: SkeletonItem = {
  col: 2,
  gap: "5px",
  group: [
    {
      gap: "20px",
      col: 2,
      group: [
        { type: "line", num: 2 },
        { type: "avatar", num: 2 },
      ],
    },
    {
      gap: "10px",
      col: 2,
      group: [
        { type: "line", num: 2 },
        {
          gap: "10px",
          group: [
            { type: "line", num: 2 },
            { type: "line", num: 2 },
            { type: "line", num: 2, width: "50%" },
          ],
        },
      ],
    },
  ],
};
</script>

<template>
  <Skeleton :item="IconSkeletonItem"></Skeleton>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
