type InsertSortType = (array: Array<number>) => number[]

const InsertSort: InsertSortType = (array) => {
  const hasSorted = array.splice(0, 2)
  if (hasSorted[0] > hasSorted[1]) {
    hasSorted.reverse()
  }
  while(array.length) {
    const cur = array.pop() as number
    const index = hasSorted.findIndex(i => i > cur)
    if (index === -1) {
      hasSorted.push(cur)
    } else {
      hasSorted.splice(index, 0, cur)
    }
  }
  return hasSorted
}

export default InsertSort