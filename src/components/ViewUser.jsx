const ViewUser = ({ users, deleteUser, editUser }) => {
    return (
        <div className="box box--l">
            <table className="userTable">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="edit-btn" onClick={() => editUser(user)}>Edit</button>
                                <button className="delete-btn" onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this user?")) {
                                        deleteUser(user.id);
                                    }
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewUser;
