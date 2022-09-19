import React from "react"

export default function ChangeName() {

    const [userName, setUserName] = React.useState("Seu Nome")
    return (
        <span>
        {userName}
        <ion-icon name="pencil" onClick={()=> setUserName(prompt('Seu Nome'))}></ion-icon>
      </span>
    )


}