


// All small cups
const smallCups = document.querySelectorAll('.cup-small');

const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');


// highlightCups function for all small cups
smallCups.forEach((cup, index) => {

    cup.addEventListener('click', () => highlighCups(index));
});


// Change cup style(click on cup adds 'full' class)
function highlighCups(cupIndex){

    // Toggle Single Cup
    if(smallCups[cupIndex].classList.contains('full') && !smallCups[cupIndex].nextElementSibling.classList.contains('full')){
        cupIndex--;
    }

    // Add 'full' class to all cups until selected
    smallCups.forEach((cup, index2) => {
        if(index2 <= cupIndex){
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

// Update big cup
function updateBigCup(){
    // All full cups
    const fullCups = document.querySelectorAll('.full').length;

    // 8 by default
    const totalCups = smallCups.length;

    // Big Cup fullness calculation
    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / totalCups) * 300}px`;
        percentage.textContent = `${(fullCups/totalCups)*100}%`;
    }

    // Remained cups calculation
    if(fullCups === totalCups){
        remained.textContent = '';
    } else {
        remained.textContent = `${( 100 - (fullCups/totalCups)*100)}% ${totalCups - fullCups} Cup Remained`;
    }
}






















