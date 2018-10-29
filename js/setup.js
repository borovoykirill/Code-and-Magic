var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
   setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
    setup.classList.add('hidden')
});

// Использую шаблонизацию для создания списка похожих игроков
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var WIZARD_NAMES = [
  'Damboldor',
  'Varian',
  'Artas',
  'Legolas'
];

var wizards = [
    {
        name: WIZARD_NAMES[0],
        coatColor: 'rgb(241, 43, 107)',
        eyesColor: 'red'
    },
    {
        name: WIZARD_NAMES[1],
        coatColor: 'rgb(215, 210, 55)',
        eyesColor: 'black'
    },
    {
        name: WIZARD_NAMES[2],
        coatColor: 'rgb(101, 137, 164)',
        eyesColor: 'yellow'
    },
    {
        name: WIZARD_NAMES[3],
        coatColor: 'rgb(127, 127, 127)',
        eyesColor: 'blue'
    }
];

for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
}




// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

// var firstNames = [
//     'Kirill',
//     'Max',
//     'Sanya'
// ];
//
// var secondNames = [
//     'Kudosh',
//     'Borovoy',
//     'Shelest'
// ];


// var randNames = Math.floor(Math.random() * firstNames.length);
//
//
// var randSurnames = Math.floor(Math.random() * secondNames.length);
//
// var nicknames = function () {
//     var test = [];
//
//     for (var i = 0; i <= 4; i++) {
//        test[i] = firstNames[randNames] + ' ' + secondNames[randSurnames];
//        alert(test[i]);
//     }
// };
//
// nicknames();