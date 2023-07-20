let image = document.getElementById('image');
let path = ['Assets/MacBook.png', 'Assets/iMac.png', 'Assets/Processor.png'];
let hamburger = document.getElementById('ham');
let navbar = document.getElementById('nav');
let x = navbar.querySelectorAll('a');

hamburger.addEventListener('click', () => {

    navbar.classList.toggle('activated');


})
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', () => {
        navbar.classList.toggle('activated');
    })
}



//     image.src = path[currentIndex];
//     currentIndex = (currentIndex + 1) % path.length;
//     console.log(currentIndex);
// }
// setInterval(changebg, 3000);
