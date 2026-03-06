import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
declare function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare const PopoverTrigger: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
