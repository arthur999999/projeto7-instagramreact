import ChangeName from "./changeName"
export default function Usuario (props) {


    return(
        <div class="usuario">
          <img src={props.userImg}/>
          <div class="texto">
            <strong>{props.userId}</strong>
            <ChangeName/>
          </div>
        </div>
    )
}