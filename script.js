let display = document.getElementById('display')
let massage= document.getElementById('massage')
let one = document.getElementById('one')
let three = document.getElementById('three')
let five = document.getElementById('five')
let price = document.getElementById('price')
let percCoffee = 50 ;
one.addEventListener('click',function () {
          display.value = 1
          let totalcoffee = display.value
          price.innerText= percCoffee * totalcoffee
          
})
three.addEventListener('click',function () {
          display.value = 3
          let totalcoffee = display.value
          price.innerText= percCoffee * totalcoffee
})
five.addEventListener('click',function () {
          display.value = 5
          let totalcoffee = display.value
          price.innerText= percCoffee * totalcoffee
})
const body = document.getElementById('body')

const sendNow =() =>{
if (massage.value == '') {
                    alert('Input Your Massage') 
 }
 else{
          body.textContent=''
          const div = document.createElement('div')
          div.innerHTML =`<div class="page2 px-8">
          <h1 class="text-center text-2xl my-3">Your Invoice</h1><hr>
          <h1 class=" w-full text-xl font-bold my-3 flex justify-between">Total Cup : <span>${display.value}</span></h1>
          <h1 class=" w-full text-xl font-bold my-3 flex justify-between">Per Cup : <span>50</span></h1>
          <h1 class=" w-full text-xl font-bold my-3 flex justify-end">Total :<span>${price.innerText}</span></h1>
          <h1 class="text-center text-xl my-3">Your Massage</h1><hr>
          <h1 class=" w-full text-xl font-mono my-3 flex justify-between">${massage.value}</h1>
          <div class="w-full flex my-2">
            <button class="send mx-auto" onclick="done()">Done</button>
          </div>
          </div>`
          body.appendChild(div)
          
 }

}

const done = () =>{
          body.textContent=''
          body.style.backgroundColor="#DFF9FA"
          const div = document.createElement('div')
          div.innerHTML =`<img class="mx-auto" src="last.jpg" >`
          body.appendChild(div)
}