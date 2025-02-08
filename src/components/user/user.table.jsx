import { Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser();
        console.log('1');
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
        }
    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    const loadUser = async () => {
        const res = await fetchAllUserApi();
        setDataUser(res.data);
    }

    console.log('0');

    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={'_id'}
        />
    );
}

export default UserTable;