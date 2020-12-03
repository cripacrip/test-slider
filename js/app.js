let slider = document.querySelectorAll('.slider');
let base = 0;

function slide(){
    for(let i = 0; i < slider.length; i++){
          slider[i].style.display = 'none';
    }
    let int = setInterval(function(){
        x+= 0.1;
        slider[base].style.opacity = x;
        if(x >= 1) {
            clearInterval(int);
            x = 0.2;
        }
    }, 50);
}

function next(){
    slide();
    if(base === slider.length-1) base = -1;
    base++;

    slider[base].style.display = 'block';
    slider[base].style.opacity = 0.4;

    let x = 0.2;
    let int = setInterval(function(){
        x+=0.1;
        slider[base].style.opacity = x;
        if(x >= 1) {
            clearInterval(int);
            x = 0.2;
        }
    }, 50);
}

function prev(){
    slide();
    if(base === 0) base = slider.length;
    base--;

    slider[base].style.display = 'block';
    slider[base].style.opacity = 0.4;

    let x = 0.2;
    let int = setInterval(function(){
        x+=0.1;
        slider[base].style.opacity = x;
        if(x >= 1) {
            clearInterval(int);
            x = 0.2;
        }
    }, 50);
}

function start(){
    slide();
    slider[base].style.display = 'block';
}
start();