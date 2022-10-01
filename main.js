const home = document.querySelector('.home');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const logo = document.querySelector('.logo');
const mePurple = document.querySelector('.me-purple');
const meOrange = document.querySelector('.me-orange');
const meBlue = document.querySelector('.me-blue');
const meGreen = document.querySelector('.me-green');
const mePink = document.querySelector('.me-pink');
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const botao1 = document.querySelector('.button-home')
const text1 = document.querySelector('.text1')
const porcent = document.querySelectorAll('.porcent');
const porcent2 = document.querySelector('.porcent2');
const porcent3 = document.querySelectorAll('.porcent3');
const porcent4 = document.querySelector('.porcent4');
const botaoInf = document.querySelector('.botao-inf')
const botaoInf2 = document.querySelector('.botao-inf2')
const aboutMe = document.querySelector('.about-me');
const birthday = document.querySelector('.birthday');
const age = document.querySelector('.age');
const h3 = document.querySelectorAll('.h3');
const h3a = document.querySelector('.h3 a');
const formacao = document.querySelector('.formacao');
const formacao2 = document.querySelector('.formacao2');
const habilidade = document.querySelectorAll('.habilidade');
const skills = document.querySelector('.skills');
const bar = document.querySelectorAll('.bar');
const education = document.querySelectorAll('.education');
const bola = document.querySelectorAll('.bola');
const barra = document.querySelectorAll('.barra');
const school = document.querySelectorAll('.school');
const moon = document.querySelector('.moon');
const settings = document.querySelector('.settings');
const menu = document.querySelector('.menu');
const content1 = document.querySelector('.content1');
const color = document.querySelector('.color');
const flex = document.querySelectorAll('.flex');
const flexA = document.querySelectorAll('.flex a');
const logoimg = document.querySelector('.logoimg');
const serviceContent = document.querySelector('.services-content');

const purple = document.querySelector('.color-purple');
const orange = document.querySelector('.color-orange');
const blue = document.querySelector('.color-blue');
const green = document.querySelector('.color-green');
const pink = document.querySelector('.color-pink');
const auto = document.querySelector('.auto-type')
const serv1 = document.querySelectorAll('.serv1')
const logoserv = document.querySelectorAll('.logoserv')


const john = document.querySelector('.john')
const hello = document.querySelector('.hello')
const im = document.querySelector('.im')


//mudar cor do menu//
about.addEventListener('click', function(){
    about.classList.add('ativo')
    home.classList.remove('ativo')
    services.classList.remove('ativo')
    portfolio.classList.remove('ativo')
    contact.classList.remove('ativo')
});
home.addEventListener('click', function(){
    home.classList.add('ativo')
    about.classList.remove('ativo')
    services.classList.remove('ativo')
    portfolio.classList.remove('ativo')
    contact.classList.remove('ativo')
});
services.addEventListener('click', function(){
    services.classList.add('ativo')
    about.classList.remove('ativo')
    home.classList.remove('ativo')
    portfolio.classList.remove('ativo')
    contact.classList.remove('ativo')
});
portfolio.addEventListener('click', function(){
    portfolio.classList.add('ativo')
    about.classList.remove('ativo')
    home.classList.remove('ativo')
    services.classList.remove('ativo')
    contact.classList.remove('ativo')
});
contact.addEventListener('click', function(){
    contact.classList.add('ativo')
    about.classList.remove('ativo')
    home.classList.remove('ativo')
    services.classList.remove('ativo')
    portfolio.classList.remove('ativo')
});
//mudar cor do menu//

