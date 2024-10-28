import { ComponentPropsType } from '@/components';
import { create } from 'zustand';
export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  props: ComponentPropsType;
};
export type ComponentsStateType = {
  componentList: ComponentInfoType[];
};
const INIT_STATE: ComponentsStateType = {
  componentList: [],
};

type ComponentsStateOperation = {
  resetComponents: (newComponentList: ComponentInfoType[]) => void;
};
// 创建 Zustand 状态
const useEditStore = create<ComponentsStateType & ComponentsStateOperation>(
  (set) => ({
    ...INIT_STATE,
    resetComponents: (newComponentList: ComponentInfoType[] = []) =>
      set(() => ({ componentList: newComponentList })),
  })
);

export default useEditStore;
