function theBeatlesPlay(arrMusicians, arrInstruments) {
  var combinedArr = [];
  for (var i = 0; i < arrMusicians.length; i++) {
    var str = arrMusicians[i] + ' plays ' + arrInstruments[i]
    combinedArr.push(str)
  }
  return combinedArr;
}

function johnLennonFacts(arrFacts) {
  var excitedFacts = [];

  var i = 0;
  while (i < arrFacts.length) {
    var newStr = arrFacts[i] + '!!!'
    excitedFacts.push(newStr)
    i++
  }
  return excitedFacts
}
