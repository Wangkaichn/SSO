type BubbleSortType = (array: Array<number>) => number[]

const BubbleSort: BubbleSortType = (array) => {
  const len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= len - i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}


export default BubbleSort