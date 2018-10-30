// Здесь храним данные для генерации и вспомогательную функцию выборки случайного элемента

(function () {
    window.utils = {
        countWizards: 4,
        names: ['Ksardas', 'David', 'David', 'Mediv', 'Kadgar', 'Ilidan', 'Antoniadas', 'Keltas'],
        surnames: ['Goticheskiy', 'Blaine', 'Kopirfild', 'Shtormwind', 'Stormrage', 'Dalaranskiy', 'Solnechniy'],
        coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
        fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
        ESC_KEYCODE: 27,
        ENTER_KEYCODE: 13,
        getRandomElement: function (array) {
            var index = Math.floor(array.length * Math.random());
            return array[index];
        }
    };
})();
