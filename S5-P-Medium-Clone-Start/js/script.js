let nav = document.querySelector('nav')
let btn = document.querySelector('nav ul li:last-child')

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx < 300) {
      nav.style.backgroundColor = '#ffc017';
      btn.style.backgroundColor = 'black';
    } else if (verticalScrollPx > 200) {
      nav.style.backgroundColor = 'white';
      btn.style.backgroundColor = '#1a8917';
    }
  });
    
  function mRandom() {
    let m = document.querySelectorAll('g');  // array
    let array = [];
    let random =0;
    for(let i = 0; i<20; i++){
        random = Math.round(Math.random()* 100); // numero casuale
        array.push(random);
    }
    console.log(array);
    let hiddenM = m[array[random]];
    setInterval(()=>{
        hiddenM.style.visibility = 'hidden';
    }, 1000)
}

mRandom();