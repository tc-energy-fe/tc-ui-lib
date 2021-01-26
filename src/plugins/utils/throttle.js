const throttle = function (fn, delay = 1000, immediate = false) {
  let timer = null
  let prev = new Date().getTime()

  const _throttle = function (...args) {
    let now = new Date().getTime()

    if (!timer) {
      if (!immediate) {
        timer = setTimeout(() => {
          fn.apply(this, args)
          timer = null
        }, delay)
      } else if (now - prev >= delay) {
        fn.apply(this, args)
        timer = null
        prev = now
      }
    }
  }

  _throttle.cancel = function () {
    clearTimeout(timer)
    timer = null
  }

  return _throttle
}

export default throttle
