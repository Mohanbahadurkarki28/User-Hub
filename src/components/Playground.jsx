import AddUser from "./AddUser";
import ViewUser from "./ViewUser";
import { useState } from "react";

const Playground = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const editUser = (user) => {
        setEditingUser(user);
    };

    return (
        <div className="playground">
            <AddUser setUsers={setUsers} users={users} editingUser={editingUser} setEditingUser={setEditingUser} />
            <ViewUser users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
    );
};

export default Playground;
