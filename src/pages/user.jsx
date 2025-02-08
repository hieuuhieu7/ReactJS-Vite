import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserApi } from '../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserApi();
        setDataUser(res.data);
    }

    return (
        <div>
            <UserForm
                loadUser={loadUser}
            />
            <UserTable
                dataUser={dataUser}
            />
        </div>
    )
}

export default UserPage;