//scroll to top
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav){
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}