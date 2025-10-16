// const myFriend = "Victory"
// console.log(showMyFriend.innerHTML);
// showMyFriend.innerHTML = myFriend

// console.log (firstnumber.value);
const multiply = () => {
    console.log(firstNumber.value)
    console.log(secondNumber.value)
    const answer = firstNumber.value * secondNumber.value
    console.log(answer)
    showResult.innerHTML = answer
}
const add = () => {
    console.log(firstNumber.value)
    console.log(secondNumber.value)
    const answer =   (Number(firstNumber.value) + Number(secondNumber.value))
    console.log(answer)
    showResult.innerHTML = answer
}
const subtract = () => {
    console.log(firstNumber.value)
    console.log(secondNumber.value)
    const answer = firstNumber.value - secondNumber.value
    console.log(answer)
    showResult.innerHTML = answer
}
const divide = () => {
    console.log(firstNumber.value)
    console.log(secondNumber.value)
    const answer = firstNumber.value / secondNumber.value
    console.log(answer)
    showResult.innerHTML = answer
}