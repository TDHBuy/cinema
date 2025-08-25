import UsersTable from "../components/dashboard/users/UsersTable.jsx";

const Users = ()=>{
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
                <UsersTable></UsersTable>
            </div>
        </div>
    )
}

export default Users;