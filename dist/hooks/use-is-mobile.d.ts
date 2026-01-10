/**
 * Hook to detect if the current viewport is mobile-sized based on width and/or height
 * @param width - Width in pixels or string below which is considered mobile. Default: 640
 * @param height - Height in pixels or string below which is considered mobile. Default: 0
 * @returns boolean indicating if the screen is mobile-sized
 */
export declare function useIsMobile(width?: number | string, height?: number | string): boolean;
