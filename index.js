function justInvoke(func){
  return func()
}

function setThisWithCall(func, thisValue, arg){
  return func.call(thisValue, arg)
}

function setThisWithApply(func, thisValue, arg){
  return func.apply(thisValue, arg)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}
