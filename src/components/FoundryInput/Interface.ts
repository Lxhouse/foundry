export type FoundryInputPropsType = {
  title?: string;
  placeholder?: string;
  onChange?: (newProps: FoundryInputPropsType) => void;
};

export const FoundryInputDefaultProps: FoundryInputPropsType = {
  title: "输入框标题",
  placeholder: "请输入",
};
