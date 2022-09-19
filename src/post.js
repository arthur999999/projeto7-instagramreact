export default function Post () {
    const postData = [{userName: 'meowed', userImg: 'assets/img/meowed.svg', postImg: 'assets/img/gato-telefone.svg', 
        postLike: '101.523', imgLike: 'assets/img/respondeai.svg', nameLike: 'respondeai'}, {userName: 'barked', userImg: 'assets/img/barked.svg', postImg: 'assets/img/dog.svg', 
        postLike: '99.159', imgLike: 'assets/img/adorable_animals.svg', nameLike: 'adorable_animals'}]
    return (
        postData.map((pos)=> <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={pos.userImg} />
            {pos.userName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={pos.postImg} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={pos.imgLike} />
            <div class="texto">
              Curtido por <strong>{pos.nameLike}</strong> e <strong>outras {pos.postLike} pessoas</strong>
            </div>
          </div>
        </div>
      </div>)  
    )

}