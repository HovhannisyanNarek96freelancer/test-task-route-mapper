import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import {fetchRoute} from '../reducers/routeReducer';

const columns = [
    {
        title: 'Маршрут',
        dataIndex: 'routeNumber',
        key: 'routeNumber',
    },
];

const RouteTable = () => {
    const routes = useSelector((state) => state.route.routes);
    const dispatch = useDispatch();
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const handleRowClick = (route) => {
        dispatch(fetchRoute(route));
        setSelectedRowKeys([route.id]);
    };

    const onRow = (record) => {
        return {
            onClick: () => {
                return handleRowClick(routes.find(r => r.id === record.key));
            },
            style: { cursor: 'pointer' },
        };
    };

    const tableData = routes.map((route, index) => ({
        key: route.id,
        routeNumber: `Маршрут №${index + 1}`,
    }));

    return (
        <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            rowSelection={{
                type: 'radio',
                selectedRowKeys,
            }}
            onRow={onRow}
            style={{ width: '300px', height: '100vh', overflow: 'auto' }}
        />
    );
};

export default RouteTable;
