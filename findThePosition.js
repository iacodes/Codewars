//When provided with a letter, return its position in the alphabet.

function position(letter){
 let alphabet = {
   a:1,
   b:2,
   c:3,
   d:4,
   e:5,
   f:6,
   g:7,
   h:8,
   i:9,
   j:10,
   k:11,
   l:12,
   m:13,
   n:14,
   o:15,
   p:16,
   q:17,
   r:18,
   s:19,
   t:20,
   u:21,
   v:22,
   w:23,
   x:24,
   y:25,
   z:26
 }
 return `Position of alphabet: ${alphabet[letter]}`
}


/*
Other solutions
function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}


function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

function position(c) {
  return 'Position of alphabet: ' + (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
}
*/
