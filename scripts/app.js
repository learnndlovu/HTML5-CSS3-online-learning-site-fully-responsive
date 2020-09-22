const closeIcon = document.querySelector('.notification-close');
const notification = document.querySelector('.top-page-notification');
const hamburger = document.querySelector('.fa-bars');
const backdrop = document.querySelector('.backdrop');
const sideNav = document.querySelector('.main-side-nav');
const closeSideNavIcon = document.querySelector('.close-side-nav');



closeIcon.addEventListener('click', function(e){
    notification.classList.add('remove-notification');

    notification.addEventListener('animationend', function(e){
        notification.style.display = 'none';
    })
})

hamburger.addEventListener('click', open);
backdrop.addEventListener('click', close);
closeSideNavIcon.addEventListener('click', close)

function open(e){
    backdrop.style.display = 'block';

    if (!sideNav.classList.contains('hide-side-nav')){
        sideNav.classList.add('hide-side-nav');
    }

    sideNav.classList.replace('hide-side-nav', 'show-side-nav')

    sideNav.addEventListener('animationend', function(e){
        sideNav.style.transform = 'translateX(0)';
    })

}

function close(e){
    backdrop.style.display = 'none';
    sideNav.classList.replace('show-side-nav', 'hide-side-nav');

    sideNav.addEventListener('animationend', function (e) {
        sideNav.style.transform = 'translateX(-150%)';
    })
}
