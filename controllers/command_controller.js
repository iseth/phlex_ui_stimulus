import { Controller } from "@hotwired/stimulus";
// import { Command } from "cmdk";
import React from "react"
import ReactDOM from "react-dom/client";
import { Command as CommandPrimitive } from "cmdk"


// Connects to data-controller="command"
export default class extends Controller {
    static targets = ["content", "input", "group", "item", "empty"]
    connect() {
        // ReactDOM.render(this.commandTarget, <input placeholder="jkllljk" />);
        // console.log("connected");
        // console.log(this.commandTarget);
        // this.commandTarget.innerHTML = "<input placeholder='jkllljk' />";
        const e = React.createElement;

        const root = ReactDOM.createRoot(this.contentTarget);
        // ReactDOM.render(this.contentTarget, <button>asdf</button>);

        root.render(e('div', null, (
        <>
            <button>asdf</button>
    <CommandPrimitive label="CommandPrimitive Menu">
      <CommandPrimitive.Input />
      <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
        <CommandPrimitive.Empty>No results found.</CommandPrimitive.Empty>

        <CommandPrimitive.Group heading="Letters">
          <CommandPrimitive.Item>a</CommandPrimitive.Item>
          <CommandPrimitive.Item>b</CommandPrimitive.Item>
          <CommandPrimitive.Separator />
          <CommandPrimitive.Item>c</CommandPrimitive.Item>
        </CommandPrimitive.Group>

        <CommandPrimitive.Item>Apple</CommandPrimitive.Item>
      </CommandPrimitive.List>
    </CommandPrimitive>

        </>
            // Command.displayName = CommandPrimitive.displayName
        )));
    }

    command(props){
        return (
            <CommandPrimitive
                className={"flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"}
                {...props}
            />
        )
        // const Command = React.forwardRef(({ className, ...props }, ref) => (
        // <CommandPrimitive
        //     ref={ref}
        //     className={cn(
        //     "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        //     className
        //     )}
        //     {...props}
        // />
        // ))
        // Command.displayName = CommandPrimitive.displayName
    }

    commandDialog({children, ...props}){
        return (
            <Dialog {...props}>
                <DialogContent className="overflow-hidden p-0">
                    <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    {children}
                    </Command>
                </DialogContent>
            </Dialog>
        )
    }

    // destroy(node){
    //     ReactDOM.unmountComponentAtNode(node);
    // }
}
