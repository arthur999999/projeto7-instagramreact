export default function Story () {
    const storyData = [{imgg: 'assets/img/9gag.svg', useer: '9gag'}, {imgg: 'assets/img/meowed.svg', useer:'meowed'}, 
    {imgg: 'assets/img/barked.svg', useer: 'barked'},{imgg: 'assets/img/nathanwpylestrangeplanet.svg', useer: 'nathanwpylestrangeplanet'}, {imgg: 'assets/img/wawawicomics.svg', useer: 'wawawicomics'}, {imgg: 'assets/img/respondeai.svg', useer: 'respondeai'}, {imgg: 'assets/img/filomoderna.svg', useer: 'filomoderna'},
    {imgg: 'assets/img/memeriagourmet.svg', useer: 'memeriagourmet'}]

    return(
        storyData.map((sto) => <div class="story">
            <div class="imagem">
              <img src={sto.imgg} />
            </div>
            <div class={sto.useer}>
              9gag
            </div>
        </div>)
    )
}