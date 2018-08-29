import '../css/shrink.scss';
let Sidebar = function(){
    innerSidebar();
}

//hamburger icon interaction
let innerSidebar = function(){
    let el = document.querySelector('#hamburger');
    el.addEventListener('click',function(){
        el.classList.toggle('show');
        moveMain();
        openSidebar();
        fixBody();
    });
}

//movement of <main> for sidebar interaction
let moveMain = function(){
    let mainContainer = document.querySelector('main');
    mainContainer.classList.toggle('shrink');
}

//open sidea
let openSidebar = function(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
}

//fit body to screen width and height
let fixBody = function(){
    let body = document.querySelector('body');
    body.classList.toggle('showSidebar');
}
module.exports = Sidebar;