let displayValue=' ';

function appendCharacter(char){
    displayValue+=char;
    document.getElementById('display').value=displayValue;
}

function clearDisplay(){
    displayValue= ' ';
    document.getElementById('display').value=' ';
}

function deleteLast(){
    displayValue=displayValue.slice(0,-1);
    document.getElementById('display').value=displayValue;
}


function calculate(){
    try{
        const result=eval(displayValue);
        document.getElementById('display').value=result;
        displayValue=result.toString();
    }
    catch(error){
        document.getElementById('display').value='Error';
        displayValue=' ';
    }
}