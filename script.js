
function appendToOutput(value) {
    const outputBox = document.getElementById('outputBox');
    if (outputBox.textContent === '0') {
        outputBox.textContent = value;
    } else {
        outputBox.textContent += value;
    }
}

function clearOutput(){
    document.getElementById('outputBox').textContent = '0';
}

function backSpace(){
    const outputBox = document.getElementById('outputBox');
    if(outputBox.textContent.length > 1){
        outputBox.textContent = outputBox.textContent.slice(0,-1);
    }else{
        outputBox.textContent = '0';
    }
}

function calculate(){
    const element = document.getElementById('outputBox');
    try{
        element.textContent = eval(element.textContent);
    } catch(e){
        element.textContent = 'Error';
    }
}