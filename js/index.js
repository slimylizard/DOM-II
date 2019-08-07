// Your code goes here
let header2 = document.querySelector('.intro h2');
console.log(header2);
header2.addEventListener('mouseover', function(e){
    e.target.style.color = "red";
    setTimeout(function(){
        e.target.style.color = "";
    }, 500);
}, false);

let mid = document.querySelector('.content-destination');
mid.addEventListener('click', function(e){
    e.target.style.width = "200px";
    setTimeout(function(){
        e.target.style.width = "";
    }, 1000);
}, false);


/*
let as = document.querySelectorAll('.nav a');
console.log(as);
as.forEach(function(as){
    link.addEventListener('click', funtion(e){
        const nav = e.target.parentElement;
        parent.removeChild(nav)  
    })
})
*/
const link = document.querySelectorAll('.nav a');

Array.from(link).forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        console.log('navagaton to', e.target.textContent,' was prevented');
        e.target.style.color = 'red';
    })
})

let destiny = document.querySelector('.destination');
console.log(destiny);
destiny.addEventListener('keydown', function(e){
    log.textContent += '${e.code}';
    e.target.style.background = 'red';
})

