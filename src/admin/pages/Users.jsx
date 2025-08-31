import UsersTable from "../components/dashboard/users/UsersTable.jsx";
import {useState} from "react";
import ModalUpdateUser from "../components/dashboard/users/ModalUpdateUser.jsx";

const Users = ()=>{
    const [users, setUsers] = useState([]);
    return(
        <div className="mx-3">
            <div className="text-2xl my-2 font-serif">Manage Users</div>
            <div className="my-2">
                <div
                    className="py-2 px-3 bg-cyan-400 hover:bg-cyan-600 inline-block cursor-pointer rounded-md text-white font-sans">
                    Create
                </div>
            </div>
            <div className="users-table-container">
                <UsersTable users={users} setUsers={setUsers}></UsersTable>
                <ModalUpdateUser></ModalUpdateUser>
            </div>
        </div>
    )
}

export default Users;