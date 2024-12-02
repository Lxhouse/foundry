import FoundryInputConf, {
  FoundryInputPropsType,
} from '@/components/FoundryInput';
import FoundryTitleConf, {
  FoundryTitlePropsType,
} from '@/components/FoundryTitle';
import FoundryColumnLayoutConf, {
  FoundryColumnLayoutType,
} from '@/components/FoundryColumnLayout';
import { FC } from 'react';

export type ComponentConfType<PropsType> = {
  title: string;
  type: string;
  Component: FC<PropsType>;
  PropComponent: FC<PropsType>;
  defaultProps: PropsType;
};

// 定义 FoundryInputConfType 和 FoundryTitleConfType 类型
type FoundryInputConfType = ComponentConfType<FoundryInputPropsType>;
type FoundryTitleConfType = ComponentConfType<FoundryTitlePropsType>;
type FoundryColumnLayoutConfType = ComponentConfType<FoundryColumnLayoutType>;

export type ComponentPropsType = FoundryInputPropsType | FoundryTitlePropsType;
// 定义 componentConfList 为联合类型数组
const componentConfList: (
  | FoundryInputConfType
  | FoundryTitleConfType
  | FoundryColumnLayoutConfType
)[] = [FoundryInputConf, FoundryTitleConf, FoundryColumnLayoutConf];

export const componentConfGroup = [
  {
    groupId: 'LayoutGroup',
    groupName: '布局组件',
    components: [FoundryColumnLayoutConf],
  },
  {
    groupId: 'TextGroup',
    groupName: '文本显示',
    components: [FoundryTitleConf],
  },
  {
    groupId: 'InputCroup',
    groupName: '用户输入',
    components: [FoundryInputConf],
  },
];
export function getComponentConfByType(type: string) {
  if (!type) return;
  return componentConfList.find((c) => c.type === type);
}
