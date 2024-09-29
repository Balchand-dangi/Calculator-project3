
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


const historyButton = document.getElementById('historyButton');
const historyBox = document.getElementById('historyBox');

historyButton.addEventListener('click', function() {
    if (historyBox.style.opacity === "0"  ) {
        historyBox.style.display = "block"; 
        setTimeout(() => {
            historyBox.style.opacity = '1'; 
            historyBox.style.visibility = "visible"; 
        }, 100);  
    } else {
        historyBox.style.opacity = "0";  
        historyBox.style.visibility = "hidden";  
        setTimeout(() => {
            historyBox.style.display = "none";  
        }, 100);  
    }
});

const cross = document.getElementById('cross');
cross.addEventListener('click', function() {
    historyBox.style.opacity = "0"; 
    historyBox.style.visibility = "hidden";  
    setTimeout(() => {
        historyBox.style.display = "none";  
    }, 100);  
});

const historyList = document.getElementById('historyList'); 

function calculate() {
    const element = document.getElementById('outputBox');
    try {
        const result = eval(element.textContent);
        const historyItem = `${element.textContent} = ${result}`; 
        element.textContent = result; // Update the output box with the result

        // Add the history entry to the history list
        const historyEntry = document.createElement('div');
        historyEntry.textContent = historyItem;
        historyList.appendChild(historyEntry);
    } catch (e) {
        element.textContent = 'Error';
    }
}

