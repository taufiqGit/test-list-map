import { useState } from "react";

export default function Form({ setListMap }) {
  const [coordinate, setCoordinate] = useState({
    latitude: null,
    longtitude: null,
    radius: null,
  });

  const handleAddMap = (e) => {
    e.preventDefault();
    if (!coordinate.latitude || !coordinate.longtitude || !coordinate.radius)
      return;
    setListMap((prev) => [...prev, { ...coordinate, id: +new Date() }]);
  };

  return (
    <section className="w-full h-auto p-4 shadow-lg rounded-md">
      <form action="" onSubmit={handleAddMap}>
        <label htmlFor="" classame="block w-48">
          <p className="text-gray-600 text-lg">Latitude</p>
          <input
            type="text"
            className="p-1 mt-2 w-full focus:outline-none border-2 rounded-md border-black-200 focus:border-black-600"
            onChange={(e) => {
              setCoordinate((prev) => ({ ...prev, latitude: e.target.value }));
            }}
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
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded-md mt-6 py-2"
        >
          Add Map
        </button>
      </form>
    </section>
  );
}
