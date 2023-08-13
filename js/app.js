let slides = document.querySelector('.slides');

let isDragStart = false,prevPageX, prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = slides.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let position = e.pageX - prevPageX;
  slides.scrollLeft = prevScrollLeft - position;

};

const dragStop = () => {
  isDragStart = false;
};

slides.addEventListener('mousedown', dragStart);
slides.addEventListener('mousemove', dragging);
slides.addEventListener('mouseleave', dragStop);
slides.addEventListener('mouseup', dragStop);



let paragraph=document.getElementsByClassName('relativeParagraph');
let btn=document.getElementsByClassName('buttonViewMore');
let variable=false;

for(let i=0; i<btn.length;i++){

  btn[i].addEventListener('click',function(){
    if(variable){
          paragraph[i].style=`overflow:hidden;
                              height: 40px;`
          btn[i].style.transform = 'translate(0px, 0px)';
        }else{
          paragraph[i].style=`overflow:hidden;
                              height: 100%;`;
          btn[i].style.transform = 'translate(0px, 10%)';
        
        }
        variable=!variable;
  })

}

// Array.from(btn).forEach(function(e){
//   e.addEventListener('click',function(){
//     console.log('click');

//   if(variable){
//     paragraph[0].style='overflow:hidden'
//     btn[0].style='tranform:translate(0px,0px)'
//   }else{
//     paragraph[0].style='overflow:visible';
//     btn[0].style='tranform:translate(0px,50px)'
  
//   }
//   
//   })
// })

