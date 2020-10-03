function isPalindrome(str) {
  str = str.toLowerCase()

  const strArr = str.split('')
  const strLen = str.length
  
  const strHalfLen = Math.floor(strLen / 2)
  let strIndex
  for (strIndex = 0; strIndex < strHalfLen && strArr[strIndex] === strArr[strLen - strIndex - 1]; strIndex++);

  return strIndex === strHalfLen
}

function isCorrect(f, tests) {
  for (test of tests) {
    console.log('---------------------------------------------')

    const fResult = f(test.input)
    if (fResult === test.output) {
      console.log(`DONE ( input: ${test.input} | output: ${test.output} | result: ${fResult} )`)
    } else {
      console.log('\n+++++++++++++++++++++++++++++++++++++++++++++')
      console.log(`ERROR ( input: ${test.input} | output: ${test.output} | result: ${fResult} )`)

      return false;
    }
  }

  console.log('\n+++++++++++++++++++++++++++++++++++++++++++++')
  console.log('DONE')

  return true
}

const tests = [
  { input: '123', output: false },
  { input: '1233', output: false },
  { input: '1', output: true},
  { input: '', output: true},
  { input: 'aavvAa', output: true},
  { input: '11qq3qq11', output: true}
]

isCorrect(isPalindrome, tests)

/*

// isCorrect() example:

function f(n) {
  if (n === 5978463241) {
    return 'not support this number'
  }

  return n + 1
}

isCorrect(f, [
  { input: 1, output: 2 },
  { input: 5978463241, output: 5978463242 },
  { input: -2, output: -1 }
])

*/
