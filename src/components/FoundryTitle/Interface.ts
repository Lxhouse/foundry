export type FoundryTitlePropsType = {
  text?: string;
  level: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;
};

export const FoundryTitleDefaultProps: FoundryTitlePropsType = {
  text: '一行标题',
  level: 1,
  isCenter: false,
};