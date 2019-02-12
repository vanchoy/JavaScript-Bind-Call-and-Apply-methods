var ivan = {
    name: 'Ivan',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m '+ this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } 
        else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

ivan.presentation('formal', 'morning');


var lily = {
    name: 'Lily',
    age: 35,
    job: 'designer'
};


ivan.presentation.call(lily, 'friendly', 'afternoon');

ivan.presentation.apply(lily, ['friendly', 'afternoon']);

var ivanFriendly = ivan.presentation.bind(ivan, 'friendly');
ivanFriendly('morning');
ivanFriendly('night');

var lilyFormal = ivan.presentation.bind(lily, 'formal');
lilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
