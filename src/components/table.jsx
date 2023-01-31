export default function Table({ listMap, setListMap }) {
  const handleDelete = (id) => {
    setListMap((cords) => cords.filter((val) => val.id !== id));
  };

  return (
    <section className="antialiased  text-gray-600 mt-8">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">List Coordinate</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Latitude</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Longtitude</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Radius</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {listMap.length <= 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-3">
                        data not found
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                  {listMap.map((cord) => (
                    <tr key={cord.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left ">{cord.latitude}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{cord.longtitude}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{cord.radius}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">
                          <button
                            onClick={() => handleDelete(cord.id)}
                            className="py-1 px-2 text-sm rounded-md bg-red-500 text-white"
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
