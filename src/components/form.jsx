import { useEffect, useState } from "react";

export default function Form({
  listMap,
  setListMap,
  formIsEdit,
  setFormIsEdit,
}) {
  const initialistate = {
    latitude: "",
    longtitude: "",
    radius: "",
    id: null,
  };
  const [coordinate, setCoordinate] = useState(initialistate);

  const handleAddMap = (e) => {
    e.preventDefault();
    if (!coordinate.latitude || !coordinate.longtitude || !coordinate.radius)
      return;
    if (formIsEdit?.status) {
      const copyListMap = listMap;
      const findIndex = copyListMap.findIndex(
        (cord) => cord.id === formIsEdit.id
      );
      copyListMap.splice(findIndex, 1, coordinate);
      setListMap(copyListMap);
      setFormIsEdit({ status: false, id: null });
    } else {
      setListMap((prev) => [...prev, { ...coordinate, id: +new Date() }]);
    }
    setCoordinate(initialistate);
  };

  useEffect(() => {
    if (formIsEdit.id) {
      const findMapEdit = listMap.find((cord) => cord.id === formIsEdit.id);
      setCoordinate(findMapEdit);
    }
  }, [formIsEdit.id]);
  return (
    <section className="w-full h-auto p-4 shadow-lg rounded-md">
      <div>
        <h2 className="font-semibold text-gray-800 mb-2">Forms</h2>
        {formIsEdit?.status ? (
          <div>
            <p>Edited Map ID : {formIsEdit?.id}</p>
            <button
              onClick={() => setFormIsEdit({ status: false, id: null })}
              className="py-1 px-2 my-1 text-sm rounded-md bg-blue-500 text-white"
            >
              Undo Edit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr className="my-2" />
      <form action="" onSubmit={handleAddMap}>
        <label htmlFor="" classame="block w-48">
          <p className="text-gray-600 text-lg">Latitude</p>
          <input
            type="text"
            className="p-1 mt-2 w-full focus:outline-none border-2 rounded-md border-black-200 focus:border-black-600"
            onChange={(e) => {
              setCoordinate((prev) => ({ ...prev, latitude: e.target.value }));
            }}
            value={coordinate.latitude}
          />
        </label>
        <label htmlFor="" className="mt-3 block">
          <p className="text-gray-600 text-lg">Longitude</p>
          <input
            type="text"
            className="p-1 mt-2 w-full focus:outline-none border-2 rounded-md border-black-200 focus:border-black-600"
            onChange={(e) => {
              setCoordinate((prev) => ({
                ...prev,
                longtitude: e.target.value,
              }));
            }}
            value={coordinate.longtitude}
          />
        </label>
        <label htmlFor="" className="mt-3 block">
          <p className="text-gray-600 text-lg">Radius</p>
          <input
            type="number"
            className="p-1 mt-2 w-full focus:outline-none border-2 rounded-md border-black-200 focus:border-black-600"
            onChange={(e) => {
              setCoordinate((prev) => ({ ...prev, radius: e.target.value }));
            }}
            value={coordinate.radius}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded-md mt-6 py-2"
        >
          {formIsEdit.status ? "Change" : "Add"} Map
        </button>
      </form>
    </section>
  );
}
