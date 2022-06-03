function last(x){
 let arr = x.split(" ")
    console.log(`The words are ${arr}`)
    let reversed = []
 for (i = 0; i<arr.length; i++){
     console.log(arr[i])
     reversed.push(arr[i].split("").reverse().join(""))
     //console.log(`the reverse if ${arr}`)
 }
    reversed.sort( (a,b) => a-b)
    return arr
}
