import { FC, useEffect } from 'react';
import Controls from './Controls';
import Materiel from './Materiel';
import Canvas from './Canvas';
import useEditStore from '@/store/useEditStore';
import EditHeader from './EditHeader';
import { IPage } from '@/types/jsonSchemaType';

interface IEdit {
  page: IPage;
}

const Edit: FC<IEdit> = ({ page }) => {
  const { changeSelectedId, setPageExcludeComPInfo, resetComponents } =
    useEditStore();

  useEffect(() => {
    if (page) {
      const { config, ...args } = page;
      setPageExcludeComPInfo(args as Exclude<IPage, 'config'>);
      try {
        const ComponentInfoData = JSON.parse(config || '[]');
        resetComponents({
          componentList: ComponentInfoData,
          selectedId: ComponentInfoData[0]?.fe_id || '',
          copiedComponent: null,
        });
      } catch (error) {
        console.error('error', error);
        resetComponents({
          componentList: [],
          selectedId: '',
          copiedComponent: null,
        });
      }
    }
  }, [page, setPageExcludeComPInfo, resetComponents]);

  return (
    <div className="flex flex-col h-screen">
      <EditHeader />
      <div className="flex flex-1 w-screen h-full bg-slate-200 p-2">
        <Materiel />
        <div
          className="flex flex-1 items-center justify-center"
          onClick={() => changeSelectedId('')}
        >
          <Canvas />
        </div>
        <Controls />
      </div>
    </div>
  );
};

export default Edit;
