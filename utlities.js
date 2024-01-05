function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValuString = inputField.value;
  const inputValue = parseFloat(inputFieldValuString);
  inputField.value = '';
  if (isNaN(inputValue) || inputValue < 0) {
    alert('Plese Enter Number');
    return;
  } else {
    return inputValue;
  }
}
function getElementValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementFieldValueString = elementField.innerText;
  const elementValue = parseFloat(elementFieldValueString);
  return elementValue;
}
function calculate(a, b) {
  const result = a * b;
  const finallResult = result;
  return finallResult;
}
function setValue(setId, setValue) {
  const setinner = document.getElementById(setId);
  setinner.innerText = setValue;
  if (isNaN(setinner.innerText)) {
    setinner.innerText = 0;
  }
}
function areaEntry(Id, result) {
  if (isNaN(result)) {
    return;
  }
  const area = document.getElementById('area-entry');
  const count = area.childElementCount;
  const p = document.createElement('p');
  p.innerHTML = `<h2 class="text-2xl font-semibold">${count}. ${Id} ${result}cm<sup>2</sup> <button class="btn btn-primary btn-sm">Converte</button></h2>`;
  area.appendChild(p);
}
