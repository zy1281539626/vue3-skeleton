<script setup lang="ts">
import { defineProps, PropType, defineOptions } from "vue";
import { SkeletonItem } from "./types";

defineOptions({
  name: "skeleton",
});

defineProps({
  item: {
    type: Object as PropType<SkeletonItem>,
    required: true,
  },
});

const gridStyle = (item: SkeletonItem) => {
  const style: Record<string, string> = {};
  if (item.col && item.col > 1) {
    style.display = "grid";
    style.gridTemplateColumns = `repeat(${item.col}, 1fr)`;
    style.gap = item.gap ?? "0px";
  } else {
    style.display = "flex";
    style.flexDirection = "column";
    style.gap = item.gap ?? "0px";
  }
  return style;
};
const elementStyle = (item: SkeletonItem) => {
  const style: Record<string, any> = {
    width: item.width, // || 'auto',
    height: item.height, // || 'auto',
  };
  if (item.align) {
    switch (item.align) {
      case "left":
        style.alignSelf = "flex-start";
        break;
      case "right":
        style.alignSelf = "flex-end";
        break;
      case "top":
        style.alignSelf = "flex-start";
        break;
      case "bottom":
        style.alignSelf = "flex-end";
        break;
      case "center":
        style.alignSelf = "center";
        break;
      default:
        break;
    }
  }

  return style;
};
</script>

<template>
  <div :style="gridStyle(item)">
    <template v-if="item.group">
      <skeleton
        v-for="(child, index) in item.group"
        :key="index"
        :item="child"
      />
    </template>
    <template v-else>
      <div
        v-for="n in item.num || 1"
        :key="n"
        :class="`sail-skeleton__${item.type}`"
        :style="elementStyle(item)"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.sail-skeleton__group {
  display: grid;
  gap: 10px;
}
.sail-skeleton__line {
  background: #f2f3f4;
  height: 16px;
}
.sail-skeleton__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f2f3f4;
}
.sail-skeleton__image {
  background: #f2f3f4;
}
.sail-skeleton__rect {
  background: #f2f3f4;
}
</style>
