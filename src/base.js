/* 公共函数 */

export default {
  install (Vue, options) {
    Vue.prototype.isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    Vue.prototype.Debounce = function (fn, t, context) {
      let delay = t || 500
      let cont = context || this
      let timer
      return function () {
        let args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          timer = null
          fn.apply(cont, args)
        }, delay)
      }
    }
    Vue.prototype.Throttle = (fn, t) => {
      let last
      let timer
      let interval = t || 500
      return function () {
        let args = arguments
        let now = +new Date()
        if (last && now - last < interval) {
          clearTimeout(timer)
          timer = setTimeout(() => {
            last = now
            fn.apply(this, args)
          }, interval)
        } else {
          last = now
          fn.apply(this, args)
        }
      }
    }
  }
}
// wrong
// exports.install = function (Vue, options) {
//
// }
