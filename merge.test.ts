import merge from "./merge"

describe('Merge function',()=>{
  it('this merge function should return result of sorted array',()=>{
    const array1 = [1,5,9,11]
    const array2 = [3,7,15,19]
    const mergeResult = merge(array1,array2)
    expect(mergeResult).toEqual([1,3,5,7,9,11,15,19])
  })
  it('this merge function should return result of sorted array',()=>{
    const array1 = [2,4,6,8]
    const array2 = [3,4,5,8]
    const mergeResult = merge(array1,array2)
    expect(mergeResult).toEqual([2,3,4,4,5,6,8,8])
  })
  it('this merge function should return result of sorted array',()=>{
    const array1 = [10,18,30,45]
    const array2 = [3,20,25,38]
    const mergeResult = merge(array1,array2)
    expect(mergeResult).toEqual([3,10,18,20,25,30,38,45])
  })
})