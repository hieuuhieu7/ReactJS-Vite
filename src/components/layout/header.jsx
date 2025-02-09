
import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, UsergroupAddOutlined, WalletOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Menu } from 'antd';

const Header = () => {

    const items = [
        {
            label: <NavLink to="/">Home</NavLink>,
            key: 'home',
            icon: <HomeOutlined />,
        },

        {
            label: <NavLink to="/users">Users</NavLink>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },

        {
            label: <NavLink to="/books">Books</NavLink>,
            key: 'books',
            icon: <WalletOutlined />,
        },
        {
            label: 'Nguyen Ngoc Hieu',
            key: 'nguyenngochieu',
            style: { marginLeft: 'auto' },
            icon: <UserOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Option',
                    children: [
                        {
                            label: 'Logout',
                            key: 'logout',
                            style: { color: 'red' }
                        },
                    ],
                },
            ],
        },
    ];

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        // <ul>
        //     <li><NavLink to="/">Home</NavLink></li>
        //     <li><NavLink to="/users">Users</NavLink></li>
        //     <li><NavLink to="/books">Books</NavLink></li>
        // </ul>
    );
}

export default Header;