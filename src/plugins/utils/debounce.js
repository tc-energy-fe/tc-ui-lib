const debounce = function (fn, delay = 1000, immediate = false) {
  let timer = null
  let once = immediate
  let prev = new Date().getTime()

  const _debounce = function (...args) {
    let now = new Date().getTime()
    if (timer !== null) {
      clearTimeout(timer)
    }

    if (now - prev >= delay) once = true
    if (immediate && once) {
      fn.apply(this, args)
      timer = null
      once = false
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }

    prev = now
  }

  _debounce.cancel = function () {
    clearTimeout(timer)
    timer = null
  }

  return _debounce
}

/**
 * eg:
 *
 * <input oninput="func(event)"/>
 *
 * var func = debounce(function(event) {
 *   console.log(this, event.target.value)
 * }, 500)
 * */

export default debounce
