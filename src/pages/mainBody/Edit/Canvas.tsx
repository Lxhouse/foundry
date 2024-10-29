import FoundryInput from '@/components/FoundryInput/Component';
import FoundryTitle from '@/components/FoundryTitle/Component';
import useLoadEditData from '@/hooks/useLoadEditData';
import useGetComponentInfo from '@/hooks/useGetComponentinfo';
import { ComponentInfoType } from '@/store/useEditStore';
import { getComponentConfByType } from '@/components';

function getComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo || {}
  const componentConf = getComponentConfByType(type)
  if (!componentConf) return
  const { Component } = componentConf
  return Component && <Component {...props} />

}
function Canvas() {
  const { loading } = useLoadEditData();
  const { componentList } = useGetComponentInfo();

  if (loading) return <div>loading....</div>;
  return (
    <div className=" w-[386px] h-5/6 bg-white rounded p-2 overflow-auto">
      {componentList.map(c => {
        const { fe_id } = c
        const target = getComponent(c)
        if (!target) return
        return <div key={fe_id} className="m-1 border border-white p-1 rounded hover:border-gray-300">
          <div className="pointer-events-none">
            {target}
          </div>
        </div>
      })}

      {/* <div className="m-3 border border-white p-3 rounded hover:border-gray-300">
        <div className="pointer-events-none">
          <FoundryTitle />
        </div>
      </div>
      <div className="m-3 border border-white p-3 rounded hover:border-gray-300">
        <div className="pointer-events-none">
          <FoundryInput />
        </div>
      </div> */}
    </div>
  );
}

export default Canvas;
