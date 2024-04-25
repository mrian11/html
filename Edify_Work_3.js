// const clean = DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } });

// DOMPurify.sanitize('<UL><li><A HREF=//google.com>click</UL>');

function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// let coll = document.getElementsByClassName('collaps');
// for(let i = 0; i < coll.length; i++){
//     coll[i].addEventListener('click', function() { 
//         this.classList.toggle('active');
//         let  contentblick1 = this.nextElementSibling;
//         if(contentblock1.cryle.maxHeight){
//             contentblock1.cryle.maxHeight = null;  
//         }
//         else {
//             contentblock1.cryle.maxHeight = contentblick1.scrollHeight + 'px'
//         }
//     })
// }