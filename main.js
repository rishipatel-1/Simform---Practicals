function input_element() {
    input.value = " ";

}
memory_stack =[];
let z=w=1;
function equal() {

    input.value = eval(input.value);
}

function expression(value) {
    input.value += value;
}

function factorial() {
    let num = Number(input.value);
    if (num == 0 || num == 1) {
        input.value = "1";
    }
    else if (num > 1) {
        for (var i = num - 1; i > 1; i--) {
            num = num * i;
        }
        input.value = num;
    }
}
function cr() {
    document.getElementById('clear').disabled = false;
    document.getElementById('recall').disabled = false;
}



function expression_value(value) {
    
    switch (value) {
        case 'C': {
            input.value = "";
            break;
        }
        case '=': {
            if (input_value.value == "") {
                input_value.value = 0;
            }
            else {
                input_value.value = String(input_value.value).replaceAll("^", "**");
                input_value.value = String(input_value.value).replaceAll("mod", "%");
                if (input_value.value.includes('√')) {
                    yrtx();
                } else if (input_value.value.includes('ylog')) {

                    getBaseLog();
                }
                else {
                    calculate(input_value.value);
                }
            }
            break;
        }

        case 'x^2': {
            input.value = Math.pow(input.value, 2);
            break;
        }
        case 'square_root': {
            input.value = Math.sqrt(Number(input.value));
            break;
        }
        case 'x^3': {
            input_value.value = expo_val(Number(input_value.value), 3);
            break;
        }
        case 'backspace': {
            input.value = input.value.slice(0, -1);
            break;
        }
        case 'log': {
            input.value = Math.log10(input.value);
            break;
        }
        case 'lnx': {
            input.value = Math.log(input.value);

            break;
        }
        case 'power': {
            input.value = Math.pow(10, input.value);
            break;
        }
        case 'factorial': {
            factorial();
            break;
        }
        case 'open_bracket': {
            input.value += "(";
            break;
        }
        case 'close_bracket': {
            input.value += ")";
            break;
        }
        case 'exp': {

            input.value = Math.pow((Math.exp(1)), Number(input.value))
            break;
        }
        case '**': {

            input.value += value;
            break;
        }
        case 'sign_change': {

            input.value = (-1) * (input.value);
            break;
        }
        case 'memory_clear': {
            memory_stack = [];
            console.log(memory_stack);
           
            break;
        }
        case 'memory_recall': {
    

            input.value = memory_stack[memory_stack.length - 1].toString();
            break;
        }
        case 'memory_add': {

            cr()
            if (memory_stack.length == 1) {
                memory_stack.push(parseInt(input.value));
            }

            else {
                console.log("add")
                memory_stack[memory_stack.length - 1] += parseInt(input.value);
            }
            break;
        }
        case 'memory_sub': {

            cr()
            if (memory_stack.length == 0) {
                memory_stack.push((-1) * parseInt(input.value));
            }
            else {
                memory_stack[memory_stack.length - 1] -= parseInt(input.value);
            }
            break;
        }
        case 'memory_store': {

            cr()
            if (memory_stack.length == 0) {
                memory_stack.push(parseFloat(input.value));
            }

            else {
                console.log("add")
                memory_stack.push(parseFloat(input.value));
            }
            break;
        }

        case 'cbrt': {
            input_value.value = Math.cbrt(Number(input_value.value));
            break;
        }
        case 'sign': {
            change_sign();
            break;
        }
        case 'pi': {

            if (Number(input.value.substring(-1))) {
                input.value = Math.PI.toFixed(5);
            }
            else {
                input.value += Math.PI.toFixed(5);
            }

            break;
        }

        case '%': {
            input.value += value;
            break;
        }
        case 'modulus': {

            input.value = Math.abs(input.value);

            break;
        }
        case 'x_inverse': {
            input.value = 1 / (input.value);

            break;
        }

        case 'e': {
            if (Number(input.value.substring(-1))) {
                input.value = Math.exp(1);
            }
            else {
                input.value += Math.exp(1);
            }
            break;
        }

        case 'deg': {
            if (z == 1) {
                document.getElementById('degree').innerHTML = "RAD";
                z = 0;
            }
            else {
                document.getElementById('degree').innerHTML = "DEG";
                z = 1;
            }
            break;
        }
            
        
        case 'fe': {
            if (w ==1) {
                input.value = Number(input.value).toString();
                w = 0;
            }
            else {
                input.value = Number(input.value).toExponential().toString();
                w = 1;
            }
            break;
        }
        default: {
            input.value += 0
        }
    }
}