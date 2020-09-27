type CalcNumSortType = (array: Array<number>) => number[]

// 将需排序数组的元素当作索引值, 开辟一个新数组, 去存储对应的出现次数
// 遍历新数组, 其元素即为当前索引值的出现次数
// 加减 min , 是为了兼容负数
const CalcNumSort: CalcNumSortType = (array) => {
  const min = Math.min(...array)
  // 负数转变为整数
  if (min < 0) {
    array = array.map(i => i + -min)
  }
  const max = Math.max(...array)
  // +1 是为了包括最大值自身的索引值
  // 普通计数排序需要开辟一个很长的数组, 去存储出现次数
  // 优化一下, max - min + 1 作为数组的长度, 当然对应元素也需要进行操作
  const temporary = new Array(max + 1).fill(0)
  array.forEach(i => temporary[i]++)
  const result = [] as unknown as number[]
  temporary.forEach((cur, index) => {
    if (cur === 0) {
      return
    }
    for (let i = 0; i < cur; i++) {
      result.push(min < 0 ? index + min : index)
    }
  })
  return result
}

const BetterCalcNumSort: CalcNumSortType = (array) => {
  const min = Math.min(...array)
  // 负数转变为整数
  if (min < 0) {
    array = array.map(i => i + -min)
  }
  const max = Math.max(...array)
  // +1 是为了包括最大值自身的索引值
  // 普通计数排序需要开辟一个很长的数组, 去存储出现次数
  // 优化一下, max - min + 1 作为数组的长度, 当然对应元素也需要进行操作

  // 优化之后, 还是有一些问题
  // 1. 对于 max 与 min 之差很大的情况, 比如 [0, 100000] , 其时间复杂度会很大
  const curMin = Math.min(...array)
  const special = max - curMin
  array = array.map(i => i - curMin)

  const temporary = new Array(special + 1).fill(0)
  array.forEach(i => temporary[i]++)
  const result = [] as unknown as number[]
  temporary.forEach((cur, index) => {
    if (cur === 0) {
      return
    }
    for (let i = 0; i < cur; i++) {
      result.push(min < 0 ? index + min + curMin : index + curMin)
    }
  })
  return result
}

export default CalcNumSort
export { BetterCalcNumSort }