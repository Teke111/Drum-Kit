// const drums = document.querySelectorAll('.drum');

// for (let drum of drums) {
//     drum.addEventListener('click', function () {
//         // for (let i = 0; i < 6; i++) {
//         alert('I got clicked')
//         // }

//     })
// }

//OR

const drum = document.querySelectorAll('.drum');

//DETECTING BUTTON PRESS
const numOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numOfDrumButtons; i++)
    drum[i].addEventListener('click', function () {

        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    })


//DETECTING KEYBOARD PRESS
document.addEventListener('keydown', function (e) {
    makeSound(e.key);

    buttonAnimation(e.key);
})


function makeSound(character) {
    switch (character) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'l':
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);   // .w, .d, .s, etc

    activeButton.classList.add('pressed');

    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);


}



