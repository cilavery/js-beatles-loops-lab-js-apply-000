function theBeatlesPlay(arrMusicians, arrInstruments) {
  var combinedArr = [];
  for (var i = 0; i < arrMusicians.length; i++) {
    var str = arrMusicians[i] + ' plays ' + arrInstruments[i]
    combinedArr.push(str)
  }
  return combinedArr;
}
