/// <reference types="react" />
export interface VirtualListProps<itemType> {
    data: itemType[];
    itemHeight: number;
    renderItem: (item: itemType, index: number) => React.ReactNode;
    containerHeight: number;
    buffer: number;
}
export declare const VirtualList: (props: VirtualListProps<unknown>) => import("react/jsx-runtime").JSX.Element;
