import { useContext } from "react";
import { mainContext } from "../context-data/mainContext";

export default function UserList() {
    const {data} = useContext(mainContext);

    if(data.length == 0) {
        return(<>LOADING . . . </>)
    }
}