class Cart {
    static #products = [];
    static result = 0
    static total = document.getElementById('total')
    static add(id) {
        let listItemsHtmlElement = document.getElementsByTagName('ul')[0]
        let btns = document.getElementsByClassName('add-btn-cart');
        let newElem = document.createElement('li')
        
        let [issetProduct] = this.#products.filter(p => p.id === id);
        if (issetProduct) {
            issetProduct.amount += this.#products.find(obj =>obj.id === id).amount;
            
        }
        else{
            if(id === 1) {
                this.#products.push({id:1,name:'Nike Air',price : 100,amount : 1})
                this.result+=this.#products.find(item => item.name === 'Nike Air').price
                this.total.textContent = this.result + '$'
                stylesInCart(0,'in')
                newElem.innerHTML = `<div class='cart-nike'>
                                        <p>${id}.  Nike Air</p>
                                        <p class='amount-p-nike'>${this.#products.find(obj =>obj.id === id).amount}</p>
                                        <div>
                                            <button class='plus-amount nike-add'>➕</button>
                                            <button class='minus-amount nike-min'>➖</button>
                                        </div>
                                        
                                        <p>${this.#products.find(obj =>obj.id === id).price}$</p>
                                        <button class='delete-cart-item nike-del'>❌</button>
        
                                    </div>`
                
                listItemsHtmlElement.append(newElem)
                newElem.className = `list-nike`
            
            }else if (id === 2) {
            
    
            this.#products.push({id:2,name:'Adidas SuperStar',price : 120,amount : 1});
            this.result+=this.#products.find(item => item.name === 'Adidas SuperStar').price;
            this.total.textContent = this.result + '$';
            stylesInCart(1,'in');
            newElem.innerHTML = `<div class='cart-adidas'>
                                    <p>${id}.  Adidas SuperStar</p>
                                    <p class='amount-p-adidas'>${this.#products.find(obj =>obj.id === id).amount}</p>
                                    <div>
                                        <button class='plus-amount adidas-add'>➕</button>
                                        <button class='minus-amount adidas-min'>➖</button>
                                    </div>
                                    
                                    <p>${this.#products.find(obj =>obj.id === id).price}$</p>
                                    <button class='delete-cart-item adidas-del'>❌</button>
    
                                </div>`
            
            listItemsHtmlElement.append(newElem)
            newElem.className = `list-adidas`
            }else {
                
                this.#products.push({id:3,name:'Puma St Runner',price : 130,amount : 1})
                this.result+=this.#products.find(item => item.name === 'Puma St Runner').price
                this.total.textContent = this.result + '$'
                stylesInCart(2,'in')
                newElem.innerHTML = `<div class='cart-puma'>
                                        <p>${id}.  Puma St Runner</p>
                                        <p class='amount-p-puma'>${this.#products.find(obj =>obj.id === id).amount}</p>
                                        <div>
                                            <button class='plus-amount puma-add'>➕</button>
                                            <button class='minus-amount puma-min'>➖</button>
                                        </div>
                                        
                                        <p>${this.#products.find(obj =>obj.id === id).price}$</p>
                                        <button class='delete-cart-item puma-del'>❌</button>
        
                                    </div>`
                
                listItemsHtmlElement.append(newElem)
                newElem.className = `list-puma`
            }
        }
        this.remove()
        this.changeAmount()

    }
    

