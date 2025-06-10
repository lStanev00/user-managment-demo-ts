import { useContext } from "react";
import { mainContext } from "../context-data/mainContext";
import Style from "../styles/UserList.module.css"
import UserCard from "./UserCard";

export default function UserList() {
    const {data, preview, setPreview} = useContext(mainContext);

    if(data !== null && data === undefined) return (<>Failed to fetch data from the remote host</>)
    else if(data == null) {
        return(<>LOADING . . . </>)
    } else if (data.length == 0 ) {
        return (<>The remote host does not have any User data to display</>)
    } else if(data.length != 0) {
        return (
            <>
                <table className={Style.table}>
                    <thead className={Style.thead}>
                        <tr>
                            <th className={Style.th}>Name</th>
                            <th className={Style.th}>Email</th>
                        </tr>
                    </thead>
                    <tbody className={Style.tbody}>
                        {data.map(user => {
                            return (
                                <tr 
                                key={user.id} 
                                id={String(user.id)} 
                                className={Style.tr}
                                onClick={() => setPreview(user)}
                                >
                                    <td className={Style.td}>{user.name}</td>
                                    <td className={Style.td}>{user.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                {preview !== null && <UserCard />}
            </>
        )
    }



}