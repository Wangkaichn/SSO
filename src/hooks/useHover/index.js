/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const useHover = (ref, callback) => {
  const [target, setTarget] = useState(null)
  const [isCleanCallback, setIsCleanCallback] = useState(false)
  const [builtInCallback, setBuiltInCallBack] = useState(() => callback)
  useEffect(() => {
    setTarget(ref.current)
  }, [ref])
  useEffect(() => {
    if (!target) {
      return
    }
    target.onmouseenter = builtInCallback
    return () => {
      target.onmouseenter = null
    }
  }, [target, builtInCallback])
  useEffect(() => {
    if (!target) {
      return
    }
    if (isCleanCallback) {
      target.onmouseenter = null
    } else if (!target.onmouseenter) {
      target.onmouseenter = builtInCallback
      return () => {
        target.onmouseenter = null
      }
    }
  }, [isCleanCallback])
  useEffect(() => {
    if (!target || isCleanCallback) {
      return
    }
    target.onmouseenter = builtInCallback
    return () => {
      target.onmouseenter = null
    }
  }, [builtInCallback])
  return [setIsCleanCallback, setBuiltInCallBack]
}

export default useHover