var card = document.querySelector('.card');
var stopButton = document.getElementById('stopButton');

stopButton.addEventListener('click', function() {
 card.style.animationPlayState = 'paused';
});