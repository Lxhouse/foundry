import useEditStore from '@/store/useEditStore';
import useComponentsStore from '@/store/useComponentsStore';

function useGetComponentInfo() {
  const { componentList } = useEditStore();
  const { components } = useComponentsStore();

  return { componentList };
}

export default useGetComponentInfo;
