export interface VirtualListProps<itemType> {
    data: itemType[];
    itemHeight: number;
    renderItem: (item: itemType, index: number) => React.ReactNode;
    containerHeight: number;
    buffer: number;
}