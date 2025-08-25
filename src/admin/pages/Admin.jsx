import AdminSidebar from "../components/sidebars/AdminSidebar.jsx";
import {FiMenu} from "react-icons/fi";
import React from "react";
import {Outlet} from "react-router";
const Admin = ()=>{
    const [collapsed, setCollapsed] = React.useState(false);
    const [toggled, setToggled] = React.useState(false);
    const [breakPoint, setBreakPoint] = React.useState(false);
    return(<div className="admin-container flex h-screen overflow-hidden">
            <AdminSidebar
                collapsed={collapsed} toggled={toggled} breakPoint={breakPoint}
            setCollapsed={setCollapsed}
            setToggled={setToggled}
            setBreakPoint={setBreakPoint}/>
        <div className="main-container flex-1 overflow-auto">
            {breakPoint &&
                <div className="flex flex-row justify-between bg-yellow-200">
                    <button onClick={() => setToggled(!toggled)} className="text-white"
                            style={{background: "rgba(255, 99, 71, 0)"}}>
                        <FiMenu size={24} color="black"/>
                    </button>
                    <button style={{background: "rgba(255, 99, 71, 0)"}}>Tran Duc Huy</button>
                </div>
            }
            <Outlet/>
        </div>
    </div>)
}
export default Admin;