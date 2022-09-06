/*
Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff
*/

function heavyMetalUmlauts(boringText) {
  let conversion = {
    "A":"\u00c4",
    "O":"\u00d6",
    "a":"\u00e4",
    "o":"\u00f6",
    "E":"\u00cb",
    "U":"\u00dc",
    "e":"\u00eb",
    "u":"\u00fc",
    "I":"\u00cf",
    "Y":"\u0178",
    "i":"\u00ef",
    "y":"\u00ff"

    /*
    "A":"Ä",
    "O":"Ö",
    "a":"ä",
    "o":"ö",
    "E":"Ë",
    "U":"Ü",
    "e":"ë",
    "u":"ü",
    "I":"Ï",
    "Y":"Ÿ",
    "i":"ï",
    "y":"ÿ"
    */
  }

    return boringText.split("").map(x => conversion[x] !== undefined ? conversion[x] : x ).join("");
}


/*
Other solutions

function heavyMetalUmlauts(boringText) {
  var dict = {
    'A' : 'Ä',    'E' : 'Ë',    'I' : 'Ï',
    'O' : 'Ö',    'U' : 'Ü',    'Y' : 'Ÿ',
    'a' : 'ä',    'e' : 'ë',    'i' : 'ï',
    'o' : 'ö',    'u' : 'ü',    'y' : 'ÿ'
  }

  return boringText.replace(/[AEIOUYaeiouy]/g, r => dict[r] || "");

}

*/
