const bergeur = document.querySelector('.bergeur');
const line = document.querySelector('.bergeur .line');
const nav = document.querySelector('.header .nav ul');
const header = document.querySelector('.header');

var oklm = false;

bergeur.addEventListener('click', () =>{
    if (!oklm) {
        bergeur.classList.add('open');
        header.classList.add('big');
        nav.classList.add('slide');
        oklm = true;
    } else{
        bergeur.classList.remove('open');
        header.classList.remove('big');
        nav.classList.remove('slide');
        oklm = false;
    }
});

window.addEventListener('scroll', function () {
    var defil = document.querySelector('.header');
    defil.classList.toggle('sticky', window.scrollY > 0);
})