//tema escuro//
moon.addEventListener('click', function(){
    menu.classList.toggle('menu-dark')
    content1.classList.toggle('content1-dark')
    moon.classList.toggle('moon-dark')
    settings.classList.toggle('settings-dark')
    color.classList.toggle('color-dark')
    hello.classList.toggle('hello-dark')
    im.classList.toggle('im-dark')
    flex.forEach((e) => {
        e.classList.toggle('flex-dark')
    })
    logo.classList.toggle('logo-dark')
    text1.classList.toggle('text-dark')
    content2.classList.toggle('content2-dark')
    aboutMe.classList.toggle('about-me-dark')
    birthday.classList.toggle('birthday-dark')
    age.classList.toggle('age-dark')

    formacao.classList.toggle('formacao-dark')
    formacao2.classList.toggle('formacao2-dark')
    education.forEach((e)=>{
        e.classList.toggle('education-dark')
    })

    habilidade.forEach((i) => {
        i.classList.toggle('habilidade-dark')
    })
    h3.forEach((i) => {
        i.classList.toggle('h3-dark')
    })

    school.forEach((e)=>{
        e.classList.toggle('school-dark')
    })
    h3a.classList.toggle('h3-darka')
    content3.classList.toggle('content3-dark')
    serviceContent.classList.toggle('services-content-dark')
    serv1.forEach((e)=>{
        e.classList.toggle('serv1-dark')
    })
});
settings.addEventListener('click', function(){
    color.style.display = 'flex'
});
document.addEventListener('click', function(e){
    if (e.target.closest('.settings')|| 
    e.target.closest('.color')) return
    color.style.display = 'none'
});
//tema escuro//
console.log(flex)
console.log(habilidade)
//mudar cor itens//
orange.addEventListener('click', function(){
    auto.classList.add('orange-txt')
    auto.classList.remove('purple-txt')
    auto.classList.remove('blue-txt')
    auto.classList.remove('pink-txt')
    auto.classList.remove('green-txt')
    john.style.color =  '#FC8120'
    mePurple.classList.add('me-orange')
    mePurple.classList.remove('me-pink')
    mePurple.classList.remove('me-green')
    mePurple.classList.remove('me-blue')
    mePurple.classList.remove('me-purple')
    botaoInf.style.backgroundColor = '#FC8120'
    botaoInf2.style.backgroundColor = '#FC8120'
    removeClasse()
    const ativo = document.querySelector('.ativo')
    ativo.classList.add('orange-txt')
    botao1.style.backgroundColor = '#FC8120'
    removeColor1()
    porcent.forEach((e) => {
        e.classList.add('porcent-orange')
    })
    removeColor3()
    porcent3.forEach((e) => {
        e.classList.add('porcent3-orange')
    })
    removeColor2()
    porcent2.classList.add('porcent2-orange')
    removeColor4()
    porcent4.classList.add('porcent4-orange')
    RemoveColorBall()
    bola.forEach((e)=>{
        e.classList.add('bola-orange')
    })
    RemoveColorBarra()
    barra.forEach((e)=>{
        e.classList.add('barra-orange')
    })
    removeBackground()
    logoserv.forEach((e)=>{
        e.classList.add('logoserv-orange')
    })
    
})
purple.addEventListener('click', function(){
    auto.classList.remove('orange-txt')
    auto.classList.add('purple-txt')
    auto.classList.remove('blue-txt')
    auto.classList.remove('pink-txt')
    auto.classList.remove('green-txt')
    john.style.color =  '#6f23d8'
    removeClasse()
    const ativo = document.querySelector('.ativo')
    ativo.classList.add('purple-txt')
    mePurple.classList.remove('me-orange')
    mePurple.classList.remove('me-pink')
    mePurple.classList.remove('me-green')
    mePurple.classList.remove('me-blue')
    mePurple.classList.add('me-purple')
    botao1.style.backgroundColor = '#6f23d8'
    botaoInf.style.backgroundColor = '#6f23d8'
    botaoInf2.style.backgroundColor = '#6f23d8'
    removeColor1()
    porcent.forEach((e) => {
        e.classList.add('porcent-purple')
    })
    removeColor2()
    porcent2.classList.add('porcent2-purple')
    removeColor3()
    porcent3.forEach((e) => {
        e.classList.add('porcent3-purple')
    })
    removeColor4()
    porcent4.classList.add('porcent4-purple')
    RemoveColorBall()
    bola.forEach((e)=>{
        e.classList.add('bola-purple')
    })
    RemoveColorBarra()
    barra.forEach((e)=>{
        e.classList.add('barra-purple')
    })
    removeBackground()
    logoserv.forEach((e)=>{
        e.classList.add('logoserv-purple')
    })
})
blue.addEventListener('click', function(){
    auto.classList.remove('orange-txt')
    auto.classList.remove('purple-txt')
    auto.classList.add('blue-txt')
    auto.classList.remove('pink-txt')
    auto.classList.remove('green-txt')
    john.style.color =  '#27B5F4'
    removeClasse()
    const ativo = document.querySelector('.ativo')
    ativo.classList.add('blue-txt')
    botao1.style.backgroundColor = '#27B5F4'
    mePurple.classList.remove('me-orange')
    mePurple.classList.remove('me-pink')
    mePurple.classList.remove('me-green')
    mePurple.classList.add('me-blue')
    mePurple.classList.remove('me-purple')
    botaoInf.style.backgroundColor = '#27B5F4'
    botaoInf2.style.backgroundColor = '#27B5F4'
    removeColor1()
    porcent.forEach((e) => {
        e.classList.add('porcent-blue')
    })
    removeColor2()
    porcent2.classList.add('porcent2-blue')
    removeColor3()
    porcent3.forEach((e) => {
        e.classList.add('porcent3-blue')
    })
    removeColor4()
    porcent4.classList.add('porcent4-blue')
    RemoveColorBall()
    bola.forEach((e)=>{
        e.classList.add('bola-blue')
    })
    RemoveColorBarra()
    barra.forEach((e)=>{
        e.classList.add('barra-blue')
    })
    removeBackground()
    logoserv.forEach((e)=>{
        e.classList.add('logoserv-blue')
    })
})
pink.addEventListener('click', function(){
    auto.classList.remove('orange-txt')
    auto.classList.remove('purple-txt')
    auto.classList.remove('blue-txt')
    auto.classList.add('pink-txt')
    auto.classList.remove('green-txt')
    john.style.color =  '#FD43B1'
    removeClasse()
    botao1.style.backgroundColor = '#FD43B1'
    const ativo = document.querySelector('.ativo')
    ativo.classList.add('pink-txt')
    mePurple.classList.remove('me-orange')
    mePurple.classList.add('me-pink')
    mePurple.classList.remove('me-green')
    mePurple.classList.remove('me-blue')
    mePurple.classList.remove('me-purple')
    botaoInf.style.backgroundColor = '#FD43B1'
    botaoInf2.style.backgroundColor = '#FD43B1'
    removeColor1()
    porcent.forEach((e) => {
        e.classList.add('porcent-pink')
    })
    removeColor2()
    porcent2.classList.add('porcent2-pink')
    removeColor3()
    porcent3.forEach((e) => {
        e.classList.add('porcent3-pink')
    })
    removeColor4()
    porcent4.classList.add('porcent4-pink')
    RemoveColorBall()
    bola.forEach((e)=>{
        e.classList.add('bola-pink')
    })
    RemoveColorBarra()
    barra.forEach((e)=>{
        e.classList.add('barra-pink')
    })
    removeBackground()
    logoserv.forEach((e)=>{
        e.classList.add('logoserv-pink')
    })
})
green.addEventListener('click', function(){
    auto.classList.remove('orange-txt')
    auto.classList.remove('purple-txt')
    auto.classList.remove('blue-txt')
    auto.classList.remove('pink-txt')
    auto.classList.add('green-txt')
    john.style.color =  '#0AF1CA'
    removeClasse()
    botao1.style.backgroundColor = '#0AF1CA'
    const ativo = document.querySelector('.ativo')
    ativo.classList.add('green-txt')
    mePurple.classList.remove('me-orange')
    mePurple.classList.remove('me-pink')
    mePurple.classList.add('me-green')
    mePurple.classList.remove('me-blue')
    mePurple.classList.remove('me-purple')
    botaoInf.style.backgroundColor = '#0AF1CA'
    botaoInf2.style.backgroundColor = '#0AF1CA'
    removeColor1()
    porcent.forEach((e) => {
        e.classList.add('porcent-green')
    })
    removeColor2()
    porcent2.classList.add('porcent2-green')
    removeColor3()
    porcent3.forEach((e) => {
        e.classList.add('porcent3-green')
    })
    removeColor4()
    porcent4.classList.add('porcent4-green')
    RemoveColorBall()
    bola.forEach((e)=>{
        e.classList.add('bola-green')
    })
    RemoveColorBarra()
    barra.forEach((e)=>{
        e.classList.add('barra-green')
    })
    removeBackground()
    logoserv.forEach((e)=>{
        e.classList.add('logoserv-green')
    })
})

