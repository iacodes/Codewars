/*
Fix the following function
function buildString(...template){
  return `I like #{template.join(',')}!`;
}
*/


function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
