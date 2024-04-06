import { useState, useEffect } from "react";
import "./App.css";
// import VirtualList from "./demo/index";
import { VirtualList } from "../dist";

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
            <button onClick={handleAddMockData}>mock data</button>
            <button onClick={handleClear}>clear</button>
            <VirtualList
                data={List}
                renderItem={ListItem}
                itemHeight={50}
                containerHeight={300}
                buffer={4}
            />
        </>
    );
}

export default App;
