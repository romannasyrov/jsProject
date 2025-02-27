'use strict'

// function check phone input (num)
function checkNumericInputValue(input, inputValue) {
    let errorText = '';
    let incorrectValue = false;

    if(inputValue == '') {
        errorText = 'Пустое поле';
        incorrectValue = true;
    } else if (inputValue.length <= 5) {
        errorText = 'Не может быть короче 5 символов';
        incorrectValue = true;
    } else if (inputValue.length > 30) {
        errorText = 'Не может быть длиннее 30 символов';
        incorrectValue = true;
    } else if (inputValue[0] != '+') {
        errorText = 'Неправильный номер';
        incorrectValue = true;
    }
    if (incorrectValue) {
        showErrorInput(errorText, input);
        return false;
    }

    return true;
};

// function check text input (string)
function checkTextInputValue(input, inputValue) {
    let errorText = "";
    let incorrectValue = false;
    
    if (inputValue == '') {
        errorText = 'Пустое поле';
        incorrectValue = true;
    } else if (inputValue.length < 3) {
        errorText = 'Не может быть короче 3 символов';
        incorrectValue = true;
    } else if (inputValue.length > 20) {
        errorText = 'Не может быть длиннее 20 символов';
        incorrectValue = true;
    } 
    if (incorrectValue) {
        showErrorInput(errorText, input);
        return false;
    }

    return true;
}

// function for transit 2 ways: num and string 
function checkInput(input) {
    let inputValue = input.value.trim().toLowerCase();
    let inputCorrectStatus;

    if(input.className.includes('phone')) {
        inputCorrectStatus = checkNumericInputValue(input, inputValue)
    } else {
        inputCorrectStatus = checkTextInputValue(input, inputValue)
    }
    return inputCorrectStatus;
}

// Errors
function showErrorInput(errText, obj) {
    obj.classList.toggle(obj.classList[0] + '_active');
    let tempPlaceHolder = obj.getAttribute('placeholder');
    obj.value = "";
    obj.setAttribute('placeholder', errText);

    setTimeout(function () {
        obj.classList.toggle(obj.classList[0] + '_active');
        obj.setAttribute('placeholder', tempPlaceHolder);
    }, 3000);
}

function showErrorBlock(errorText) {
    let error = document.querySelector('.js-error');
    error.classList.toggle('error_active');
    error.textContent = errorText;
    setTimeout(function () {
        error.classList.toggle('error_active');
    }, 3000);
}


// modal window
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        if(event.target === modal) {
            closeModal();
        }
    })

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

