export default function Sugestao () {
    const listSuges = [{nameUser: 'bad.vibes.memes', imgUser: 'assets/img/bad.vibes.memes.svg', razao: 'Segue você'},
    {nameUser: 'chibirdart', imgUser: 'assets/img/chibirdart.svg', razao: 'Segue você'}, 
    {nameUser: 'razoesparaacreditar', imgUser: 'assets/img/razoesparaacreditar.svg', razao: 'Novo no Instagram'},
    {nameUser: 'adorable_animals', imgUser: 'assets/img/adorable_animals.svg', razao: 'Segue você'},
    {nameUser: 'smallcutecats', imgUser: 'assets/img/smallcutecats.svg', razao: 'Segue você'}]
    return(
        listSuges.map((suge)=> <div class="sugestao">
        <div class="usuario">
          <img src={suge.imgUser} />
          <div class="texto">
            <div class="nome">{suge.nameUser}</div>
            <div class="razao">{suge.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>)
    )
}