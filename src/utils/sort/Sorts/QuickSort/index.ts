type QuickSortType = (array: Array<number>) => number[]

// 取一个中间值 middle , 然后把 <= middle 的元素归到 left , > middle 的元素归到 right
// 递归
const QuickSort: QuickSortType = (array) => {
  const len = array.length
  if (len <= 1) {
    return array
  } else if (len === 2) {
    if (array[0] > array[1]) {
      array = array.reverse()
    }
    return array
  }
  const middleIndex = Math.floor(len / 2)
  const middle = array[middleIndex]
  array.splice(middleIndex, 1)
  const left = array.filter(i => i <= middle)
  const right = array.filter(i => i > middle)
  return QuickSort(left).concat([middle], QuickSort(right))
}

export default QuickSort