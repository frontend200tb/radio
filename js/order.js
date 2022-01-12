/****************
Скрипт написан для
main.content
По нажатию на пункт меню в секции content
Переносит содержимое этого пункта наверх
*******************/


/*Основная функция убирает class order -1 у старого элемента и добавляет новому*/
function addOrder(item){
    old.classList.remove('content__order');
    item.classList.add('content__order');
    old = item;
}
/*Основная функция убирает class order -1 у старого элемента и добавляет новому*/


/**************Content*/

if (document.getElementById('content__menu-link1') &&
    document.getElementById('content__item1')) {
    var old = document.getElementById('content__item1');
    const menu_link1 = document.getElementById('content__menu-link1');
    const item1 = document.getElementById('content__item1');
    menu_link1.addEventListener('click', () => addOrder(item1));
}

if (document.getElementById('content__menu-link2') &&
    document.getElementById('content__item2')) {
    const menu_link2 = document.getElementById('content__menu-link2');
    const item2 = document.getElementById('content__item2');
    menu_link2.addEventListener('click', () => addOrder(item2));
}

if (document.getElementById('content__menu-link3') &&
    document.getElementById('content__item3')) {
    const menu_link3 = document.getElementById('content__menu-link3');
    const item3 = document.getElementById('content__item3');
    menu_link3.addEventListener('click', () => addOrder(item3));
}

/*************Content*/