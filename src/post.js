import React from "react"
export default function Post () {
    const [likeStatus1, setLikeStatus1] = React.useState('heart-outline')
    const [likeStatus2, setLikeStatus2] = React.useState('heart-outline')
    const [saveStatus1, setSaveStatus1] = React.useState('bookmark-outline')
    const [saveStatus2, setSaveStatus2] = React.useState('bookmark-outline')
    const [likeQ1, setLikeQ1] = React.useState(101523)
    const [likeQ2, setLikeQ2] = React.useState(99159)
    const postData = [{save: saveStatus1, saveSet: setSaveStatus1,  like: likeStatus1, likeset: setLikeStatus1, userName: 'meowed', userImg: './assets/img/meowed.svg', postImg: './assets/img/gato-telefone.svg', 
        postLike: likeQ1, postLikeset: setLikeQ1, imgLike: './assets/img/respondeai.svg', nameLike: 'respondeai'}, {save: saveStatus2, saveSet: setSaveStatus2, like: likeStatus2, likeset: setLikeStatus2, userName: 'barked', userImg: './assets/img/barked.svg', postImg: './assets/img/dog.svg', 
        postLike: likeQ2, postLikeset: setLikeQ2, imgLike: './assets/img/adorable_animals.svg', nameLike: 'adorable_animals'}]
    
    function likeOptions (a, b, c, d) {
      if(a == 'heart-outline'){
        b('heart-sharp')
        c(d + 1)
      }
      if(a == 'heart-sharp'){
        b('heart-outline')
        c(d - 1)
      }
    }
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
              <ion-icon onClick={()=> likeOptions(pos.like, pos.likeset, pos.postLikeset, pos.postLike)} name={pos.like}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={()=> pos.saveSet('bookmark-sharp')}  name={pos.save}></ion-icon>
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