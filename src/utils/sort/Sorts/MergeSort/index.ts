type SplitType = (left: Array<number>, right: Array<number>) => number[]
type Type = (a: Array<number>) => number[]

const Split: SplitType = (left, right) => {
  const result = []
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  if (left.length) {
    result.push(...left)
  } else {
    result.push(...right)
  }
  return result as number[]
}
const Merge: Type = (array) => {
  const len = array.length
  if (len <= 1) {
    return array
  } else if (len === 2) {
    if (array[0] > array[1]) {
      array = array.reverse()
    }
    return array
  }
  const middle = Math.floor(len / 2)
  // 向下递归拆分, 对最小长度数组进行排序
  const left = Merge(array.slice(0, middle))
  const right = Merge(array.slice(middle, len))
  // 向上递归合并, 对合并的数组进行归并排序
  return Split(left, right)
}
const MergeSort: Type = (array) => {
  return Merge(array)
}
export default MergeSort