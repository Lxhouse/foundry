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
  resetComponents: (newComponentList: ComponentInfoType[]) => void;
  changeSelectedId: (id: string) => void;
};
// 创建 Zustand 状态
const useEditStore = create<ComponentsStateType & ComponentsStateOperation>(
  (set) => ({
    ...INIT_STATE,
    resetComponents: (newComponentList: ComponentInfoType[] = []) =>
      set(() => ({ componentList: newComponentList })),
    changeSelectedId: (id: string) => set(() => ({ selectedId: id })),
  })
);

export default useEditStore;
