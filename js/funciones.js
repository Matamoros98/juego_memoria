
function rotateCard() {
    const card = document.querySelector('.back');
    card.classList.toggle('flipped');
    console.log('flipped')
  }


  function getDatos(){

    const cardImg = document.querySelectorAll('.card-img');

    console.log(cardImg);
    let img=[];
    fetch('https://api.thecatapi.com/v1/images/search?limit=3&mime_types=jpg,png')
    .then(response=>response.json())
    .then(data =>{
      for(i=0;i<data.length;i++){
        img.push(data[i].url);
      }
      let ii=0;
      cardImg.forEach(function(element) {
        ii=ii+1;
        element.setAttribute('src', img[ii]);
      });
     
    })

  }

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }