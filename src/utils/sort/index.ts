import { useEffect, useState } from 'react'
import BubbleSort from './Sorts/BubbleSort'
import SelectSort from './Sorts/SelectSort'
import InsertSort from './Sorts/InsertSort'
import MergeSort from './Sorts/MergeSort'
import QuickSort from './Sorts/QuickSort'
import CalcNumSort, { BetterCalcNumSort } from './Sorts/CalcNumSort'
import BucketSort from './Sorts/BucketSort'

const SortType = {
  BubbleType: Symbol(),
  SelectType: Symbol(),
  InsertType: Symbol(),
  MergeType: Symbol(),
  QuickType: Symbol(),
  CalcNumType: Symbol(),
  BetterCalcNumType: Symbol(),
  BucketType: Symbol(),
}
const AllSorts = {
  [SortType.BubbleType]: BubbleSort,
  [SortType.SelectType]: SelectSort,
  [SortType.InsertType]: InsertSort,
  [SortType.MergeType]: MergeSort,
  [SortType.QuickType]: QuickSort,
  [SortType.CalcNumType]: CalcNumSort,
  [SortType.BetterCalcNumType]: BetterCalcNumSort,
  [SortType.BucketType]: BucketSort,
}

type SortType = (array: Array<number>, type: keyof SortType) => [number[]]
const Sort: SortType = (array, type) => {
  const [result, setResult] = useState([-1])
  useEffect(() => {
    setResult(AllSorts[type](array))
  }, [])
  return [result]
}


export default Sort
export { SortType }