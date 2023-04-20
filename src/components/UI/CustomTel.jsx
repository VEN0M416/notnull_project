import React from "react";

 const CustomTel = (props)=>{

    const getInputNumbersValue = function(input){
        return input.value.replace(/\D/g, "");
    }

    const onPhoneInput = function(e){
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputvalue = "";
        
        if(!inputNumbersValue){
            return input.value = "";
        }

        if([7,8,9].indexOf(inputNumbersValue[0]> -1)){
            if(inputNumbersValue[0]=="9")inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0]=="8")?"8":"+7";
            formattedInputvalue = firstSymbols + " "
            if(inputNumbersValue.length > 1){
                formattedInputvalue += "(" + inputNumbersValue.substring(1,4);
            }
            if(inputNumbersValue.length >=5){
                formattedInputvalue += ") " + inputNumbersValue.substring(4,7);
            }
            if(inputNumbersValue.length >=8){
                formattedInputvalue += "-" + inputNumbersValue.substring(7,9);
            }
            if(inputNumbersValue.length >=10){
                formattedInputvalue += "-" + inputNumbersValue.substring(9,11);
            }
            
        }
        else{
            formattedInputvalue = "+" + inputNumbersValue.substring(0,16);
        }
        input.value = formattedInputvalue;
        
        if (props.onChange) {
            props.onChange(formattedInputvalue);
        }
    }

    return(
        <input className="my-1 bg-white/20 rounded px-3 py-1" onChange={onPhoneInput}/>
    );
 }

 export default CustomTel;