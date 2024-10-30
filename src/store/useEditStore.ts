import { ComponentPropsType } from "@/components";
import { create } from "zustand";
import cloneDeep from "lodash.clonedeep";
import { getNextSelectedId } from "./utils";
import { message } from "antd";
export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  isHidden: boolean;
  isLocked: boolean;
  props: ComponentPropsType;
};

export type ComponentsStateType = {
  selectedId: string;
  componentList: ComponentInfoType[];
  copiedComponent: ComponentInfoType | null;
};

const INIT_STATE: ComponentsStateType = {
  selectedId: "",
  componentList: [],
  copiedComponent: null,
};

type ComponentsStateOperation = {
  changeSelectedId: (id: string) => void;
  resetComponents: (newStates: Partial<ComponentsStateType>) => void;
  addComponents: (newComponent: ComponentInfoType) => void;
  changeComponentProps: (newProps: ComponentPropsType) => void;
  removeSelectedComponent: () => void;
  changeSelectComponentStates: (
    newStates: Partial<ComponentInfoType>,
    options?: { needNext: boolean }
  ) => void;
  copySelectedComponent: () => void;
  pasteCopiedComponent: () => void;
};

// 创建 Zustand 状态
const useEditStore = create<ComponentsStateType & ComponentsStateOperation>(
  (set) => ({
    ...INIT_STATE,

    resetComponents: (newStates) =>
      set((state) => ({ ...state, ...newStates })),

    changeSelectedId: (id) => set({ selectedId: id }),

    addComponents: (newComponent) =>
      set((state) => {
        const { selectedId, componentList } = state;
        const index = componentList.findIndex((c) => c.fe_id === selectedId);

        return {
          componentList:
            index < 0
              ? [...componentList, newComponent]
              : [
                  ...componentList.slice(0, index + 1),
                  newComponent, // 新组件
                  ...componentList.slice(index + 1),
                ],
          selectedId: newComponent.fe_id,
        };
      }),

    changeComponentProps: (newProps) =>
      set((state) => ({
        componentList: state.componentList.map((c) =>
          c.fe_id === state.selectedId ? { ...c, props: newProps } : c
        ),
      })),
    removeSelectedComponent: () =>
      set((state) => {
        const { selectedId, componentList } = state;
        const newSelectId = getNextSelectedId(selectedId, componentList);
        return {
          componentList: componentList.filter((c) => c.fe_id !== selectedId),
          selectedId: newSelectId,
        };
      }),
    changeSelectComponentStates: (newStates, options = { needNext: false }) =>
      set((state) => {
        const { needNext } = options;
        const { selectedId, componentList } = state;
        const newSelectId = getNextSelectedId(selectedId, componentList);
        return {
          componentList: componentList.map((c) =>
            c.fe_id === selectedId ? { ...c, ...newStates } : c
          ),
          selectedId: needNext ? newSelectId : selectedId,
        };
      }),
    copySelectedComponent: () =>
      set((state) => {
        const { selectedId, componentList } = state;
        const selectedComponent = componentList.find(
          (c) => c.fe_id === selectedId
        );

        if (!selectedComponent) return state;

        // 深拷贝并删除 `fe_id` 属性
        const copiedComponent = cloneDeep(selectedComponent);
        delete copiedComponent.fe_id;
        message.success("复制成功");
        return { copiedComponent };
      }),
    pasteCopiedComponent: () =>
      set((state) => {
        const { copiedComponent, addComponents } = state;
        if (!copiedComponent) return {};

        const newComponent = {
          ...cloneDeep(copiedComponent),
          fe_id: new Date().getTime().toString(),
        };

        addComponents(newComponent);

        return {};
      }),
  })
);

export default useEditStore;
