/*
1. linko i bottoni e il contenitore delle immagini 
2. creo l'array delle immagini
3. inizializzo un ciclo for che stampa le immagini nel contenitore con la classe nascosta

4.raccolgo in un array le immagini create e mostro la prima

5.inizializzo un contatore

6.formulo gli eventi click che cambieranno contatore e immagini

*/


// elements
// 1.
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const imgBox  = document.querySelector('.img-box');
// 5.
let counterImage = 0

// 2.
const images = [
  '"assets/img/01.webp"',
  '"assets/img/02.webp"',
  '"assets/img/03.webp"',
  '"assets/img/04.webp"',
  '"assets/img/05.webp"',
]

// 3.
for (let i = 0; i < images.length; i++) {
  const imageSrc = images[i];

  imgBox.innerHTML += `
  <img class="item hide" src=${imageSrc}>
  `  
}

// 4.
const imagesCollection = document.getElementsByClassName('item')

imagesCollection[0].classList.remove('hide')

// 6.

btnNext.addEventListener('click', function() {
  imagesCollection[counterImage].classList.add('hide')


  counterImage++
  imagesCollection[counterImage].classList.remove('hide')

  
  // if(counterImage = imagesCollection.length - 1){
  //   btnNext.classList.add('hide')
  // }
  // console.log(counterImage,imagesCollection.length - 1);
})

btnPrev.addEventListener('click', function() {
  imagesCollection[counterImage].classList.add('hide')
  counterImage--
  imagesCollection[counterImage].classList.remove('hide')
  console.log(imagesCollection.length - 1);
  
})


