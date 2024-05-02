
function removeAE(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-ae')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const ae = document.getElementById('cartShoeAE')
    ae.style.display = 'none'
    x--
    
    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
    
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }
    
    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.ae
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeGI(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-gi')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const gi = document.getElementById('cartShoeGI')
    gi.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.gi
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeKD(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-kd')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const kd = document.getElementById('cartShoeKD')
    kd.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.kd
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeLB(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-lb')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const lb = document.getElementById('cartShoeLB')
    lb.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.lb
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeHV(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-hv')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const hv = document.getElementById('cartShoeHV')
    hv.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.hv
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeAK(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-ak')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const ak = document.getElementById('cartShoeAK')
    ak.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.ak
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeNP(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-np')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const np = document.getElementById('cartShoeNP')
    np.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.np
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeGA(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-ga')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const ga = document.getElementById('cartShoeGA')
    ga.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.ga
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}
    
function removeMB(){
    const item = document.getElementById('demo')
    const btn = document.getElementById('btn-mb')
    const cartshop = document.getElementById('cartshop')
    const carrinho = document.getElementById('carrinho')
    const produtos = document.getElementById('produtos')
    const mb = document.getElementById('cartShoeMB')
    mb.style.display = 'none'
    x--

    if (x == 0)
    {
        cartshop.innerHTML = 'Carrinho'
        cartshop.style.fontWeight = '400'
        carrinho.classList.remove('activepage');
        carrinho.style.display = 'none';
        produtos.classList.add('activepage');
    }
        
    else
    {
        cartshop.innerHTML = 'Carrinho ( ' + x + ' )';
    }

    btn.classList.remove('disabled')
    btn.disabled = false
    btn.innerHTML = 'Adc. ao carrinho'
    total -= preços.mb
    document.querySelector('.total').innerHTML = total.toFixed(2).replace(/\./g, ',')
}