import {MapContainer, TileLayer} from 'react-leaflet';

import {Route} from "./Route.jsx";
import {useSelector} from "react-redux";

const Map = () => {
    const error = useSelector((state) => state.route.error);

    return (
        <div className="mapContainer">
            <MapContainer center={[59.836, 30.35]} zoom={12} style={{height: '100vh', flex: 1}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {error && <p className="error-message">{error}</p>}
                <Route/>
            </MapContainer>
        </div>
    );
};

export default Map;
