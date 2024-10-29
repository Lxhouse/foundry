import { ComponentInfoType } from "./useEditStore";

/**
 * 获取对应组件的下一个组件的 id
 * @param fe_id 当前组件的 id
 * @param componentList 组件列表
 * @returns 下一个组件的 id 或 undefined
 */
export function getNextSelectedId(
  fe_id: string,
  componentList: ComponentInfoType[]
) {
  // 查找当前组件的索引
  const index = componentList.findIndex((c) => c.fe_id === fe_id);

  // 如果没有找到对应的组件，返回 undefined
  if (index < 0) return;

  const len = componentList.length;

  // 如果组件列表只有一个或没有，返回 undefined
  if (len <= 1) return;

  // 获取下一个组件的 id
  const nextIndex = index + 1;

  // 判断是否已经到达最后一个组件
  if (nextIndex >= len) {
    return componentList[index - 1].fe_id; // 返回前一个组件的 id
  }

  // 返回下一个组件的 id
  return componentList[nextIndex].fe_id;
}
