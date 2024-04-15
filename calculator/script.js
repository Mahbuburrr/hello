


// firstNumber.addEventListener('click',function(){
//     alert('hello')
// })
// function add(){
//   var  firstNumber=Number(document.getElementById('input1').value); 
// var secondNumber=Number(document.getElementById('input2').value);
// resultDiv=document.getElementById('result');

    
//         result=firstNumber + secondNumber;
//         resultDiv.value=result
    
// }
// function subtract(){
//     var  firstNumber=Number(document.getElementById('input1').value); 
//   var secondNumber=Number(document.getElementById('input2').value);
//   resultDiv=document.getElementById('result');
  
      
//           result=firstNumber - secondNumber;
//           resultDiv.value=result
      
//   }
// var calculate=document.getElementById('calculate').value;

// operation.addEventListener('click',function(){
//   var  firstNumber=parseFloat(document.getElementById('input1').value);
//   var  secondNumber=parseFloat(document.getElementById('input2').value);
//   var operation=document.getElementById('operation').value;
//   var resultDiv=document.getElementById('result');
// if(operation =='+'){
//    var result=firstNumber + secondNumber;
//    resultDiv.value=result

// }
// else if(operation=='-'){
//     var result=firstNumber - secondNumber;
//     resultDiv.value=result
// }
// else if(operation=='*'){
//     var result=firstNumber * secondNumber;
//     resultDiv.value=result
// }

// else if(operation=='/'){
//     if(secondNumber==0){
//         resultDiv.value="you can not divided by zero!! "

//         resultDiv.classList.add("alert-danger")
//     }
//     else{
//         var result=firstNumber / secondNumber;
//     resultDiv.value=result
//     }
// }
// });

function calculate(){
    var  firstNumber=parseFloat(document.getElementById('input1').value);
    var  secondNumber=parseFloat(document.getElementById('input2').value);
    var operation=document.getElementById('operation').value;
    var resultDiv=document.getElementById('result');
  if(operation =='+'){
     var result=firstNumber + secondNumber;
     resultDiv.value=result
  
  }
  else if(operation=='-'){
      var result=firstNumber - secondNumber;
      resultDiv.value=result
  }
  else if(operation=='*'){
      var result=firstNumber * secondNumber;
      resultDiv.value=result
  }
  
  else if(operation=='/'){
      if(secondNumber==0){
          resultDiv.value="you can not divided by zero!! "
  
          resultDiv.classList.add("alert-danger")
      }
      else{
          var result=firstNumber / secondNumber;
      resultDiv.value=result
      }
  }

}
function input1(){
   calculate();
}
function input2(){
    calculate();
 }
 