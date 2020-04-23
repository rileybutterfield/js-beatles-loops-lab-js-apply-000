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
  let result = []
  let i = 0
  while(i < factsArr.length){
    let oneFact = factsArr[i]
    oneFact += "!!!"
    i++
    result.push(oneFact)
  }
  return result
}