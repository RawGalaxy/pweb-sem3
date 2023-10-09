function clearIt()
{
  console.log("cleared");
  document.getElementById('result').value = "";
}
function display(value)
{
  console.log("added");
  document.getElementById('result').value += value;
}
function calculate()
{
  console.log("calculated");
  let a = document.getElementById('result').value;
  let b = eval(a);
  document.getElementById('result').value = b;
}