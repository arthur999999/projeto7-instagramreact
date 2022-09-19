import ChangeImg from "./changeImg"
import ChangeName from "./changeName"
export default function Usuario (props) {


    return(
        <div class="usuario">
          <ChangeImg/>
          <div class="texto">
            <strong>{props.userId}</strong>
            <ChangeName/>
          </div>
        </div>
    )
}