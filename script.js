


// All small cups
const smallCups = document.querySelectorAll('.cup-small');

const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

smallCups.forEach((cup, index) => {

    cup.addEventListener('click', () => highlighCups(index));
});


function highlighCups(cupIndex){

    if(smallCups[cupIndex].classList.contains('full') && !smallCups[cupIndex].nextElementSibling.classList.contains('full')){
        cupIndex--;
    }

    smallCups.forEach((cup, index2) => {
        if(index2 <= cupIndex){
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })

}
