flexA.forEach((li)=> {
    li.addEventListener('click', (e) => {
        if(e.target.classList.contains('ativo')) {  //pegar um elemento com classe específica
            let colorElement = getComputedStyle(john)       //pegar todo estilo de um elemento
            const corr = colorElement.getPropertyValue('color') //selecionar uma característica específica
            removeClasse()
            e.target.style.setProperty('--corAtivo', corr) //define a propriedade
        }
    })
})

orange.addEventListener('click', (i)=>{
    
    }
);

function removeColor1(){
    porcent.forEach((e) => {
        e.classList.remove('porcent')
        e.classList.remove('porcent-purple');
        e.classList.remove('porcent-orange');
        e.classList.remove('porcent-blue');
        e.classList.remove('porcent-green');
        e.classList.remove('porcent-pink');
    })
}
function removeColor2(){
    porcent2.classList.remove('porcent2');
    porcent2.classList.remove('porcent2-purple');
    porcent2.classList.remove('porcent2-orange');
    porcent2.classList.remove('porcent2-blue');
    porcent2.classList.remove('porcent2-green');
    porcent2.classList.remove('porcent2-pink');
}
function removeColor3(){
    porcent3.forEach((e) => {
        e.classList.remove('porcent3')
        e.classList.remove('porcent3-purple');
        e.classList.remove('porcent3-orange');
        e.classList.remove('porcent3-blue');
        e.classList.remove('porcent3-green');
        e.classList.remove('porcent3-pink');
    })
}
function removeColor4(){
    porcent4.classList.remove('porcent4');
    porcent4.classList.remove('porcent4-purple');
    porcent4.classList.remove('porcent4-orange');
    porcent4.classList.remove('porcent4-blue');
    porcent4.classList.remove('porcent4-green');
    porcent4.classList.remove('porcent4-pink');
}

