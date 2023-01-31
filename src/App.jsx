import { useState } from "react";
import Form from "./components/form";
import Map from "./components/map";
import Table from "./components/table";

function App() {
  const [listMap, setListMap] = useState([]);

  return (
    <div className="w-full flex justify-center">
      <main className="w-[710px] max-w-4xl py-8 lg:px-0 px-4">
        <Form setListMap={setListMap} />
        <Table listMap={listMap} setListMap={setListMap} />
        <Map listMap={listMap} />
      </main>
    </div>
  );
}

export default App;
