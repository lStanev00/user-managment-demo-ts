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
                {data.map(user => {
                    return <p key={user.id}>{user.name}</p>
                })}
            </>
        )
    }



}