function removeClasse(){
    flexA.forEach(li => {
        li.classList.remove('orange-txt')
        li.classList.remove('purple-txt')
        li.classList.remove('green-txt')
        li.classList.remove('blue-txt')
        li.classList.remove('pink-txt')
    })
}
function RemoveColorBall(){
    bola.forEach(e => {
        e.classList.remove('bola-orange')
        e.classList.remove('bola-purple')
        e.classList.remove('bola-green')
        e.classList.remove('bola-blue')
        e.classList.remove('bola-pink')
        e.classList.remove('bola')
    })
}
function RemoveColorBarra(){
    barra.forEach(e => {
        e.classList.remove('barra-orange')
        e.classList.remove('barra-purple')
        e.classList.remove('barra-green')
        e.classList.remove('barra-blue')
        e.classList.remove('barra-pink')
        e.classList.remove('barra')
    })
}
function removeBackground(){
    logoserv.forEach((e)=>{
        e.classList.remove('logoserv-orange')
        e.classList.remove('logoserv-purple')
        e.classList.remove('logoserv-pink')
        e.classList.remove('logoserv-blue')
        e.classList.remove('logoserv-green')
        e.classList.remove('logoserv')
    });
}


home.addEventListener('click', ()=>{
    content2.style.right = '-80vw'
    content3.style.right = '-80vw'
})

about.addEventListener('click', ()=>{
    content2.style.right = '0'
    content3.style.right = '-80vw'
})
botao1.addEventListener('click', ()=>{
    content2.style.right = '0'
    content3.style.right = '-80vw'
})

services.addEventListener('click', ()=>{
    content3.style.right = '0'
    content2.style.right = '-80vw'

})





