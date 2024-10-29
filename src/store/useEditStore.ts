import { ComponentPropsType } from "@/components";
import { create } from "zustand";
export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  props: ComponentPropsType;
};
export type ComponentsStateType = {
  selectedId: string;
  componentList: ComponentInfoType[];
};
const INIT_STATE: ComponentsStateType = {
  selectedId: "",
  componentList: [],
};

type ComponentsStateOperation = {
  changeSelectedId: (id: string) => void;
  resetComponents: (newComponentList: ComponentInfoType[]) => void;
  addComponents: (newComponent: ComponentInfoType) => void;
};
// 创建 Zustand 状态
const useEditStore = create<ComponentsStateType & ComponentsStateOperation>(
  (set) => ({
    ...INIT_STATE,
    resetComponents: (newComponentList: ComponentInfoType[] = []) =>
      set(() => ({ componentList: newComponentList })),
    changeSelectedId: (id: string) => set(() => ({ selectedId: id })),
    addComponents: (newComponent: ComponentInfoType) =>
      set((state) => {
        const { selectedId, componentList } = state;
        const index = componentList.findIndex((c) => c.fe_id === selectedId);

        const newComponentList =
          index < 0
            ? [...componentList, newComponent]
            : [
                ...componentList.slice(0, index + 1),
                newComponent, // 新组件
                ...componentList.slice(index + 1),
              ];

        return {
          componentList: newComponentList,
          selectedId: newComponent.fe_id,
        };
      }),
  })
);

export default useEditStore;
