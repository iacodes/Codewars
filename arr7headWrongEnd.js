function fixTheMeerkat(arr) {
  let array = arr
  array[0], array[array.length -1] = array[array.length -1], array[0]
  return array
}
