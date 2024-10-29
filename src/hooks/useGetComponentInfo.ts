import useEditStore from "@/store/useEditStore";

function useGetComponentInfo() {
  const { selectedId, componentList } = useEditStore();
  const selectedComponent = componentList.find((c) => c.fe_id === selectedId);
  return { componentList, selectedComponent };
}

export default useGetComponentInfo;
