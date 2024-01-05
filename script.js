document.getElementById('triangle-btn').addEventListener('click', function () {
  const b = getInputValueById('b');
  const h = getInputValueById('h');
  const elementValue = getElementValueById('trianglee');
  const result = calculate(b, h);
  const area = 0.5 * result;
  const innerArea = area + elementValue;
  setValue('trianglee', innerArea);
  areaEntry('Triaggle', area);
});
document.getElementById('rectangle-btn').addEventListener('click', function () {
  const w = getInputValueById('w');
  const l = getInputValueById('l');
  const elementValue = getElementValueById('rectangle');
  const result = calculate(w, l);
  const area = result;
  const innerArea = area + elementValue;
  setValue('rectangle', innerArea);
  areaEntry('Rectaggle', area);
});
document
  .getElementById('parallelogram-btn')
  .addEventListener('click', function () {
    const b = getInputValueById('bp');
    const h = getInputValueById('hp');
    const elementValue = getElementValueById('parallelogram');
    const result = calculate(b, h);
    const area = result;
    const innerArea = area + elementValue;
    setValue('parallelogram', innerArea);
    areaEntry('Parallelogram', area);
  });
