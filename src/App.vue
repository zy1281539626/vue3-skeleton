<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import Skeleton from "@/components/skeleton/index.vue";
import { HomeActivitySkeleton } from '@/components/skeleton/template'
</script>

<template>
  <Skeleton :template="HomeActivitySkeleton" :loading="loading">
    <div>我是真实内容</div>
  </Skeleton>
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