    static remove() {
        let deleteBtnNike = document.getElementsByClassName('nike-del')[0];
        let deleteBtnAdidas = document.getElementsByClassName('adidas-del')[0];
        let deleteBtnPuma = document.getElementsByClassName('puma-del')[0];
        let ulelement = document.getElementById('list-with-orders').children
        
        let addToCartNike = document.getElementsByClassName('nike')[0]
        let addToCartAdidas = document.getElementsByClassName('adidas')[0]
        let addToCartPuma = document.getElementsByClassName('puma')[0]
        
        if(typeof deleteBtnNike !== 'undefined'){
    
    
            deleteBtnNike.addEventListener('click',(e)=>{
                e.stopPropagation();
                e.preventDefault();
                stylesInCart(0,'out')
                this.result -= this.#products.find(item => item.name === 'Nike Air').amount * this.#products.find(item => item.name === 'Nike Air').price
                this.total.textContent = this.result + '$'
                addToCartNike.style.color =`rgb(54, 85, 157)`;
                addToCartNike.style.background = `white`
                addToCartNike.textContent = 'ADD TO CART'
                this.#products.forEach((elem,index)=>{
                    if(elem.name === 'Nike Air'){
                    this.#products.splice(index,1);
                    stylesInCart(index,'out')
                    
                
                        }
                })
                
                Array.from(ulelement).find(elem =>elem.className === 'list-nike').remove()
            
    
            })
        }
        if(typeof deleteBtnAdidas !== 'undefined'){
            
            deleteBtnAdidas.addEventListener('click',(e)=>{
                e.stopPropagation();
                e.preventDefault();
                stylesInCart(1,'out')
                this.result-=this.#products.find(item => item.name === 'Adidas SuperStar').amount * this.#products.find(item => item.name === 'Adidas SuperStar').price
                this.total.textContent = this.result + '$'
                addToCartAdidas.style.color =`rgb(54, 85, 157)`;
                addToCartAdidas.style.background = `white`
                addToCartAdidas.textContent = 'ADD TO CART'
                this.#products.forEach((elem,index)=>{
                    if(elem.name === 'Adidas SuperStar'){
                    this.#products.splice(index,1);
                    stylesInCart(index,'out')
                    
                    }
                })
                
                Array.from(ulelement).find(elem =>elem.className === 'list-adidas').remove()
                
    
            })
        }
        if(typeof deleteBtnPuma !== 'undefined'){
            
            deleteBtnPuma.addEventListener('click',(e)=>{
                e.stopPropagation();
                e.preventDefault();
                stylesInCart(2,'out');
                this.result-=this.#products.find(item => item.name === 'Puma St Runner').amount * this.#products.find(item => item.name === 'Puma St Runner').price
                this.total.textContent = this.result + '$'
                addToCartPuma.style.color =`rgb(54, 85, 157)`;
                addToCartPuma.style.background = `white`
                addToCartPuma.textContent = 'ADD TO CART'
                this.#products.forEach((elem,index)=>{
                    if(elem.name === 'Puma St Runner'){
                    this.#products.splice(index,1);
                    stylesInCart(index,'out')
                    
                    }
                })
                
                Array.from(ulelement).find(elem =>elem.className === 'list-puma').remove()
                
    
            })
        }
    }

    static changeAmount() {

        if(this.#products.length >0) {
            let amountNikeText = document.getElementsByClassName('amount-p-nike')[0];
            let amountAdidasText = document.getElementsByClassName('amount-p-adidas')[0];
            let amountPumaText = document.getElementsByClassName('amount-p-puma')[0];
            let btnAddNike = document.getElementsByClassName('nike-add')[0]
            let btnAddAdidas = document.getElementsByClassName('adidas-add')[0]
            let btnAddPuma = document.getElementsByClassName('puma-add')[0]
            let btnMinNike = document.getElementsByClassName('nike-min')[0]
            let btnMinAdidas = document.getElementsByClassName('adidas-min')[0]
            let btnMinPuma = document.getElementsByClassName('puma-min')[0]
            if(typeof btnAddNike !== 'undefined'){

                btnAddNike.onclick = (e)=>{
                    this.result+=this.#products.find(item => item.name === 'Nike Air').price
                    this.total.textContent = this.result + '$'
                    e.stopPropagation();
                    e.preventDefault();
                    this.#products.find(elem => elem.name === 'Nike Air').amount+=1;
                    amountNikeText.textContent =this.#products.find(elem => elem.name === 'Nike Air').amount; 
                    
                }
            }
            if(typeof btnAddAdidas !== 'undefined'){
                btnAddAdidas.onclick = (e)=>{
                    this.result+=this.#products.find(item => item.name === 'Adidas SuperStar').price
                    this.total.textContent = this.result + '$'
                    e.stopPropagation();
                    e.preventDefault();
                    
                    this.#products.find(elem => elem.name === 'Adidas SuperStar').amount+=1;
                    amountAdidasText.textContent =this.#products.find(elem => elem.name === 'Adidas SuperStar').amount; 
                    
                    
                }
            }
            
            if(typeof btnAddPuma !== 'undefined'){
                btnAddPuma.onclick = (e)=>{
                    this.result+=this.#products.find(item => item.name === 'Puma St Runner').price
                    this.total.textContent = this.result + '$'
                    e.stopPropagation();
                    e.preventDefault();
                    this.#products.find(elem => elem.name === 'Puma St Runner').amount+=1;
                    amountPumaText.textContent =this.#products.find(elem => elem.name === 'Puma St Runner').amount; 
                    
                }
            }

            if(typeof btnMinNike !== 'undefined'){
                    btnMinNike.onclick = (e)=>{
                    e.stopPropagation();
                    e.preventDefault(); 
                    
                    if(this.#products.find(elem => elem.name === 'Nike Air').amount >1){
                        this.#products.find(elem => elem.name === 'Nike Air').amount-=1;
                        this.result-=this.#products.find(item => item.name === 'Nike Air').price
                        this.total.textContent = this.result + '$'
                        amountNikeText.textContent =this.#products.find(elem => elem.name === 'Nike Air').amount; 

                    }
                }
            }
            if(typeof btnMinAdidas !== 'undefined'){
                btnMinAdidas.onclick = (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    
                    if(this.#products.find(elem => elem.name === 'Adidas SuperStar').amount >1) {
                        this.#products.find(elem => elem.name === 'Adidas SuperStar').amount-=1;
                        this.result-=this.#products.find(item => item.name === 'Adidas SuperStar').price
                        this.total.textContent = this.result + '$'
                        amountAdidasText.textContent =this.#products.find(elem => elem.name === 'Adidas SuperStar').amount; 

                    }
                }
            }
            
            if(typeof btnMinPuma !== 'undefined'){
                btnMinPuma.onclick = (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    
                    
                    if(this.#products.find(elem => elem.name === 'Puma St Runner').amount >1) {
                        this.#products.find(elem => elem.name === 'Puma St Runner').amount-=1;
                        this.result-=this.#products.find(item => item.name === 'Puma St Runner').price
                        this.total.textContent = this.result + '$';
                        amountPumaText.textContent =this.#products.find(elem => elem.name === 'Puma St Runner').amount; 
                    }
                

                }
            }
        
        } 
    
    }

    static clear() {
        let btnClear = document.getElementById('btn-clear');
        
        
        btnClear.addEventListener('click',(e)=>{
            e.stopPropagation();
            e.preventDefault();
            
            let ulelement = document.getElementById('list-with-orders').children;
            let addToCartNike = document.getElementsByClassName('nike')[0];
            let addToCartAdidas = document.getElementsByClassName('adidas')[0];
            let addToCartPuma = document.getElementsByClassName('puma')[0];
            stylesInCart(0,'out');
            this.result -= this.#products.find(item => item.name === 'Nike Air').amount * this.#products.find(item => item.name === 'Nike Air').price
            this.total.textContent = this.result + '$';
            addToCartNike.style.color =`rgb(54, 85, 157)`;
            addToCartNike.style.background = `white`;
            addToCartNike.textContent = 'ADD TO CART';
            this.#products.forEach((elem,index)=>{
                if(elem.name === 'Nike Air'){
                this.#products.splice(index,1);
                stylesInCart(index,'out');
            
                }
        })

        Array.from(ulelement).find(elem =>elem.className === 'list-nike').remove();
        stylesInCart(1,'out');
        this.result-=this.#products.find(item => item.name === 'Adidas SuperStar').amount * this.#products.find(item => item.name === 'Adidas SuperStar').price
        this.total.textContent = this.result + '$';
        addToCartAdidas.style.color =`rgb(54, 85, 157)`;
        addToCartAdidas.style.background = `white`;
        addToCartAdidas.textContent = 'ADD TO CART';
        this.#products.forEach((elem,index)=>{
            if(elem.name === 'Adidas SuperStar'){
            this.#products.splice(index,1);
            stylesInCart(index,'out');
            }
        })
        Array.from(ulelement).find(elem =>elem.className === 'list-adidas').remove();
        stylesInCart(2,'out');
        this.result-=this.#products.find(item => item.name === 'Puma St Runner').amount * this.#products.find(item => item.name === 'Puma St Runner').price;
        this.total.textContent = this.result + '$';
        addToCartPuma.style.color =`rgb(54, 85, 157)`;
        addToCartPuma.style.background = `white`;
        addToCartPuma.textContent = 'ADD TO CART';
        this.#products.forEach((elem,index)=>{
            if(elem.name === 'Puma St Runner'){
            this.#products.splice(index,1);
            stylesInCart(index,'out');

            }
        })

        Array.from(ulelement).find(elem =>elem.className === 'list-puma').remove()  ;
    })
        

        
    }
    static getProducts() {
        return this.#products;
    }
    
}
function callForFirst(){
    Cart.add(1)
};
function callForSecond(){
    Cart.add(2)
};
function callForThird(){
    Cart.add(3)
};
function stylesInCart(num,status) {
    if(status === 'in') {
        btns[num].textContent = `IN THE CART`
        btns[num].style.color = 'white'
        btns[num].style.background = `#32CD32`;
    if(num === 0){
        btns[num].removeEventListener('click',callForFirst)
    }else if(num === 1){
        btns[num].removeEventListener('click',callForSecond)
    }else {
        btns[num].removeEventListener('click',callForThird)
    }
    }else if(status === 'out'){

    if(num === 0){
        btns[num].addEventListener('click',callForFirst)
        
    }else if(num === 1){
        btns[num].addEventListener('click',callForSecond)
        
    }else {
        btns[num].addEventListener('click',callForThird)
        
    }
}
    

    
};

