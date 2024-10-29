import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";
import useEditStore from "@/store/useEditStore";
import { useEffect } from "react";
function useLoadEditData() {
  const { id = "" } = useParams();
  const { resetComponents, changeSelectedId } = useEditStore();
  // async function load() {
  //   return {
  //     id: id,
  //   };
  // }
  // const { loading, data, error } = useRequest(load);
  useEffect(() => {
    resetComponents([
      {
        fe_id: "1",
        type: "FoundryTitle",
        title: "lalal1",
        props: { text: "这是标题", level: 1, isCenter: false },
      },
      {
        fe_id: "2",
        type: "FoundryInput",
        title: "lalal2",
        props: {
          title: "输入框裱吞吞吐吐",
          placeholder: "请快快输入。。。。。",
        },
      },
      {
        fe_id: "3",
        type: "FoundryInput",
        title: "lalal2",
        props: {
          title: "lalll1",
          placeholder: "请快2222快输入。。。。。",
        },
      },
    ]);
    // 加载完数据,清空选择
    changeSelectedId("");
  }, []);
  return {
    loading: false,
    data: {
      id: "d1",
      title: "组件示范",
      componentList: [
        {
          id: 1,
          type: "FoundryTitle",
          title: "lalal1",
          props: { text: "这是标题", level: 1, isCenter: false },
        },
        {
          id: 2,
          type: "FoundryInput",
          title: "lalal2",
          props: {
            title: "输入框裱吞吞吐吐",
            placeholder: "请快快输入。。。。。",
          },
        },
      ],
    },
    error: null,
  };
}

export default useLoadEditData;
