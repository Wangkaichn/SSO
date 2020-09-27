import { useEffect, useState } from 'react'
import styles from './index.module.scss'

const handleMove = (event, target, initDistance = 2) => {
  const left = event.clientX - initDistance
  const top = event.clientY - initDistance
  target.style.left = left + 'px'
  target.style.top = top + 'px'
}

// 用于将子组件拖动
const useMove = (ref) => {
  const [target, setTarget] = useState(null)
  useEffect(() => {
    setTarget(ref.current)
  }, [ref])
  const hanleMouseDown = (event) => {
    target.className += ' ' + styles.mouseDown
    handleMove(event, target)
    document.onmousemove = (event) => handleMove(event, target)
    document.onmouseup = handleMouseUp
  }
  const handleMouseUp = () => {
    document.onmouseup = null
    document.onmousemove = null
    const className = target.className.split(' ')
    const index = className.findIndex(i => i === styles.mouseDown)
    if (index >= 0) {
      className.splice(index, 1)
      target.className = className.join(' ')
    }
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!target) {
      return
    }
    target.onmousedown = hanleMouseDown
    return () => {
      target.onmousedown = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])
}

export default useMove
