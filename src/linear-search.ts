export const linearSearchIndex = (arr: number[], target: number) => {
  let result = -1

  for (const [index, item] of arr.entries()) {
    if (target === item) {
      result = index
    }
  }

  return result
}
