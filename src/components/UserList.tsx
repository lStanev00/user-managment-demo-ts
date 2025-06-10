import { useContext } from "react";
import { mainContext } from "../context-data/mainContext";

export default function UserList() {
    const {data} = useContext(mainContext);

    if(data !== null && data === undefined) return (<>Failed to fetch data from the remote host</>)
    else if(data == null) {
        return(<>LOADING . . . </>)
    } else if (data.length == 0 ) {
        return (<>The remote host does not have any User data to display</>)
    } else if(data.length != 0) {
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
            </table>
            <tbody>

                {data.map(user => {
                    return (
                        <tr key={user.id} id={String(user.id)} >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
            </>
        )
    }



}