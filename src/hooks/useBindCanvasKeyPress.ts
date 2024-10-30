import { useKeyPress } from "ahooks";
import useEditStore from "@/store/useEditStore";

function isActiveElementValid(): boolean {
  return document.activeElement === document.body;
}

function useBindCanvasKeyPress(): void {
  const {
    removeSelectedComponent,
    copySelectedComponent,
    pasteCopiedComponent,
  } = useEditStore();

  const executeActionIfValid = (action: () => void): void => {
    if (isActiveElementValid()) action();
  };

  //删除
  useKeyPress(["backspace", "delete"], () =>
    executeActionIfValid(removeSelectedComponent)
  );
  //复制
  useKeyPress(["ctrl.c", "meta.c"], () =>
    executeActionIfValid(copySelectedComponent)
  );
  //粘贴
  useKeyPress(["ctrl.v", "meta.v"], () =>
    executeActionIfValid(pasteCopiedComponent)
  );
}

export default useBindCanvasKeyPress;
