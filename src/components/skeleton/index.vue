<script setup lang="ts">
  import { SkeletonItem } from './types'

  defineOptions({
    name: 'Skeleton'
  })
  defineProps({
    loading: {
      type: Boolean,
      default: true
    },
    template: {
      type: Object as PropType<SkeletonItem>,
      required: true
    }
  })

  const gridStyle = (item: SkeletonItem) => {
    const style: Record<string, string> = {}
    if (item.col && item.col > 1) {
      style.display = 'grid'
      style.gridTemplateColumns = `repeat(${item.col}, 1fr)`
      style.gap = item.gap ?? '0px'
    } else {
      style.display = 'flex'
      style.flexDirection = 'column'
      style.gap = item.gap ?? '0px'
    }
    style.padding = item.padding ?? '0px'
    style.margin = item.margin ?? '0px'
    return style
  }
  const elementStyle = (item: SkeletonItem) => {
    const style: Record<string, any> = {
      width: item.width,
      height: item.height
    }
    if (item.align) {
      switch (item.align) {
        case 'left':
          style.alignSelf = 'flex-start'
          break
        case 'right':
          style.alignSelf = 'flex-end'
          break
        case 'top':
          style.alignSelf = 'flex-start'
          break
        case 'bottom':
          style.alignSelf = 'flex-end'
          break
        case 'center':
          style.alignSelf = 'center'
          break
        default:
          break
      }
    }

    return style
  }
</script>

<template>
  <template v-if="loading">
    <div :style="gridStyle(template)">
      <template v-if="template.group">
        <skeleton v-for="(child, index) in template.group" :key="index" :template="child" />
      </template>
      <template v-else>
        <div
          v-for="n in template.num || 1"
          :key="n"
          :class="`sail-skeleton__${template.type}`"
          :style="elementStyle(template)"
        >
        </div>
      </template>
    </div>
  </template>
  <slot v-else />
</template>

<style scoped lang="scss">
  .sail-skeleton__group {
    display: grid;
    gap: 10px;
  }
  .sail-skeleton__line {
    background: linear-gradient(90deg, #d7d7d7 0.96%, rgba(215, 215, 215, 0) 97.44%);
    height: 16px;
    border-radius: 3px;
  }
  .sail-skeleton__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f2f3f4;
  }
  .sail-skeleton__image {
    background: #f8f8f8;
  }
  .sail-skeleton__rect {
    background: #f8f8f8;
  }
</style>
