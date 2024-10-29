import { FoundryInput } from "@/components/FoundryInput/Component";
import Component from "./Component";
import { FoundryInputDefaultProps } from "./interface";
import PropComponents from "./propComponent";

export * from "./interface";

export default {
  title: "输入框",
  type: "FoundryInput",
  Component,
  PropComponents,
  defaultProps: FoundryInputDefaultProps,
};
