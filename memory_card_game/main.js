const card = document.querySelectorAll('.cell')
const cardFront = document.querySelectorAll('.cardFront')
const container = document.querySelector('.container')
const total = document.querySelector('.total span')

shuffle()
click()

function shuffle(){
    card.forEach(x=>{
        const amount = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)
        x.style.order = amount[random]
    })
}
function click(){
    for(let i = 0; i < card.length; i++){
        cardFront[i].classList.add('showCard')
        setInterval(() => {
            cardFront[i].classList.remove('showCard')
        }, 2000);

        card[i].addEventListener('click' ,()=>{
            cardFront[i].classList.add('flipCard')
            const cardFlipped = document.querySelectorAll('.flipCard')

            if(cardFlipped.length == 2){
                container.style.pointerEvents ='none'
                setInterval(() => {

                    container.style.pointerEvents ='all'
                }, 500);
 
                match(cardFlipped[0] , cardFlipped[1])
            }
        })
    }
}

function match(card1 , card2){
    if(card1.dataset.index == card2.dataset.index){
        total.innerHTML = parseInt(total.innerHTML) + 1
        card1.classList.remove('flipCard') 
        card2.classList.remove('flipCard') 
        card1.classList.add('match')
        card2.classList.add('match')

    }else{
        setTimeout(() => {
            card1.classList.remove('flipCard') 
            card2.classList.remove('flipCard') 
        }, 1000);
    }
    
}