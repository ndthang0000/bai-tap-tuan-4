const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)


const firstNumberElement=$('#first-number')
const secondNumberElement=$('#second-number')
const resultElement=$('#result')
const btnCal=$('.btn-calculator')
var type


var firstValue;
var secondValue;
var checkClick1=true
var checkClick2=true


resultElement.addEventListener('keypress',(e)=>{
    e.preventDefault()
    return false
})

const validatorNumber=(string)=>{
    if(/[^\.\s\w]/.test(string)){
        return false
    }
    if(/[a-z]/.test(string)){
        return false
    }
    if(isNaN(string)){
        return false
    }
    return true
}
firstNumberElement.addEventListener('input',(e)=>{
    $('#success').innerText=""
    resultElement.value=""
    let index=e.target.value.indexOf('.')
    if(index>0){
        firstValue= parseFloat(e.target.value)
    }
    else{
        firstValue= parseInt(e.target.value)
    }
    if (validatorNumber(e.target.value)){
        if(!isNaN(firstValue)){
            $('#error1').innerText=''
        }
        checkClick1=true
        firstNumberElement.classList.remove('red')
    }
    else{
        checkClick1=false
        $('#error1').innerText="Giá trị ô thứ nhất không phải là số"
        firstNumberElement.classList.add('red')
    }
    
})
secondNumberElement.addEventListener('input',(e)=>{
    resultElement.value=""
    $('#success').innerText=""
    let index=e.target.value.indexOf('.')
    if(index>0){
        secondValue= parseFloat(e.target.value)
    }
    else{
        secondValue= parseInt(e.target.value)
    }
    if(validatorNumber(e.target.value)){
        if(!isNaN(secondValue)){
            console.log(secondValue)
            $('#error2').innerText=''
        }
        checkClick2=true
        secondNumberElement.classList.remove('red')

    }
    else{
        $('#error2').innerText="Giá trị ô thứ hai không phải là số"
        checkClick2=false
        secondNumberElement.classList.add('red')
        
    }
})

btnCal.addEventListener('click',(e)=>{
    if(checkClick1&&checkClick2){
        resultElement.classList.remove('invalid')
        type=$('input[name=choseone]:checked').value
        if(!isNaN(secondValue)&&(!isNaN(firstValue))){
        if(type==="add"){
            result=secondValue+firstValue
        }
        else if (type==="sub"){
            result=firstValue-secondValue
        }
        else if (type==="div"){
            result=(firstValue/secondValue).toFixed(3)
        }
        else if(type==="mul"){
            result=firstValue*secondValue
        }
        resultElement.value=result
        $('#success').innerText="Successful!!"
        return 
        }
    }
    else{
        resultElement.classList.add('invalid')
    }
})
setInterval(()=>{
    if($('input[name=choseone]:checked').value!==type){
        $('#success').innerText=''
        resultElement.value=''
    }
},200)