let btns = document.getElementsByClassName('add-btn-cart');
btns[0].addEventListener('click',callForFirst);
btns[1].addEventListener('click',callForSecond);
btns[2].addEventListener('click',callForThird);

Cart.clear();

let btnOrder = document.getElementById('btn-order');
btnOrder.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('order-inform').hidden = false;
})

function validatorForPhone(number) {
    const validateList = [1,2,3,4,5,6,7,9,0];
    if(number.length < 10){
        return false
    }
    const splittedNumber = String(number).split('')
    
    for (let i = 0; i < splittedNumber.length; i++) {
        const element = splittedNumber[i];
        
        if(isNaN(element)) {
            return false 
        }
    }
    return true
}


let allInputs = document.querySelectorAll('input')
const sendOrderBtn = document.getElementById('send-order-btn')
sendOrderBtn.onclick = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    let orderInformationFromUser = {
        fName : allInputs[0].value[0].toUpperCase()+ allInputs[0].value.slice(1),
        lName : allInputs[1].value[0].toUpperCase()+ allInputs[1].value.slice(1),
        
        email : allInputs[3].value
    };
    if(validatorForPhone(allInputs[2].value)) {
        orderInformationFromUser.phone = allInputs[2].value;
    }else {
        alert(new Error('Wrong phone '))
    } 
    const orderFromUserJSON =  JSON.stringify(orderInformationFromUser)

    
    // An example of sending a request with an order description
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: orderFromUserJSON,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    // An example of sending a request with an order description
    
}






