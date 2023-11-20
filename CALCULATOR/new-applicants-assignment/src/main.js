const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const clickedButton = event.target;
    const buttonText = clickedButton.textContent;

    if (buttonText === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'ERROR';
        }
    } else if (buttonText === 'AC') {
        display.value = '';
    } else if (buttonText === 'DEL') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += buttonText;
    }
}
