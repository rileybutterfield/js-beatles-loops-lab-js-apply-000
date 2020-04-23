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