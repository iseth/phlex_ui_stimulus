import { Controller } from "@hotwired/stimulus";
import React from "react";
import ReactDOM from "react-dom/client";
import { Command as CommandPrimitive } from "cmdk";
export default class extends Controller {
  static targets = ["content", "input", "group", "item", "empty"];
  connect() {
    const e = React.createElement;
    const root = ReactDOM.createRoot(this.contentTarget);
    root.render(e("div", null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", null, "asdf"), /* @__PURE__ */ React.createElement(CommandPrimitive, { label: "CommandPrimitive Menu" }, /* @__PURE__ */ React.createElement(CommandPrimitive.Input, null), /* @__PURE__ */ React.createElement(CommandPrimitive.List, { className: "max-h-[300px] overflow-y-auto overflow-x-hidden" }, /* @__PURE__ */ React.createElement(CommandPrimitive.Empty, null, "No results found."), /* @__PURE__ */ React.createElement(CommandPrimitive.Group, { heading: "Letters" }, /* @__PURE__ */ React.createElement(CommandPrimitive.Item, null, "a"), /* @__PURE__ */ React.createElement(CommandPrimitive.Item, null, "b"), /* @__PURE__ */ React.createElement(CommandPrimitive.Separator, null), /* @__PURE__ */ React.createElement(CommandPrimitive.Item, null, "c")), /* @__PURE__ */ React.createElement(CommandPrimitive.Item, null, "Apple"))))));
  }
  command(props) {
    return /* @__PURE__ */ React.createElement(
      CommandPrimitive,
      {
        className: "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        ...props
      }
    );
  }
  commandDialog({ children, ...props }) {
    return /* @__PURE__ */ React.createElement(Dialog, { ...props }, /* @__PURE__ */ React.createElement(DialogContent, { className: "overflow-hidden p-0" }, /* @__PURE__ */ React.createElement(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, children)));
  }
  // destroy(node){
  //     ReactDOM.unmountComponentAtNode(node);
  // }
}
