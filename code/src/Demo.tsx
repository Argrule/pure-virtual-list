import { useState, useEffect } from "react";
import "./Demo.css";
// import VirtualList from "./demo/index";
// import { VirtualList } from "../dist";
import { VirtualList } from "pure-virtual-list";

type itemType = {
    id: number;
    key: string;
};

const ListItem = (item: unknown, index: number) => {
    return <div key={index}>{(item as itemType).key}</div>;
};

function App() {
    const [List, setList] = useState<unknown[]>([]);

    const handleAddMockData = () => {
        const tmp = [...List];
        for (let i = 0; i < 50; i++) {
            tmp.push({
                id: i,
                key: `item ${i}`,
            });
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
            <VirtualList
                data={List}
                renderItem={ListItem}
                itemHeight={50}
                containerHeight={300}
                buffer={4}
            />
            <button onClick={handleAddMockData} className="card">mock data</button>
            <button onClick={handleClear} className="card">clear</button>
        </>
    );
}

export default App;
