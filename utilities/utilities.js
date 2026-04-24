let operator = 'addition';
function getValueByInnerText(id) {
   const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value); 
    return convertedValue;
}
function getConvertedValueByInput(id) {
   const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value); 
    return convertedValue;
}
function getValueByInput(id) {
   const value = document.getElementById(id).value;
    return value;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
