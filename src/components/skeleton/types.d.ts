export type SkeletonItem = {
  type?: 'avatar' | 'line' | 'image' | 'rect' | 'circle' // 类型
  width?: string // 宽度
  height?: string // 高度
  gap?: string // 间距
  col?: number // 列数，default: 1
  num?: number // 数量，default: 1
  group?: SkeletonItem[] // 子项
  align?: 'left' | 'right' | 'top' | 'bottom' | 'center' // 对齐方式
  padding?: string // 内边距
  margin?: string // 外边距
}
