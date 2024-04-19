//Escribir en pantalla
function addNumber(number) {
    let result = document.getElementById('result');
    result.innerHTML += number;
};

//Limpiar la pantalla
function limpiar() {
    let result = document.getElementById('result');
    result.innerHTML = '';

}

//Borrar un numero de pantalla
function clearOne() {
    let result = document.getElementById('result');
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
}

//Mostrar resultado de la operacion
function showResult() {
    let result = document.getElementById('result');
    if(result && result.innerHTML.trim() !== ''){
        let lastOperation = document.querySelector('.lastOperation');
        lastOperation.innerHTML = result.innerHTML;
        let record = lastOperation.innerHTML;
        result.innerHTML = eval(result.innerHTML);
        let finalResult = result.innerHTML;
        let operation = record + '=' + finalResult;
        saveInLocalStorage(operation);
        showRecord();
        
    } else{
        console.log('Es necesario ingresar una operacion')
    }

}

//Guardar una operacion en el almacenamiento local del navegador
function saveInLocalStorage(operation) {
    let operationsRecord = localStorage.getItem('record');
    let lastOperation = operation ; //lastOperation guarda la operacion pasada como parametro

    //Condicion que crea un nuevo historial si arrayRecord es false y añade una operacion si arrayRecord es true
    if (operationsRecord) {
        let arrayRecord = JSON.parse(operationsRecord);
        arrayRecord.push(lastOperation);
        localStorage.setItem('record', JSON.stringify(arrayRecord));

    } else {
        let arrayRecord = [lastOperation];
        localStorage.setItem('record', JSON.stringify(arrayRecord));
    }
}

//Mostrar historial
function showRecord() {
    let operationsRecord = localStorage.getItem('record');
    if (operationsRecord) {
        let arrayRecord = JSON.parse(operationsRecord);
        operation=arrayRecord[arrayRecord.length-1];
        let record = document.querySelector('#record');
        let text = document.createElement('p');
        text.textContent = JSON.stringify(operation);
        text.textContent = text.textContent.replace(/"/g, '');
        record.appendChild(text);
    }
}

// Limpiar historial
function clearRecord() {
    localStorage.clear();
    let operationsRecord = document.querySelector('#record');
    operationsRecord.innerHTML = '';
}