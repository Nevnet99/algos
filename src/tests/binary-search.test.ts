import { binarySearchIndex } from '@/binary-search'
import { describe, expect, it } from 'vitest'

describe('[BINARY_SEARCH]', () => {
  it('should be able to find an item in the middle of an array', () => {
    const value = binarySearchIndex([1, 2, 3, 4, 5], 3)

    expect(value).toEqual(2)
  })

  it('should be able to find the first item in an array', () => {
    const value = binarySearchIndex([1, 2, 93, 4, 5], 1)

    expect(value).toEqual(0)
  })

  it('should  be able to find the last item in an array', () => {
    const value = binarySearchIndex([1, 2, 3, 4, 5], 5)

    expect(value).toEqual(4)
  })

  it('should return a falsy value when target not in the array', () => {
    const value = binarySearchIndex([1, 2, 3, 4, 5], 11)

    expect(value).toEqual(-1)
  })

  it('should return a falsy value when the array is empty', () => {
    const value = binarySearchIndex([], 11)

    expect(value).toEqual(-1)
  })

  it('should work on a large array', () => {
    const value = binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11)

    expect(value).toEqual(10)
  })
})
