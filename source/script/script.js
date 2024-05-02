
function prodPage(){
    const prodPage = document.getElementById('produtos')
    const cart = document.getElementById('carrinho')
    const products = document.getElementById('products')
    
    prodPage.classList.add('activepage')
    cart.classList.remove('activepage')
    cart.style.display = 'none'
    products.style.fontWeight = '500'
}

function cart(){
    if (x >= 1){
        const prodPage = document.getElementById('produtos')
        const products = document.getElementById('products')
        const cartshop = document.getElementById('cartshop')
        const cart = document.getElementById('carrinho')

        prodPage.classList.remove('activepage')
        cart.classList.add('activepage')
        cartshop.style.fontWeight = '500'
        cart.style.display = 'flex'
        cart.style.zIndex = '1'
        products.style.fontWeight = '400'
    } else
    {
        alert('Carrinho vazio.')
        location.reload()
    }
}

    

function lightDark (){
    const body = document.getElementById('body')
    const btn = document.getElementById('darkLight')
    const elements = document.querySelectorAll('.modeCanChange')
    
    if (body.classList.contains('dark')){
        elements.forEach(function changeToLight(modeCanChange){
            modeCanChange.classList.remove('dark');
            modeCanChange.classList.add('light');
            btn.classList.remove('fa-moon')
            btn.classList.add('fa-sun')
        })
    } else {
        elements.forEach(function changeToDark(modeCanChange){
            modeCanChange.classList.remove('light');
            modeCanChange.classList.add('dark');
            btn.classList.add('fa-moon')
            btn.classList.remove('fa-sun')
        })
    }
}

function finish(){
    location.reload()
}