import { useState } from "react";

export const Button = ({name, userLink}) => {

    const [link] = useState(userLink)

    const clickButton = () => {
        window.location.href = `${link}`;
    }

    return (
        <button className="btn" onClick={clickButton}>{name}</button>
    )
}