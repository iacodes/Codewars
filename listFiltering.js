//create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter(x => typeof(x)=="number") //fixed error where missing return, thus undefined previously during function call
}
