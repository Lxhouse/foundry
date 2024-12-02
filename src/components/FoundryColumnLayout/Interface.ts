export type FlexDirectionType =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';
export type FoundryColumnLayoutType = {
  title: string;
  flexDirection: FlexDirectionType;
  disabled: boolean;
  children?: React.ReactNode;
  onChange?: (newProps: FoundryColumnLayoutType) => void;
};

export const FoundryInputDefaultProps: FoundryColumnLayoutType = {
  title: '行列布局容器',
  flexDirection: 'column',
  disabled: false,
};
