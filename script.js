"use strict";

btn.addEventListener('click', m_open);
function m_open() {
    menu.classList.toggle('menu_is-open');
}
var f = true
tema.addEventListener('click', Color);
function Color() {
    if (f) {
        tema.innerHTML = "Перейти на Тёмную сторону"
        f = false
    }
    else {
        tema.innerHTML = "Перейти на Светлую сторону"
        f = true
    }
    b.classList.toggle('chenge_color');
    tema.classList.toggle('ch_color');
}