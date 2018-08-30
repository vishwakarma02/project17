import '../css/shrink.scss';
let Sidebar = function(){
    innerSidebar();
}

//hamburger icon interaction
let innerSidebar = function(){
    let el = document.querySelector('.hamburger');
    el.addEventListener('click',function(){
        el.classList.toggle('show');
        moveMain();
        openSidebar();
        fixBody();
    });
}



module.exports = Sidebar;