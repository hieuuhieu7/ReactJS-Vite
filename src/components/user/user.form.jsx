import { Button, Flex, Input } from "antd";

const UserForm = () => {
    return (
        <div style={{ marginTop: "40px", padding: "0px 60px 40px 60px", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2>Add User</h2>
                <div className="form-group">
                    <span>Username</span>
                    <Input />
                </div>

                <div className="form-group">
                    <span>Email</span>
                    <Input />
                </div>

                <div className="form-group">
                    <span>Password</span>
                    <Input.Password />
                </div>

                <div className="form-group">
                    <span>Phone number</span>
                    <Input />
                </div>

                <Button type="primary">Create</Button>
            </div>
        </div>
    );
}

export default UserForm;