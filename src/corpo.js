import Sidebar from "./sidebar"
import Stories from "./stories"
import Posts from "./posts"

export default function Corpo () {
    return (
        <div class="corpo">
          <div class="esquerda">
            <Stories/>
            <Posts/>

          </div>

          <Sidebar/>
        </div>
    )
}