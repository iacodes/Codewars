/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

function switcher(x){
  let conversion = {
    "26":"a",
    "25":"b",
    "24":"c",
    "23":"d",
    "22":"e",
    "21":"f",
    "20":"g",
    "19":"h",
    "18":"i",
    "17":"j",
    "16":"k",
    "15":"l",
    "14":"m",
    "13":"n",
    "12":"o",
    "11":"p",
    "10":"q",
    "9":"r",
    "8":"s",
    "7":"t",
    "6":"u",
    "5":"v",
    "4":"w",
    "3":"x",
    "2":"y",
    "1":"z",
    "27":"!",
    "28":"?",
    "29":" "
  }
  return x.map(item => conversion[item]).join("")
}

/*
Other solutions
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')


More solutions
function switcher(x)
{
  return x.map(a =>
    {
      if(a == 27) return "!";
      if(a == 28) return "?";
      if(a == 29) return " ";
      return String.fromCharCode(97 + 26 - parseInt(a));

    }).join('');
}


More solutions

z = {
  '1': 'z',
  '2': 'y',
  '3': 'x',
  '4': 'w',
  '5': 'v',
  '6': 'u',
  '7': 't',
  '8': 's',
  '9': 'r',
  '10':'q',
  '11':'p',
  '12':'o',
  '13':'n',
  '14':'m',
  '15':'l',
  '16':'k',
  '17':'j',
  '18':'i',
  '19':'h',
  '20':'g',
  '21':'f',
  '22':'e',
  '23':'d',
  '24':'c',
  '25':'b',
  '26':'a',
  '27':'!',
  '28':'?',
  '29':' '
}

function switcher(x){
  return x.map(_=>z[_]).join('')
}
*/
