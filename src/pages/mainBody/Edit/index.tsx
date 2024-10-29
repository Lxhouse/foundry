import Controls from './Controls';
import Materiel from './Materiel';
import Canvas from './Canvas';
import useEditStore from '@/store/useEditStore';
import EditHeader from './EditHeader';
//编辑区域
function Edit() {
  const { changeSelectedId } = useEditStore()
  return (
    <div className='flex flex-col h-screen'>
      <EditHeader />
      <div className="flex flex-1 w-screen h-full bg-slate-200 p-2">
        <Materiel />
        <div className="flex flex-1 items-center justify-center" onClick={() => changeSelectedId("")}>
          <Canvas />
        </div>
        <Controls />
      </div>
    </div>
  );
}
export default Edit;
