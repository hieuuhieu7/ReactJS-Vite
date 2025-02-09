import { Space, Table, Tag } from 'antd';
import UserUpdate from './user.update';
import { useState } from "react";


const UserTable = (props) => {
    const { dataUser, loadUser } = props;
    const [isModalUpdate, setIsModalUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                );
            }
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
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a
                        onClick={() => {
                            setIsModalUpdate(true)
                            setDataUpdate(record)
                        }}
                    >
                        Edit {record.name}
                    </a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    // console.log('Check data: ', dataUpdate);
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={'_id'}
            />
            <UserUpdate
                isModalUpdate={isModalUpdate}
                setIsModalUpdate={setIsModalUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
        </>
    );
}

export default UserTable;