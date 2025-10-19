import { linearSearchIndex } from '@/linear-search'
import { describe, expect, it } from 'vitest'

describe('[LINEAR_SEARCH]', () => {
  it('should be able to find an item in the middle of an array', () => {
    const value = linearSearchIndex([1, 2, 3, 4, 5], 3)

    expect(value).toEqual(2)
  })

  it('should be able to find the first item in an array', () => {
    const value = linearSearchIndex([1, 2, 93, 4, 5], 1)

    expect(value).toEqual(0)
  })

  it('should  be able to find the last item in an array', () => {
    const value = linearSearchIndex([1, 2, 3, 4, 5], 5)

    expect(value).toEqual(4)
  })

  it('should return a falsy value when target not in the array', () => {
    const value = linearSearchIndex([1, 2, 3, 4, 5], 11)

    expect(value).toEqual(-1)
  })

  it('should return a falsy value when the array is empty', () => {
    const value = linearSearchIndex([], 11)

    expect(value).toEqual(-1)
  })

  it('should work on a large array', () => {
    const value = linearSearchIndex(
      [
        1, 2, 3, 4, 5, 22, 9, 90, 23, 33, 41, 42, 43, 54, 65, 11, 83, 54, 24, 91
      ],
      11
    )

    expect(value).toEqual(15)
  })
})
