const button = document.getElementById('changeTextButton');
const paragraph = document.getElementById('text');

button.addEventListener('click', function() {
    paragraph.innerText = 'Text has been changed on clicking';
}); 
