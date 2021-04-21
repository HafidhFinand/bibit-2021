function searchAnagram(arr) {
  const anagram = {}
  const anagrams = []

  for (let i = 0; i < arr.length - 1; i++) {
    const sortedWord = arr[i].split("").sort().join("")
    if (!anagram[sortedWord]) {
      anagram[sortedWord] = [arr[i]]
    } else {
      anagram[sortedWord].push(arr[i])
    }
  }

  for (const words in anagram) {
    anagrams.push(anagram[words])
  }

  return anagrams
}


searchAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'])