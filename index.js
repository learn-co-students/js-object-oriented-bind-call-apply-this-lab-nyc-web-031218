function justInvoke(myfunc) {
  return myfunc()
}
function setThisWithCall(myfunc, name, age) {
  return myfunc.call(name, age)
}
function setThisWithApply(myfunc, name, args) {
  return myfunc.apply(name, args)
}
function returnNewFunctionOf(myfunc, name) {
  return myfunc.bind(name)
}
