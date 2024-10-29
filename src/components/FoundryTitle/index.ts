import Component from "./Component";
import { FoundryTitleDefaultProps } from "./interface";
import PropComponents from "./PropComponent";

export * from "./interface";

export default {
  title: "标题组件",
  type: "FoundryTitle",
  Component,
  PropComponents,
  defaultProps: FoundryTitleDefaultProps,
};
