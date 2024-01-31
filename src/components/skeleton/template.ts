import { SkeletonItem } from './types'

// 首页：活动专区骨架屏
export const HomeActivitySkeleton: SkeletonItem = {
  gap: '8px',
  group: [
    { type: 'image', height: '100px' },
    { type: 'line', height: '20px', padding: '0 8px' },
    { type: 'line', height: '13px', width: '63%', padding: '0 8px' }
  ]
}

// 首页：优惠券列表骨架屏
export const HomeCouponSkeleton: SkeletonItem = {
  col: 4,
  gap: '4px',
  group: [
    { type: 'image', height: '33px', width: '33px' },
    { type: 'image', height: '33px', width: '33px' },
    { type: 'image', height: '33px', width: '33px' },
    { type: 'image', height: '33px', width: '33px' }
  ]
}

// 首页：最新推广骨架屏
export const HomePromotionSkeleton: SkeletonItem = {
  gap: '23px',
  group: [
    { type: 'line', height: '20px' },
    {
      group: [{ type: 'image', height: '210px', num: 4, gap: '26px' }]
    }
  ]
}

// 示例：卡片骨架屏
export const CardSkeletonItem: SkeletonItem = {
  gap: '10px',
  group: [
    { type: 'image', height: '150px' },
    { type: 'line', num: 2 }
  ]
}

// 示例：图标骨架屏
export const IconSkeletonItem: SkeletonItem = {
  gap: '10px',
  group: [{ type: 'rect', width: '50px', height: '50px', align: 'center' }, { type: 'line' }]
}

// 示例：列表骨架屏
export const ListSkeletonItem: SkeletonItem = {
  gap: '10px',
  group: [{ type: 'line', num: 10 }]
}

// 示例：自定义骨架屏
export const CustomSkeletonItem: SkeletonItem = {
  col: 2,
  gap: '5px',
  group: [
    {
      gap: '20px',
      col: 2,
      group: [
        { type: 'line', num: 2 },
        { type: 'avatar', num: 2 }
      ]
    },
    {
      gap: '10px',
      col: 2,
      group: [
        { type: 'line', num: 2 },
        {
          gap: '10px',
          group: [
            { type: 'line', num: 2 },
            { type: 'line', num: 2 },
            { type: 'line', num: 2, width: '50%' }
          ]
        }
      ]
    }
  ]
}
