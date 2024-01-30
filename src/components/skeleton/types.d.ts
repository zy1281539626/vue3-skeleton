export type SkeletonItem = {
  type?: "avatar" | "line" | "image" | "rect" | "circle";
  width?: string;
  height?: string;
  gap?: string;
  col?: number;
  num?: number;
  group?: SkeletonItem[];
  align?: "left" | "right" | "top" | "bottom" | "center";
};
