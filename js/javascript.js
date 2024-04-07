const image = document.querySelector('.foodpic');

image.addEventListener('mouseover', function() {
    image.style.border = 'dashed 8px purple';
    
});

image.addEventListener('mouseout', function (){
    image.style.border = '';
});


