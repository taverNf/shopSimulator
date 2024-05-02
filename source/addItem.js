let x = 0;

const somaTotal = []
let total = 0
const preços = {
    ae:999.90,
    gi:549.90,
    kd:599.90,
    lb:1399.90,
    hv:1399.90,
    ak:799.90,
    np:549.90,
    ga:699.90,
    mb:999.90
}

function newGreen(){
    x++
    const cartshop = document.getElementById('cartshop');
    cartshop.innerHTML = 'Carrinho ( ' + x +' )';

    if (x == 9){
        cartshop.innerHTML = '⚠ Carrinho lotado.'
        cartshop.style.fontWeight = '600'
    }
    
    if (x == 0){
        for(let x of somaTotal) {
            total += x
        }
    }

    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}



function addItem1(){
    const cartShoe = document.getElementById('cartShoeAE')
    cartShoe.style.display = 'flex'
    total += preços.ae
    const btn = document.getElementById('btn-ae')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem2(){
    const cartShoe = document.getElementById('cartShoeGI')
    cartShoe.style.display = 'flex'
    total += preços.gi
    const btn = document.getElementById('btn-gi')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem3(){
    const cartShoe = document.getElementById('cartShoeKD')
    cartShoe.style.display = 'flex'
    total += preços.kd
    const btn = document.getElementById('btn-kd')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem4(){
    const cartShoe = document.getElementById('cartShoeLB')
    cartShoe.style.display = 'flex'
    total += preços.lb
    const btn = document.getElementById('btn-lb')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem5(){
    const cartShoe = document.getElementById('cartShoeHV')
    cartShoe.style.display = 'flex'
    total += preços.hv
    const btn = document.getElementById('btn-hv')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem6(){
    const cartShoe = document.getElementById('cartShoeAK')
    cartShoe.style.display = 'flex'
    total += preços.ak
    const btn = document.getElementById('btn-ak')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem7(){
    const cartShoe = document.getElementById('cartShoeNP')
    cartShoe.style.display = 'flex'
    total += preços.np
    const btn = document.getElementById('btn-np')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem8(){
    const cartShoe = document.getElementById('cartShoeGA')
    cartShoe.style.display = 'flex'
    total += preços.ga
    const btn = document.getElementById('btn-ga')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}

function addItem9(){
    const cartShoe = document.getElementById('cartShoeMB')
    cartShoe.style.display = 'flex'
    total += preços.mb
    const btn = document.getElementById('btn-mb')
    btn.classList.add('disabled')
    btn.disabled = true
    btn.innerHTML = 'Item adicionado'
}
