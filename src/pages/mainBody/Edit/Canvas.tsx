import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import useEditStore, { ComponentInfoType } from '@/store/useEditStore';
import { getComponentConfByType } from '@/components';
import useBindCanvasKeyPress from '@/hooks/useBindCanvasKeyPress';
import SortableContainer from '@/components/DragSortable/sortableContainer';
import SortableItem from '@/components/DragSortable/SortableItem';
function getComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo || {};

  const componentConf = getComponentConfByType(type);
  if (!componentConf) return;
  const { Component } = componentConf;
  return Component ? <Component {...props} /> : <div>该组件未注册</div>;
}
function Canvas() {
  const { selectedId, changeSelectedId, changeComponentOrder } = useEditStore();
  const { componentList } = useGetComponentInfo();
  useBindCanvasKeyPress();

  return (
    <div className="w-[386px] h-5/6 bg-white rounded p-2 overflow-auto">
      <SortableContainer
        items={componentList.map((c) => ({ id: c.fe_id, ...c }))}
        onDragEnd={changeComponentOrder}
      >
        {componentList
          .filter((c) => !c.isHidden)
          .map((c) => {
            const { fe_id, isLocked } = c;
            const target = getComponent(c);
            const isSelected = fe_id === selectedId;
            const borderColor = isSelected ? 'border-sky-400' : 'border-white';
            const hoverColor = isSelected
              ? 'hover:border-sky-400'
              : 'hover:border-gray-300';
            const isLockedStyle = isLocked
              ? 'opacity-50 cursor-not-allowed'
              : '';
            return (
              <SortableItem key={fe_id} id={fe_id}>
                <div
                  key={fe_id}
                  className={`m-2 border-2 p-3 rounded ${borderColor} ${hoverColor} ${isLockedStyle}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeSelectedId(fe_id);
                  }}
                >
                  <div className="pointer-events-none">{target}</div>
                </div>
              </SortableItem>
            );
          })}
      </SortableContainer>
    </div>
  );
}

export default Canvas;
