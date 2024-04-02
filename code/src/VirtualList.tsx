import { useState, useRef, useEffect } from 'react';
import type { VirtualListProps } from './VirtualList.d';
type VirtualListProps1 = VirtualListProps<string>;

export const VirtualList = (props: VirtualListProps1) => {
  const { data, renderItem, itemHeight, containerHeight, buffer } = props;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    Math.min(data.length, Math.ceil(containerHeight / itemHeight))
  );

  //   const [PaddingBottom, setPaddingBottom] = useState(0);
  const [PaddingTop, setPaddingTop] = useState(0);
  const [ViewHeight, setViewHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { scrollTop } = ref.current as any;
    const start = Math.max(0, Math.floor(scrollTop / itemHeight));
    const end = Math.min(
      data.length,
      start + Math.ceil(containerHeight / itemHeight) + buffer
    );

    console.log(scrollTop, start, end, PaddingTop);
    setStartIndex(start);
    setEndIndex(end);

    setPaddingTop(start * itemHeight);
    // setPaddingBottom((data.length - end) * itemHeight);
  };
  useEffect(() => {
    console.log('useEffect');

    handleScroll();
    setViewHeight(data.length * itemHeight);
  }, [data]);

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
          paddingTop: `${PaddingTop}px`,
          //   paddingBottom: `${PaddingBottom}px`,
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
