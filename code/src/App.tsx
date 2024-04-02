import { useState, useEffect } from 'react';
import './App.css';
import { VirtualList } from './VirtualList';

const ListItem = (item: string, index: number) => {
  return <div key={index}>{item}</div>;
};

function App() {
  const [List, setList] = useState<string[]>([]);

  const handleAddMockData = () => {
    const tmp = [...List];
    for (let i = 0; i < 50; i++) {
      tmp.push(`item ${i}`);
    }
    setList(tmp);
  };
  const handleClear = () => {
    setList([]);
  };
  useEffect(() => {
    handleAddMockData();
  }, []);
  return (
    <>
      <p className="read-the-docs">here is virtual list</p>
      <button onClick={handleAddMockData}>mock data</button>
      <button onClick={handleClear}>clear</button>
      <VirtualList
        data={List}
        renderItem={ListItem}
        itemHeight={50}
        containerHeight={300}
        buffer={2}
      />
    </>
  );
}

export default App;
