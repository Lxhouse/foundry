
import useLoadEditData from '@/hooks/useLoadEditData';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import useEditStore, { ComponentInfoType } from '@/store/useEditStore';
import { getComponentConfByType } from '@/components';
import useBindCanvasKeyPress from '@/hooks/useBindCanvasKeyPress';
function getComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo || {}

  const componentConf = getComponentConfByType(type)
  if (!componentConf) return
  const { Component } = componentConf
  return Component && <Component {...props} />

}
function Canvas() {

  const { loading } = useLoadEditData();
  const { selectedId, changeSelectedId } = useEditStore()
  const { componentList } = useGetComponentInfo();
  console.log(123321, { componentList })
  useBindCanvasKeyPress()
  if (loading) return <div>loading....</div>;
  return (
    <div className="w-[386px] h-5/6 bg-white rounded p-2 overflow-auto">
      {componentList.filter(c => !c.isHidden).map(c => {
        const { fe_id, isLocked } = c
        const target = getComponent(c);

        if (!target) return null;

        const isSelected = fe_id === selectedId;
        const borderColor = isSelected ? 'border-sky-400' : 'border-white';
        const hoverColor = isSelected ? 'hover:border-sky-400' : 'hover:border-gray-300';
        const isLockedStyle = isLocked ? 'opacity-50 cursor-not-allowed' : ''
        return (
          <div
            key={fe_id}
            className={`m-2 border-2 p-3 rounded ${borderColor} ${hoverColor} ${isLockedStyle}`}
            onClick={(e) => {
              e.stopPropagation()
              changeSelectedId(fe_id)
            }}
          >
            <div className="pointer-events-none">
              {target}
            </div>
          </div>
        );
      })}
    </div>

  );
}

export default Canvas;
