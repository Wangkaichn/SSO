import QuickSort from '../QuickSort'

type CreateBucketsType = (array: Array<number>) => number[][]
type BucketSortType = (array: Array<number>) => number[]

const CreateBuckets: CreateBucketsType = (array, bucketSize = 5) => {
  const min = Math.min(...array)
  const max = Math.max(...array)
  // 根据每桶的元素数量 bucketSize , 计算桶的数量
  const bucketCount = Math.floor(((max - min) / bucketSize) + 1)
  // 生成所有可能会用到的桶
  const buckets = new Array(bucketCount).fill(0).map(_ => []) as number[][]
  // 将元素插入桶中
  array.forEach(i => {
    const bucketIndex = Math.floor(((i - min) / bucketSize))
    buckets[bucketIndex].push(i)
  })
  return buckets
}

const BucketSort: BucketSortType = (array) => {
  // 将元素归到不同的桶中
  const buckets = CreateBuckets(array)
  // 对每个桶进行排序, 然后打平
  return buckets.map(QuickSort).flat()
}

export default BucketSort