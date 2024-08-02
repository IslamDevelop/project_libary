
// анимации
const openButton = document.querySelector('.open')
const ldoor =document.querySelector('.leftDoor')
const rdoor =document.querySelector('.rightDoor')

openButton.addEventListener('click', () => {
ldoor.classList.add('leftDoor_open');
rdoor.classList.add('rightDoor_open')
})


// анимации