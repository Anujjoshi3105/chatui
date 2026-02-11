import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
declare const Sheet: React.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    side?: "left" | "right";
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
declare function SheetHeader({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): import("react/jsx-runtime").JSX.Element;
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): import("react/jsx-runtime").JSX.Element;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription, };
