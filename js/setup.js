// Находим нужные нам блоки и создаем функцию открытия/закрытия окна персонажа

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');


var onPopupEscPress = function(evt) {
  if (evt.keyCode === window.utils.ESC_KEYCODE) {
      closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
   openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
   if (evt.keyCode === window.utils.ENTER_KEYCODE) {
       openPopup();
   }
});

setupClose.addEventListener('click', function () {
    closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
        closePopup();
    }
});

// Делаем кастомную валидацию с помощью "required" в поле <form>
userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно состоять минимум из 2-ух символов');
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity ('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Обязательное поле');
    } else {
        userNameInput.setCustomValidity('');
    }
});

// Использую шаблонизацию для создания списка похожих игроков
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i <= 3; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizardName = window.utils.getRandomElement(window.utils.names) + ' ' + window.utils.getRandomElement(window.utils.surnames);
    var wizardCoatColor = window.utils.getRandomElement(window.utils.coatColors);
    var wizardEyesColor = window.utils.getRandomElement(window.utils.eyesColors);


    wizardElement.querySelector('.setup-similar-label').textContent = wizardName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardCoatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardEyesColor;

    similarListElement.appendChild(wizardElement);
}

// Изменяем эелементы по клику
var setupFireball = document.querySelector('.setup-fireball-wrap');
var inputFireball = document.querySelector('input[name="fireball-color"]');
var setupWizardCoat = document.querySelector('.wizard-coat');
var inputWizardCoat = document.querySelector('input[name="coat-color"]');
var setupWizardEyes = document.querySelector('.wizard-eyes');
var inputWizardEyes = document.querySelector('input[name="eyes-color"]');


var setColor = function (domElement, domElementProperty, colors, inputElement) {
    var color = window.utils.getRandomElement(colors); // берем случайный цвет из полученного диапазона
    domElement.style[domElementProperty] = color; // меняем цвет заданного элемента на сгенерированный
    inputElement.value = color; // обновляем значение соответствующего инпута
};

setupFireball.addEventListener('click', function () {
    setColor(setupFireball, 'background', window.utils.fireballColors, inputFireball);
});

setupWizardCoat.addEventListener('click', function() {
   setColor(setupWizardCoat, 'fill', window.utils.coatColors, inputWizardCoat);
});

setupWizardEyes.addEventListener('click', function() {
    setColor(setupWizardEyes, 'fill', window.utils.coatColors, inputWizardEyes);
});

