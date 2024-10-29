import { FoundryInput } from "@/components/FoundryInput/Component";
import Component from "./Component";
import { FoundryInputDefaultProps } from "./interface";
import PropComponent from "./propComponent";

export * from "./interface";

export default {
  title: "输入框",
  type: "FoundryInput",
  Component,
  PropComponent,
  defaultProps: FoundryInputDefaultProps,
};
