const ham = document.querySelector(".fa-bars");

ham.addEventListener('click', ()=> {
    outerGrid = document.querySelector(".outer-grid");
    outerGrid.classList.toggle('outer-grid-expanded');
    nav = document.querySelector('nav');
    nav.classList.toggle('hide-nav');
})