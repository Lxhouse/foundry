import { useKeyPress } from "ahooks";
import useEditStore from "@/store/useEditStore";

// 判断当前活动元素是否有效
function isActiveElementValid(): boolean {
  return document.activeElement === document.body;
}

function useBindCanvasKeyPress(): void {
  const {
    removeSelectedComponent,
    copySelectedComponent,
    pasteCopiedComponent,
    selectPreviousComponent, // 引入选中上一个组件的方法
    selectNextComponent, // 引入选中下一个组件的方法
  } = useEditStore();

  const executeActionIfValid = (action: () => void): void => {
    if (isActiveElementValid()) action();
  };

  // 删除
  useKeyPress(["backspace", "delete"], () =>
    executeActionIfValid(removeSelectedComponent)
  );

  // 复制
  useKeyPress(["ctrl.c", "meta.c"], () =>
    executeActionIfValid(copySelectedComponent)
  );

  // 粘贴
  useKeyPress(["ctrl.v", "meta.v"], () =>
    executeActionIfValid(pasteCopiedComponent)
  );

  // 选中上一个组件
  useKeyPress(["uparrow"], () => executeActionIfValid(selectPreviousComponent));

  // 选中下一个组件
  useKeyPress(["downarrow"], () => executeActionIfValid(selectNextComponent));
}

export default useBindCanvasKeyPress;
