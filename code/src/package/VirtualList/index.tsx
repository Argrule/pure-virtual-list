import { useState, useRef, useEffect, useMemo, useCallback } from "react";
export interface VirtualListProps<itemType> {
    data: itemType[];
    itemHeight: number;
    renderItem: (item: itemType, index: number) => React.ReactNode;
    containerHeight: number;
    buffer: number;
}

export const VirtualList = (props: VirtualListProps<unknown>) => {
    const { data, renderItem, itemHeight, containerHeight, buffer } = props;

    /**
     * ? 内容总高度
     */
    const ViewHeight = useMemo(
        () => data.length * itemHeight,
        [data, itemHeight]
    );
    /**
     * ? 缓存 可视区域 可容纳的数量
     */
    const Count = useMemo(
        () => Math.ceil(containerHeight / itemHeight),
        [containerHeight, itemHeight]
    );
    /**
     * ? 合法 buffer 数量
     */
    const Buffer = useMemo(() => Math.ceil(buffer / 2), [buffer]);

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);

    const [PaddingTop, setPaddingTop] = useState(0);

    const ref = useRef<HTMLDivElement>(null);
    const isScrollBusy = useRef(false);
    const startDistanceRef = useRef(1);

    /**
     * ? 处理数据，计算出 切片索引 & padding-top
     */
    const handleScroll = useCallback(() => {
        if (isScrollBusy.current) {
            return;
        }
        // open limit
        isScrollBusy.current = true;

        const { scrollTop } = ref.current as HTMLDivElement;
        
        const startDistance = Math.floor(scrollTop / itemHeight);
        /**
         * ? 滑动距离不超过一个元素，未发生变化
         */
        if (startDistance === startDistanceRef.current) {
            // close limit
            isScrollBusy.current = false;
            return;
        };
        startDistanceRef.current = startDistance;

        /**
         * ? 请求动画帧 避免画面抖动
         */
        requestAnimationFrame(() => {
            const start = Math.max(0, startDistance - Buffer);
            const end = Math.min(data.length, start + Count + Buffer * 2);
            setStartIndex(start);
            setEndIndex(end);

            /**
             * ? 用于占位，替代没有DOM的项，将已创建DOM的项 顶到可见区域
             */
            setPaddingTop(start * itemHeight);

            // close limit
            isScrollBusy.current = false;
        });
    }, [data, itemHeight, Count, Buffer]);
    /**
     * ? 初始化和props数据更新时
     */
    useEffect(() => {
        handleScroll();
        return () => {
            isScrollBusy.current = false;
            /**
             * ? 重置滑动距离, 保证 初始化 时能触发 handleScroll
             */
            startDistanceRef.current = 1;
        }
    }, [handleScroll]);

    return (
        <div
            style={{ overflow: "auto", maxHeight: containerHeight }}
            onScroll={handleScroll}
            ref={ref as React.RefObject<HTMLDivElement>}
        >
            <section
                style={{
                    height: ViewHeight,
                    paddingTop: PaddingTop,
                    boxSizing: "border-box",
                }}
            >
                {data.slice(startIndex, endIndex).map((item, index: number) => (
                    <div key={index} style={{ height: itemHeight }}>
                        {renderItem(item, index)}
                    </div>
                ))}
            </section>
        </div>
    );
};
