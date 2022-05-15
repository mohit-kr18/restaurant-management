let menu_bar = document.getElementById('menu-bar');
let navbar = document.getElementById('navbar')


menu_bar.addEventListener("click",()=>{
    navbar.classList.toggle('navbar-hide');
})

window.onscroll = ()=>{
    
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}









