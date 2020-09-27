type SelectSortType = (array: Array<number>) => number[]
type FindIndexCallbackType = (i: number) => boolean

const SelectSort: SelectSortType = (array) => {
  const len = array.length
  for (let i = len - 1; i > -1; i--) {
    const OthersMax = Math.max(...array.slice(0, i))
    if (OthersMax > array[i]) {
      const callback: FindIndexCallbackType = i => i === OthersMax
      const IndexMax = array.findIndex(callback) as number
      [array[i], array[IndexMax]] = [array[IndexMax], array[i]]
    }
  }
  return array
}

export default SelectSort