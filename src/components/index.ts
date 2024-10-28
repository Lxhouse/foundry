import FoundryInputConf, {
  FoundryInputPropsType,
} from '@/components/FoundryInput';
import FoundryTitleConf, {
  FoundryTitlePropsType,
} from '@/components/FoundryTitle';
import { FC } from 'react';

export type ComponentPropsType = FoundryInputPropsType & FoundryTitlePropsType;

export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
};

const componentConfList: ComponentConfType[] = [
  FoundryInputConf,
  FoundryTitleConf,
];

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type);
}
