// add solution here
function theBeatlesPlay(musicians, instruments){
  let array = []
  for (let i = 0; i < musicians.length; i++){
    let player = musicians[i]
    let instrument = instruments[i]
    let string = `${player} plays ${instrument}`
    result.push(string)
  }
  return array
}

function johnLennonFacts(factsArr){
  let array = []
  let i = 0
  while(i < factsArr.length){
    let oneFact = factsArr[i]
    oneFact += "!!!"
    i++
    result.push(oneFact)
  }
  return array
}

function iLoveTheBeatles(num){
  let array = []
  let i = num
  do {
    result.push("I love the Beatles!")
    i++
  } while (i < 15)
  return array
}