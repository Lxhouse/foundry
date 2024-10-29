import FoundryInputConf, {
  FoundryInputPropsType,
} from "@/components/FoundryInput";
import FoundryTitleConf, {
  FoundryTitlePropsType,
} from "@/components/FoundryTitle";
import { FC } from "react";

export type ComponentConfType<PropsType> = {
  title: string;
  type: string;
  Component: FC<PropsType>;
  defaultProps: PropsType;
};

// 定义 FoundryInputConfType 和 FoundryTitleConfType 类型
type FoundryInputConfType = ComponentConfType<FoundryInputPropsType>;
type FoundryTitleConfType = ComponentConfType<FoundryTitlePropsType>;

export type ComponentPropsType = FoundryInputPropsType | FoundryTitlePropsType;
// 定义 componentConfList 为联合类型数组
const componentConfList: (FoundryInputConfType | FoundryTitleConfType)[] = [
  FoundryInputConf,
  FoundryTitleConf,
];

export function getComponentConfByType(type: string) {
  if (!type) return;
  return componentConfList.find((c) => c.type === type);
}
