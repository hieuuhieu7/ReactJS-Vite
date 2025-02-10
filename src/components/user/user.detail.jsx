import React, { useState, useEffect } from 'react';
import { Button, Drawer, notification } from 'antd';
import { handleUploadFile, updateUserAvatarApi } from '../../services/api.service';
const UserDetail = (props) => {

    const { open, setOpen, dataDetail, setDataDetail, loadUser } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }
    console.log('Check file: ', preview);

    const handleUpdateUserAvatar = async () => {
        // Upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            console.log('Check avt: ', newAvatar);
            // Update User
            const resUpdateAvatar = await updateUserAvatarApi(
                newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);

            if (resUpdateAvatar.data) {
                setOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();

                notification.success({
                    message: 'Upload Avatar',
                    description: 'Upload Avatar thành công!'
                })
            }
        } else {
            notification.error({
                message: 'Error Upload Avatar',
                description: 'Upload Avatar thất bại!'
            })
            return;
        }
    }

    return (
        <Drawer
            title="Detail User"
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
                            <span style={{ fontSize: '16px' }}>
                                <strong>Avatar: </strong>
                                <div style={{ margin: '10px 0px 10px 0px', border: '1px solid #1677ff', width: '200px', height: '200px', borderRadius: '6px' }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="avatar" />
                                </div>
                                <div>
                                    <label style={{ color: '#1677ff', textDecoration: 'underline', cursor: 'pointer' }} htmlFor="btnUpload">Upload Avatar</label>
                                    <input type="file" hidden id='btnUpload'
                                        onChange={(event) => { handleOnChangeFile(event) }}
                                    />
                                </div>
                                {preview &&
                                    <div style={{ display: 'flex', alignItems: 'end', marginTop: '40px', gap: '10px' }}>
                                        <div style={{ border: '1px solid #1677ff', width: '100px', height: '100px', borderRadius: '6px' }}>
                                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={preview} alt="avatar" />
                                        </div>
                                        <Button onClick={handleUpdateUserAvatar} type='primary'>Save</Button>
                                    </div>
                                }
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