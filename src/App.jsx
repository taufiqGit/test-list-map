import { useState } from "react";
import Form from "./components/form";
import Map from "./components/map";
import Table from "./components/table";

function App() {
  const [listMap, setListMap] = useState([]);
  const [formIsEdit, setFormIsEdit] = useState({ status: false, id: null });

  return (
    <div className="w-full flex justify-center">
      <main className="w-[710px] max-w-4xl py-8 lg:px-0 px-4">
        <Form
          listMap={listMap}
          setListMap={setListMap}
          formIsEdit={formIsEdit}
          setFormIsEdit={setFormIsEdit}
        />
        <Table
          listMap={listMap}
          setListMap={setListMap}
          setFormIsEdit={setFormIsEdit}
        />
        <Map listMap={listMap} />
      </main>
    </div>
  );
}

export default App;
