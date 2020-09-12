// 此方法旨在复习节流 \ 防抖函数, 实际场景使用 lodash 实现

function debounce (callback, delay, ...arg) {
  console.info('debounce')
  let flag
  return function () {
    if (flag) {
      clearTimeout(flag)
      flag = undefined
    }
    flag = setTimeout((v) => {
      callback(...v)
    }, delay, arg)
  }
}

function throttle (callback, delay, ...arg) {
  console.info('throttle')
  let flag
  return function () {
    if (!flag) {
      flag = setTimeout((v) => {
        callback(...v)
        clearTimeout(flag)
        flag = undefined
      }, delay, arg)
    }
  }
}


export default null
export {
  throttle,
  debounce
}