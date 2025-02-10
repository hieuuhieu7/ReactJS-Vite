import { Space, Table, Popconfirm, notification } from 'antd';
import UserUpdate from './user.update';
import { useState } from "react";
import UserDetail from './user.detail';
import { deleteUserApi } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUser, loadUser } = props;

    const [isModalUpdate, setIsModalUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [open, setOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) => {
                return (
                    <a
                        onClick={() => {
                            setOpen(true)
                            setDataDetail(record)
                        }}
                    >
                        {record._id}
                    </a>
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
                        Edit
                    </a>

                    <Popconfirm
                        title="Delete User"
                        description="Bạn có muốn xóa User này không?"
                        onConfirm={() => { deleteUser(record._id) }}
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const deleteUser = async (id) => {
        const res = await deleteUserApi(id)
        if (res.data) {
            notification.success(
                {
                    message: "Delete User",
                    description: 'Xóa User thành công!'
                }
            )
            await loadUser();
        } else {
            notification.error(
                {
                    message: "Error Delete User",
                    description: 'Xóa User thất bại!'
                    // description: JSON.stringify(res.message)
                }
            )
        }
        console.log('Result ', res.data);
    }

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

            <UserDetail
                open={open}
                setOpen={setOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                loadUser={loadUser}
            />
        </>
    );
}

export default UserTable;