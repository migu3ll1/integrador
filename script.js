
function darkmd(){
    //variaveis do bt darkmod
    const check= window.document.querySelector('#check_dark')
    const bolinha_bt= window.document.querySelector('.bolinha_interna')
    const txt_dark= window.document.querySelector('.txt_chave')
    
    //variaveis dos elementos na pagina
    const page= document.body
    const ft= window.document.querySelector('#rdp')
    const hd= window.document.querySelector('#cabesalho')
    
    //imagens
    const img1=  window.document.getElementById('carouselExampleCaptions')
    const imgFinal= window.document.querySelector('#ultima_imagem')

    if(check.checked === true){
        bolinha_bt.classList.add('transition_lightmod')//animação do bt
        page.classList.add('dark')//aplica darkmod
        imgFinal.classList.add('dark')//ajusta a cor da imagem final
        
        txt_dark.innerHTML='Light Mode'//texto light mode
        
        //ajuste de cores
        ft.classList.add('dark_ajuste')
        hd.classList.add('dark_ajuste')
        img1.classList.add('dark_ajuste')

    }else if(check.checked === false){
        imgFinal.classList.remove('dark')//remove dark mode
        
        //animação do bt
        bolinha_bt.classList.add('transition_darkmd')
        bolinha_bt.classList.remove('transition_lightmod')
        
        txt_dark.innerHTML='Dark Mode'
        //remove todos os efeitos do darkmod quando lightmod ativo 
        page.classList.remove('dark')
        ft.classList.remove('dark_ajuste')
        hd.classList.remove('dark_ajuste')
        img1.classList.remove('dark_ajuste')
    }
}

//botão para voltar para o topo da pagina
function topPG(){
    let top= window.document.querySelector('#cabesalho')
    top.scrollIntoView({
        behavior: "smooth"
    })
}


