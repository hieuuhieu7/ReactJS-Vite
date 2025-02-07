import { Button, Flex, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleClick = () => {
        console.log('Check input: ', { fullName, email, password, phoneNumber });
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
                        value={phoneNumber}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>

                <Button type="primary" onClick={handleClick} >Create</Button>
            </div>
        </div>
    );
}

export default UserForm;