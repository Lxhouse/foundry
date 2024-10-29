import Component from "./Component";
import { FoundryTitleDefaultProps } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";

export default {
  title: "标题组件",
  type: "FoundryTitle",
  Component,
  PropComponent,
  defaultProps: FoundryTitleDefaultProps,
};
