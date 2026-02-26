import { default as React } from 'react';
type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
} & ({
    isStatic: true;
    imageSrc: string;
} | {
    isStatic?: false;
    imageSrc?: never;
});
export declare const LinkPreview: ({ children, url, className, width, height, isStatic, imageSrc, }: LinkPreviewProps) => import("react/jsx-runtime").JSX.Element;
export {};
