const input = parseInt(document.getElementById(input));
const button = document.getElementById(btn);
const outPut = document.getElementById(output);


if(input > 0){
    button.addEventListener('click', function (e) {
        e.preventDefault();
        addNumbers(add);
    });
}
   
function addNumbers(add){
    outPut = input + input;
    displayAns(add);
}

function displayAns(add){
    outPut.(output)
}
displayAns(add);

