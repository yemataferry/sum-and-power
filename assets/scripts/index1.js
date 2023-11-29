function pow (x, y) {
  let sum = 1
  for (let i = 1; i <= y; i++){
    sum *= x
  }
  return (sum)
}

console.log(pow(4, 2))
console.log(pow(5, 3))
