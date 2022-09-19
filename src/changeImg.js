import React from "react"

export default function ChangeImg() {

    const [userImg, setUserImg] = React.useState("./assets/img/catanacomics.svg")
    return (
        <img  src={userImg} onClick={()=> setUserImg(prompt('Link da Imagem'))}/>
    )


}