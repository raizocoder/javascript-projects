let field = document.getElementById('field');

function display(num){
field.value += num;
}

function equalsTo(){
    field.value = eval(field.value);
}
function allClear(){
    field.value = "";
}
function deleteValue(){
     field.value = field.value.slice(0,-1);
}