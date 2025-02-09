import { useState, useEffect } from "react";

const AddUser = ({ setUsers, users, editingUser, setEditingUser }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name);
            setAge(editingUser.age);
            setEmail(editingUser.email);
        }
    }, [editingUser]);

    const addUser = () => {
        if (editingUser) {
            setUsers(users.map(user => user.id === editingUser.id ? { ...user, name, age, email } : user));
            setEditingUser(null);
        } else {
            const newUser = {
                id: Date.now().toString(),
                name: name,
                age: age,
                email: email,
            };
            setUsers([...users, newUser]);
        }

        setName("");
        setAge("");
        setEmail("");
    };

    return (
        <div className="box box--m">
            <div className="formFields">
                <label>Name:</label>
                <input value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div className="formFields">
                <label>Age:</label>
                <input value={age} onChange={(event) => setAge(event.target.value)} />
            </div>

            <div className="formFields">
                <label>Email:</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>

            <button onClick={addUser}>{editingUser ? "Update User" : "Add User"}</button>
        </div>
    );
};

export default AddUser;
