

/*
Attempts
async function execute(action, nTimes){
  let result = []
  for(let i = 0; i < nTimes; i++){
    //result.push()
    Promise.all(await action())
  }
}

*/

async function execute(action, nTimes){
  let result = []
  for(let i = 0; i < nTimes; i++){
    result.push(action())
  }
  await Promise.all(result)
}


/*ALternative solutions


async function execute(action, nTimes){
  const arr = [];
  for(let i = 0; i < nTimes; i++){
    arr.push(action());
  }
  await Promise.all(arr);
}



async function execute(action, nTimes){
  for(let i = 0; i < nTimes-1; i++){
    action();
  }
  await action();
}

function execute(action, n) {
  return Promise.all(Array.from({ length: n }, action));
}
*/
