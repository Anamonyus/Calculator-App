function getMultiply()
{
    digit1get = document.getElementById("digit1").value;
    digit2get = document.getElementById("digit2").value;
    var value1 = parseInt(digit1get);
    var value2 = parseInt(digit2get);
    var end_result = value1 * value2;
    document.getElementById("result").value = end_result;
    
}

function getAdd()
{
    number1get = document.getElementById("number1").value;
    number2get = document.getElementById("number2").value;
    var value_add1 = parseInt(number1get);
    var value_add2 = parseInt(number2get);
    var ender_result = value_add1 + value_add2;
    document.getElementById("end_sum").value = ender_result;
    
}