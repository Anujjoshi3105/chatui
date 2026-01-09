import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    asChild?: boolean;
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export { Badge, badgeVariants };
