/*
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'


"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
// implement fix function ->
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
*/

function unmix(str){
  let arr = str.split("")

  let dict = {
    '0':'O',
    'O':'0',
    '5':'S',
    'S':'5',
    '1':'I',
    'I':'1',
    '6':'G',
    'G':'6',
    '2':'Z',
    '2':'Z',
    '7':'L',
    'L':'7',
    '3':'E',
    'E':'3',  
    '8':'B',
    'B':'8',
    '4':'h',
    'h':'4',
    '9':'q',
    'q':'9'
  }

  return arr.map(x => {
    return x in dict ? dict[x] : x
  }).join("")
}
