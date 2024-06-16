 
 var toggle = document.querySelector('#toggle');
 var toggleMenu = document.querySelector('#toggleMenu');


 toggle.addEventListener('click', function(e){
    if(toggleMenu.classList.contains('display-none')){
    toggleMenu.classList.replace('display-none','display-block')} else{
        toggleMenu.classList.replace('display-block','display-none');
    }
 })

