import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type itemType = any;
export interface VirtualListProps<itemType> {
    data: itemType[];
    itemHeight: number;
    renderItem: (item: itemType, index: number) => React.ReactNode;
    containerHeight: number;
    buffer: number;
}