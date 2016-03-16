var censoredWords = ["sad",'bad'];
var customCensoredWorkds = [];

function censor(inStr){
    for (idx in inStr){
        inStr = inStr.replace(censoredWords[idx],"***");
    }
    for(idx in inStr){
        inStr = inStr.replace(customCensoredWorkds[idx],"***");
    }
    return inStr;
}
function addCensoredWord(word){
    return censoredWords.push(word)
}

function getCennsoredWords(){
    return censoredWords.concat(customCensoredWorkds);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord();
exports.getCennsoredWords = getCennsoredWords();