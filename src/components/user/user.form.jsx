import { Button, Flex, Input, notification } from "antd";
import { useState } from "react";
import axios from 'axios';
import { createUserApi } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success(
                {
                    message: "Create User",
                    description: 'Tạo User thành công!'
                }
            )
        } else {
            notification.error(
                {
                    message: "Error Create User",
                    description: 'Tạo User thất bại!'
                    // description: JSON.stringify(res.message)
                }
            )
        }
        console.log('Result ', res.data);
    }

    return (
        <div style={{ marginTop: "40px", padding: "0px 60px 40px 60px", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2>Add User</h2>
                <div className="form-group">
                    <span>Full name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>

                <Button type="primary" onClick={handleClick} >Create</Button>
            </div>
        </div>
    );
}

export default UserForm;