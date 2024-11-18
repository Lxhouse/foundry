import { ComponentPropsType } from "@/components";
import { create } from "zustand";
import cloneDeep from "lodash.clonedeep";
import { getNextSelectedId } from "./utils";
import { message } from "antd";

// 定义组件信息的类型
export type ComponentInfoType = {
  fe_id: string; // 组件唯一标识符
  type: string; // 组件类型
  title: string; // 组件标题
  isHidden: boolean; // 组件是否隐藏
  isLocked: boolean; // 组件是否锁定
  props: ComponentPropsType; // 组件的属性
};

// 定义状态类型
export type ComponentsStateType = {
  selectedId: string; // 当前选中组件的 ID
  componentList: ComponentInfoType[]; // 组件列表
  copiedComponent: ComponentInfoType | null; // 复制的组件
};

// 初始化状态
const INIT_STATE: ComponentsStateType = {
  selectedId: "",
  componentList: [],
  copiedComponent: null,
};

// 定义状态操作类型
type ComponentsStateOperation = {
  changeSelectedId: (id: string) => void; // 改变选中组件的 ID
  resetComponents: (newStates: Partial<ComponentsStateType>) => void; // 重置组件状态
  addComponents: (newComponent: ComponentInfoType) => void; // 添加新组件
  changeComponentProps: (newProps: ComponentPropsType) => void; // 修改选中组件的属性
  removeSelectedComponent: () => void; // 移除选中组件
  changeSelectComponentStates: (
    newStates: Partial<ComponentInfoType>,
    options?: {
      targetSelectedId?: string;
      needNext?: boolean;
    }
  ) => void; // 修改选中组件的状态
  copySelectedComponent: () => void; // 复制选中组件
  pasteCopiedComponent: () => void; // 粘贴复制的组件
  selectPreviousComponent: () => void; // 选中上一个组件
  selectNextComponent: () => void; // 选中下一个组件
};

// 创建 Zustand 状态管理
const useEditStore = create<ComponentsStateType & ComponentsStateOperation>(
  (set) => ({
    ...INIT_STATE,

    // 重置组件状态
    resetComponents: (newStates) =>
      set((state) => ({ ...state, ...newStates })),

    // 改变选中组件的 ID
    changeSelectedId: (id) => set({ selectedId: id }),

    // 添加新组件
    addComponents: (newComponent) =>
      set((state) => {
        const { selectedId, componentList } = state;
        const index = componentList.findIndex((c) => c.fe_id === selectedId);

        return {
          componentList:
            index < 0
              ? [...componentList, newComponent] // 如果没有选中的组件，直接添加
              : [
                  ...componentList.slice(0, index + 1),
                  newComponent, // 新组件
                  ...componentList.slice(index + 1),
                ],
          selectedId: newComponent.fe_id, // 选中新添加的组件
        };
      }),

    // 修改选中组件的属性
    changeComponentProps: (newProps) =>
      set((state) => ({
        componentList: state.componentList.map((c) =>
          c.fe_id === state.selectedId ? { ...c, props: newProps } : c
        ),
      })),

    // 移除选中组件
    removeSelectedComponent: () =>
      set((state) => {
        const { selectedId, componentList } = state;
        const newSelectId = getNextSelectedId(selectedId, componentList);
        return {
          componentList: componentList.filter((c) => c.fe_id !== selectedId), // 过滤掉选中的组件
          selectedId: newSelectId, // 更新选中 ID
        };
      }),

    // 修改选中组件的状态
    changeSelectComponentStates: (newStates, options) =>
      set((state) => {
        const { needNext = false, targetSelectedId } = options || {};
        const { selectedId, componentList } = state;
        const _selectedId = targetSelectedId ?? selectedId;
        const newSelectId = getNextSelectedId(_selectedId, componentList);
        return {
          componentList: componentList.map(
            (c) => (c.fe_id === _selectedId ? { ...c, ...newStates } : c) // 更新选中组件状态
          ),
          selectedId: needNext ? newSelectId : _selectedId, // 根据选项更新选中 ID
        };
      }),

    // 复制选中组件
    copySelectedComponent: () =>
      set((state) => {
        const { selectedId, componentList } = state;
        const selectedComponent = componentList.find(
          (c) => c.fe_id === selectedId
        );

        if (!selectedComponent) return state; // 如果没有选中的组件，返回原状态

        // 深拷贝并删除 `fe_id` 属性
        const copiedComponent = cloneDeep(selectedComponent);
        delete copiedComponent.fe_id; // 不保留 ID
        message.success("复制成功"); // 提示用户复制成功
        return { copiedComponent }; // 更新复制的组件
      }),

    // 粘贴复制的组件
    pasteCopiedComponent: () =>
      set((state) => {
        const { copiedComponent, addComponents } = state;
        if (!copiedComponent) return {}; // 如果没有复制的组件，返回空对象

        const newComponent = {
          ...cloneDeep(copiedComponent), // 深拷贝复制的组件
          fe_id: new Date().getTime().toString(), // 生成新的 ID
        };

        addComponents(newComponent); // 添加新的组件

        return {};
      }),

    // 选中上一个组件
    selectPreviousComponent: () =>
      set((state) => {
        const { selectedId, componentList } = state;
        const index = componentList.findIndex((c) => c.fe_id === selectedId);
        const previousIndex = index > 0 ? index - 1 : componentList.length - 1; // 循环选择
        return { selectedId: componentList[previousIndex].fe_id };
      }),

    // 选中下一个组件
    selectNextComponent: () =>
      set((state) => {
        const { selectedId, componentList } = state;
        const index = componentList.findIndex((c) => c.fe_id === selectedId);
        const nextIndex = index < componentList.length - 1 ? index + 1 : 0; // 循环选择
        return { selectedId: componentList[nextIndex].fe_id };
      }),
  })
);

export default useEditStore;
