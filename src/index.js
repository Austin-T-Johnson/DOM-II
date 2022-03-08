import './less/index.less'

// Your code goes here!




// click//
const colorBtn = document.querySelectorAll('.btn');
colorBtn.forEach(element => element.addEventListener('click', () => {
    element.style.backgroundColor = 'red';
}));

//Hover//

//hover over img change color//

const textHover = document.querySelector('.text-content');

textHover.addEventListener('mouseover', () => {
textHover.style.backgroundColor = "rgb(0,0,0, 0.8)";
setTimeout(function() {
    textHover.style.backgroundColor='';
}, 500);
},false)

//hover over nav linkto change color//

const navHover = document.querySelectorAll('.nav-link');
navHover.forEach(el => el.addEventListener('mouseover', () => {
    el.style.color = 'blue';
    setTimeout(function() {
        el.style.color='';
    }, 500);
},false)
);

//load//
window.addEventListener('load', () => {
    alert ("This happens when the page loads!!!")
});

//copy//
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        alert (`Woah man you just copied: ${text}!`)
})
});

//resize//

window.addEventListener('resize', () => {
    alert ("Hey man don't resize me, thats not cool!");
});



//scroll//
const bodyColr = document.querySelector('body');
window.addEventListener('scroll', () => {
    bodyColr.style.backgroundColor = "gray";
    setTimeout(function() {
        bodyColr.style.backgroundColor='';
    }, 500);
},false);


//keydown//
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  bodyColr.addEventListener("keydown", evt => {
      if(evt.code == 'KeyA') {
        setBg();
      } else if (evt.code == 'KeyB') {
        bodyColr.style.backgroundColor = ""
      }
  });

  //keyup//
  
  bodyColr.addEventListener("keyup", evt => {
      if(evt.code == 'KeyA') {
        setBg();
      } else if (evt.code == 'KeyB') {
        bodyColr.style.backgroundColor = ""
      }
  });
    

  //wheel//

  function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('div');
  document.onwheel = zoom;

//dblclick//
window.addEventListener('dblclick', () => {
    alert ('bro you just double clicked that?!')
})

//mouseenter//

const mouseEnter = document.querySelector('.main-navigation');
mouseEnter.addEventListener('mouseenter', () => {
    mouseEnter.style.backgroundColor = 'red';
    
})

//mouseleave//
mouseEnter.addEventListener('mouseleave', () => {
    mouseEnter.style.backgroundColor = 'white';
})