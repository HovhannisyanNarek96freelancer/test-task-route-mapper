import axios from 'axios';

const OSRM_API_URL = 'http://router.project-osrm.org/route/v1/driving';

export const getFetchRoute = (points) => {
    const route = points.reduce((acc, point) => {
        acc += `${point[1]},${point[0]};`;
        return acc;
    },'').slice(0, -1);
    return axios.get(`${OSRM_API_URL}/${route}?geometries=polyline6`);
};
