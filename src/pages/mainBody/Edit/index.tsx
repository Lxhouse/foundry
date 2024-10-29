import Controls from './Controls';
import Materiel from './Materiel';
import Canvas from './Canvas';
import useEditStore from '@/store/useEditStore';
//编辑区域
function Edit() {
  const { changeSelectedId } = useEditStore()
  return (
    <div className="flex w-screen h-screen bg-slate-200 p-2">

      <Materiel />
      <div className="flex flex-1 items-center justify-center" onClick={() => changeSelectedId("")}>
        <Canvas />
      </div>
      <Controls />
    </div>
  );
}
export default Edit;
