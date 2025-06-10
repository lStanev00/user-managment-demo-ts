import Style from "../styles/UserCard.module.css";
import { useContext } from "react";
import { mainContext } from "../context-data/mainContext.tsx";

export default function UserCard() {
    const { preview : user } = useContext(mainContext);
    if(user !== null ) return (
        <div className={Style.card}>
            <h2 className={Style.name}>{user.name}</h2>
            <p className={Style.email}>{user.email}</p>
            <p className={Style.username}>@{user.username}</p>
            <div className={Style.address}>
                <h4>Address</h4>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city} - {user.address.zipcode}</p>
            </div>
            <div className={Style.company}>
                <h4>{user.company.name}</h4>
                <p><em>{user.company.catchPhrase}</em></p>
                <p>{user.company.bs}</p>
            </div>
        </div>
    );
}
