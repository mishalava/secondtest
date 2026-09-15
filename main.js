function scroller(direction){
            const block = document.getElementById('aboutblock');
            const step = 620;

             block.scrollBy({
             left: direction * step,
             behavior: 'smooth'   // плавная прокрутка
             });
        }

function searchingScroll(){
        const poisk = document.querySelector('.poisk')
        const text = document.querySelector('.poiskMenu input')

        const textNad = text.value.trim()

        const poiskMenu = document.querySelector('.poiskMenu')
        const newMenu = document.querySelector('.headmenu')

        if (poiskMenu.style.display === 'flex'){
        poiskMenu.style.display = 'none'
        }
    else{
        poiskMenu.style.display = 'flex'
        newMenu.style.display = 'none'
    }

}

const myElement = document.querySelector('.poiskMenu img');
function handleClick(){
    const textTwo = document.querySelector('.poiskMenu input')
    const textNad = textTwo.value.trim()

    if (textNad !== ''){
        window.location.href = '#leg1';//пример
    }
}

myElement.addEventListener('click', handleClick);



function menuClick(){
    const menulinks = document.querySelector('.menulinks')
    const newMenu = document.querySelector('.headmenu')
    const poiskMenu = document.querySelector('.poiskMenu')

    if (newMenu.style.display === 'flex'){
        newMenu.style.display = 'none'

    }
    else{
        newMenu.style.display = 'flex'
        poiskMenu.style.display = 'none'
    }
}

function changeGender(value){

    console.log(value);

    const block_m = document.querySelectorAll('.block_m')
    const block_w = document.querySelectorAll('.block_w')

    if (value === 'women'){
        for (const x of block_w) x.style.display = 'flex';
        for (const y of block_m) y.style.display = 'none';
    }
    else {
        for (const x of block_w) x.style.display = 'none';
        for (const y of block_m) y.style.display = 'flex';
    }

}

