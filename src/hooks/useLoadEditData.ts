import { useParams } from 'react-router-dom';
import useEditStore from '@/store/useEditStore';
import { useEffect } from 'react';
import { ComponentInfoType } from '@/store/useEditStore';
const mockComponentInfoData: ComponentInfoType[] = [
  {
    fe_id: 'input_001',
    type: 'FoundryInput',
    title: '用户输入框',
    isHidden: false,
    isLocked: false,
    props: {
      title: '请输入内容',
      placeholder: '这里输入...',
      disabled: false,
      onChange: (newProps) => {
        console.log('Input changed:', newProps);
      },
    },
  },
  {
    fe_id: 'title_001',
    type: 'FoundryTitle',
    title: '标题组件',
    isHidden: false,
    isLocked: true,
    props: {
      text: '这是一个标题',
      level: 2,
      isCenter: true,
      disabled: false,
      onChange: (newProps) => {
        console.log('Title changed:', newProps);
      },
    },
  },
  {
    fe_id: 'input_002',
    type: 'FoundryInput',
    title: '禁用的输入框',
    isHidden: false,
    isLocked: false,
    props: {
      title: '不可用输入',
      placeholder: '输入被禁用',
      disabled: true,
    },
  },
  {
    fe_id: 'title_002',
    type: 'FoundryTitle',
    title: '隐藏的标题',
    isHidden: true,
    isLocked: false,
    props: {
      text: '隐藏标题',
      level: 3,
      isCenter: false,
      disabled: false,
    },
  },
];
function useLoadEditData() {
  const { id = '' } = useParams();
  const { resetComponents } = useEditStore();
  // async function load() {
  //   return {
  //     id: id,
  //   };
  // }
  // const { loading, data, error } = useRequest(load);
  useEffect(() => {
    resetComponents({
      componentList: mockComponentInfoData,
      selectedId: mockComponentInfoData[0].fe_id,
      copiedComponent: null,
    });
  }, []);
  return {
    loading: false,
    data: {
      id: 'd1',
      title: '组件示范',
      componentList: [
        {
          id: 1,
          type: 'FoundryTitle',
          title: 'lalal1',
          props: { text: '这是标题', level: 1, isCenter: false },
        },
        {
          id: 2,
          type: 'FoundryInput',
          title: 'lalal2',
          props: {
            title: '输入框裱吞吞吐吐',
            placeholder: '请快快输入。。。。。',
          },
        },
      ],
    },
    error: null,
  };
}

export default useLoadEditData;
