const throttle = (func, delay = 300) => {
  let prev = +new Date()
  return function(...args) {
  let now = +new Date()
    if(now - prev < delay) return
    prev = now
    func.apply(this,args)
  }
}

export default throttle