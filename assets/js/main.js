document.addEventListener('DOMContentLoaded', (e) => {
    const button = document.querySelector('.button');
    const binaryNumber = document.querySelector('#number');
    const result = document.createElement('p');
    const textContent = document.querySelector('.content');
    
    button.addEventListener('click', () => {
        if(validateConversion()){
            result.innerHTML = '';
            result.innerHTML += `This number converted to decimal is ${convertToDecimal()}`;
            // result.style.color = 'green';
            textContent.appendChild(result);
        } else {
            result.innerHTML = '';
            result.innerHTML += `Check the input, something is wrong`;
            // result.style.color = 'crimson';
            textContent.appendChild(result);
        }
    });

    function convertToDecimal() {
        const number = binaryNumber.value;
        return (parseInt(number, 2));
    }
  
    function validateConversion() {
        let binary = binaryNumber.value;

        if(binary === '' || isNaN(binary) || binary.match(/^[0-1]+$/g) === null) {
            return false;
        } else {
            return true;
        }
    }
});