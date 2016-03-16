var censor = require('censorify');
console.log(censor.getCensoredWords());
console.log(censor.censor(("Some very sad,bad, mad day")));

censor.addCensordWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A gloomy day."));