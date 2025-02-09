import { Button, Flex, Input, notification, Modal } from "antd";
import { updateUserApi } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserUpdate = (props) => {

    const { isModalUpdate, setIsModalUpdate, dataUpdate, setDataUpdate, loadUser } = props;

    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        console.log('Check data props: ', dataUpdate)
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])

    const resetInput = () => {
        setIsModalUpdate(false)
        setId("")
        setFullName("")
        setPhone("")
        setDataUpdate(null)
    }

    const showModal = () => {
        setIsModalUpdate(true);
    };
    const handleOk = () => {
        setIsModalUpdate(false);
    };
    const handleCancel = () => {
        setIsModalUpdate(false);
    };

    const handleCreateUser = async () => {
        const res = await updateUserApi(id, fullName, phone)
        if (res.data) {
            notification.success(
                {
                    message: "Update User",
                    description: 'Cập nhật User thành công!'
                }
            )
            resetInput();
            await loadUser();
        } else {
            notification.error(
                {
                    message: "Error Update User",
                    description: 'Cập nhật User thất bại!'
                    // description: JSON.stringify(res.message)
                }
            )
        }
        console.log('Result ', res.data);
    }

    return (
        <div style={{ marginTop: "40px", padding: "0px 60px 40px 60px", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Modal title="Update User"
                    open={isModalUpdate}
                    onOk={handleCreateUser}
                    onCancel={resetInput}
                    okText="Save"
                    maskClosable={false}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div className="form-group">
                            <span>ID</span>
                            <Input
                                value={id}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <span>Full name</span>
                            <Input
                                value={fullName}
                                onChange={(event) => { setFullName(event.target.value) }}
                            />
                        </div>

                        <div className="form-group">
                            <span>Phone number</span>
                            <Input
                                value={phone}
                                onChange={(event) => { setPhone(event.target.value) }}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default UserUpdate;