import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
const UserDetail = (props) => {

    const { open, setOpen, dataDetail, setDataDetail } = props;

    return (
        <Drawer
            onClose={() => {
                setOpen(false)
                setDataDetail(null)
            }}
            open={open}
        >
            {
                dataDetail ?
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <span style={{ fontSize: '16px' }}>
                                <strong>ID: </strong>{dataDetail._id}
                            </span>

                            <span style={{ fontSize: '16px' }}>
                                <strong>Full name: </strong>{dataDetail.fullName}
                            </span>

                            <span style={{ fontSize: '16px' }}>
                                <strong>Email: </strong>{dataDetail.email}
                            </span>

                            <span style={{ fontSize: '16px' }}>
                                <strong>Phone number: </strong>{dataDetail.phone}
                            </span>
                        </div>
                    </>
                    :
                    <>
                        <p>Không có dữ liệu.</p>
                    </>
            }
        </Drawer>
    );
}

export default UserDetail;