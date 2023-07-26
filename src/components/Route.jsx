import {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Marker, Polyline, useMap} from 'react-leaflet';
import L from "leaflet";
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

export const Route = () => {
    const selectedRoute = useSelector((state) => state.route.selectedRoute);

    const mapRef = useMap();

    useEffect(() => {
        if (selectedRoute?.coordinates?.length > 0) {
            const bounds = L.latLngBounds(selectedRoute.coordinates);
            mapRef.fitBounds(bounds);
        }
    }, [selectedRoute, mapRef]);

    if (!selectedRoute) {
        return null;
    }

    return (
        <>
            <Polyline positions={selectedRoute.coordinates} />
            {selectedRoute.points.map((coord, index) => (
                <Marker key={index} position={coord}/>
            ))}
        </>
    );
}
