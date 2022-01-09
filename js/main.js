/*Делает class order -1 переданному ей элементу*/
function addOrder(item){
    console.log('Press1');
    old.classList.remove('content__order');
    item.classList.add('content__order');
    console.log('Press2');
    old = item;
}


/**************Content*/

if (document.getElementById('serbia-link') &&
    document.getElementById('content__items-serbia')) {
    var old = document.getElementById('serbia-link');
    const serbia_link = document.getElementById('serbia-link');
    const serbia_item = document.getElementById('content__items-serbia');
    serbia_link.addEventListener('click', () => addOrder(serbia_item));
}

if (document.getElementById('croatia-link') &&
    document.getElementById('content__items-croatia')) {
    const croatia_link = document.getElementById('croatia-link');
    const croatia_item = document.getElementById('content__items-croatia');
    croatia_link.addEventListener('click', () => addOrder(croatia_item));
}

if (document.getElementById('bih-link') &&
    document.getElementById('content__items-bih')) {
    const bih_link = document.getElementById('bih-link');
    const bih_item = document.getElementById('content__items-bih');
    bih_link.addEventListener('click', () => addOrder(bih_item));
}

/*************Content*/