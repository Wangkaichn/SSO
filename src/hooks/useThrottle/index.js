import { useEffect, useState } from 'react'

const useThrottle = (callback, delay, ...arg) => {
  const [flag, setFlag] = useState(0)
  const effect = function () {
    if (flag) {
      clearTimeout(flag)
      setFlag(0)
    }
    const f = setTimeout((v) => {
      callback(...v)
    }, delay, arg)
    setFlag(f)
  }
  useEffect(effect, [])

  return {

  }
}