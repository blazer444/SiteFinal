let botao = document.getElementById('botao')
let body = document.querySelector('body')
let header = document.querySelector('header')
let footer = document.querySelector('footer')


botao.addEventListener('click', ()=>{
    botao.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    footer.classList.toggle('dark')
})