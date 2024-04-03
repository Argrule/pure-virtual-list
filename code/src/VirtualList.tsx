import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import type { VirtualListProps } from './VirtualList.d';
type VirtualListProps1 = VirtualListProps<string>;

export const VirtualList = (props: VirtualListProps1) => {
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
  //   const [PaddingBottom, setPaddingBottom] = useState(0);
  const [PaddingTop, setPaddingTop] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const isScrollBusy = useRef(false);

  /**
   * ? 处理数据，计算出 切片索引 & padding-top
   */
  const handleScroll = useCallback(() => {
    if (isScrollBusy.current) {
      return;
    }
    // open limit
    isScrollBusy.current = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { scrollTop } = ref.current as any;
    /**
     * ? 请求动画帧 避免画面抖动
     */
    requestAnimationFrame(() => {
      const start = Math.max(0, Math.floor(scrollTop / itemHeight) - Buffer);
      const end = Math.min(data.length, start + Count + Buffer);
      setStartIndex(start);
      setEndIndex(end);

      /**
       * ? 用于占位，替代没有DOM的项，将已创建DOM的项 顶到可见区域
       */
      setPaddingTop(start * itemHeight);
      // setPaddingBottom((data.length - end) * itemHeight);

      // close limit
      isScrollBusy.current = false;
    });
  }, [data, itemHeight, Count, Buffer]);
  /**
   * ? 初始化和props数据更新时
   */
  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <div
      style={{ overflow: 'auto', maxHeight: containerHeight }}
      onScroll={handleScroll}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
    >
      <section
        style={{
          height: ViewHeight,
          paddingTop: PaddingTop,
          // paddingBottom: PaddingBottom},
          boxSizing: 'border-box',
        }}
      >
        {data.slice(startIndex, endIndex).map((item: string, index: number) => (
          <div key={index} style={{ height: itemHeight }}>
            {renderItem(item, index)}
          </div>
        ))}
      </section>
    </div>
  );
};
