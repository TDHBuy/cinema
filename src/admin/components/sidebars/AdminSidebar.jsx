import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { PiFilmSlate } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import {NavLink} from "react-router-dom";
import Users from "../dashboard/users/UsersTable.jsx";

const AdminSidebar = (props) => {
    const {collapsed, toggled, breakPoint,
    setCollapsed, setToggled, setBreakPoint} = props;
    const handleSidebar = ()=>{
        setCollapsed(!collapsed);
    }
    return (<div className="admin-sidebar">
        <Sidebar
            key={collapsed ? "collapsed" : "expanded"}
            collapsed={collapsed}
            onBreakPoint={setBreakPoint}
            toggled={toggled}
            onBackdropClick={() => setToggled(false)}
            image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
            breakPoint="md"
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Menu>
                    <div className={`flex flex-row items-center 
                        ${!collapsed ? 'justify-between p-3' : 'justify-center pt-3'}`}>
                        {!collapsed && <div className="text-2xl">MENU</div>}
                        {!breakPoint && <button onClick={handleSidebar} className="text-white" style={{background:"rgba(255, 99, 71, 0)"}}>
                            <FiMenu size={24} color="black"/>
                        </button>}
                    </div>
                    <SubMenu label="Movies"
                             icon={<PiFilmSlate color="red"/>}>
                    <MenuItem> User Management </MenuItem>
                        <MenuItem> Add User </MenuItem>
                    </SubMenu>
                    <MenuItem component={<NavLink to={"users"}/>} icon={<PiFilmSlate color="blue"/>}>
                        User Management
                    </MenuItem>
                    <MenuItem icon={<PiFilmSlate color="green"/>}>Authors</MenuItem>
                </Menu>
            </div>
        </Sidebar>

    </div>)
}

export default AdminSidebar;