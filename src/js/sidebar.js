import '../css/shrink.scss';
let Sidebar = function(){
    innerSidebar();
}

//hamburger icon interaction
let innerSidebar = function(){
    let el = document.querySelector('.hamburger');
    el.addEventListener('click',function(){
        el.classList.toggle('show');
        document.querySelector('.rm-sidebar').classList.toggle('show');
        document.querySelector('main').classList.toggle('show');
    });
}

window.onclick = function(e){
    if(e.target.classList.contains('sidebar-closer') && (e.target.parentElement.classList.contains('show'))){
        document.querySelector('.rm-sidebar').classList.toggle('show');
        document.querySelector('.hamburger').classList.toggle('show');
        document.querySelector('main').classList.toggle('show');
    }
}

module.exports = Sidebar;