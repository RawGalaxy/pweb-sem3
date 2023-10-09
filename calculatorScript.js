function getNumbers() {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  return { firstNumber, secondNumber };
}
function addition()
{
  let {firstNumber, secondNumber} = getNumbers();
  console.log(firstNumber + secondNumber);
  document.getElementById("result").innerHTML = firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
function subtraction()
{
  let {firstNumber, secondNumber} = getNumbers();
  console.log(firstNumber - secondNumber);
  document.getElementById("result").innerHTML = firstNumber - secondNumber;
  return firstNumber - secondNumber;
}
function multiplication()
{
  let {firstNumber, secondNumber} = getNumbers();
  console.log(firstNumber * secondNumber);
  document.getElementById("result").innerHTML = firstNumber * secondNumber;
  return firstNumber * secondNumber;
}
function divition()
{
  let {firstNumber, secondNumber} = getNumbers();
  console.log(firstNumber / secondNumber);
  document.getElementById("result").innerHTML = firstNumber / secondNumber;
  return firstNumber / secondNumber;
}
function print()
{
  
}