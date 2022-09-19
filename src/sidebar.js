import Sugestoes from "./sugestoes"
import Usuario from "./usuario"

export default function Sidebar () {
    return (
        <div class="sidebar">
        <Usuario userImg="./assets/img/catanacomics.svg" userId="catanacomics"/>

        <Sugestoes/>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}