// нужны 2 функции проверки текстового инпута и числового
window.onload = function () {
    document.querySelector('.js-submit-btn').addEventListener('click', () => {
        let contact = new Object();
        let nameInput = document.querySelector('.js-name-input');
        let vacancyInput = document.querySelector('.js-vacancy-input');
        let phoneInput = document.querySelector('.js-phone-input');

        let correctFirstInput = checkInput(nameInput);
        let correctSecondInput = checkInput(vacancyInput);
        let correctThirdInput = checkInput(phoneInput);
        if (correctFirstInput && correctSecondInput && correctThirdInput) {
            contact.name = nameInput.value.trim();
            contact.vacancy = vacancyInput.value.trim();
            contact.phone = phoneInput.value.trim();

            let firstLetter = nameInput.value.trim()[0].toLowerCase();
            addToTable(contact, firstLetter);
        } else
            showErrorBlock('Error');
    });

// Проверяем поле номера телефона 
function checkNumericInputValue(input, inputValue) {
    // let regNumbers = /[0-9+]/gmi; - будущая регулярка для проверки номера телефона

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

// Проверяем текстовый инпут
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

// Функция нужна для распределения полученных значений в инпутах и перераспределяет их по другим функциям
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

// Ошибки
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
}