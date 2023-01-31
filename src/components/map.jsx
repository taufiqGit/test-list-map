import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ listMap }) {
  return (
    <section className="w-full h-auto p-3 shadow-xl mt-4">
      <h2 className="font-semibold text-gray-800 mb-2">Maps</h2>
      <div className="w-full h-[380px]">
        <MapContainer
          center={[-0.789275, 113.921326]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {listMap.map((cord) => (
            <Circle
              center={[cord.latitude, cord.longtitude]}
              pathOptions={{ color: "red" }}
              radius={cord.radius}
            ></Circle>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
