let bg = document.querySelectorAll('.header__leaf');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(+' + x * 70 + 'px, +' + y * 30 + 'px)';
    });    
}