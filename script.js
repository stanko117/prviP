let  dodaj = document.querySelector('.dodaj')
let add = document.querySelector('.dugme')
add.addEventListener('click', ()=>{
  let lista = document.querySelector('.lista')

  if(dodaj.value === ''){
    alert('nisi napisao tekst u polje')
  }else{
    lista.innerHTML += `<div class="klasa"><p class="textObaveze">${dodaj.value} <span></span></p>
    <button class="btn" onclick="btnFunkcija(this)" >&#10006;</button> </div>`
    dodaj.value = ''
  }
  for(let elem of document.querySelectorAll('.klasa')){
    elem.addEventListener('click',()=>{

     if(elem.classList.value === 'klasa'){
      elem.classList.add("klasa2")
      console.log('klasa 1 je')
       }else{
        elem.classList.remove("klasa2")
      }  
    })
  }
})
let exitBtn = document.querySelectorAll('.btn')

function btnFunkcija(e){
  let li = document.querySelectorAll('.klasa')  
  let currentBtn = e.closest('.klasa')
  currentBtn.remove()
}
