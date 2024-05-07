"use strict";
// console.log("inside script")
window.onload = init;

function init(){
    

    let addBtn = document.getElementById("addBtn");
    addBtn.onclick = onAddBtnClicked;

    let subBtn = document.getElementById("subBtn");
    subBtn.onclick = onSubBtnClicked;

    let mulBtn = document.getElementById("mulBtn");
    mulBtn.onclick = onMulBtnClicked;

    let divBtn = document.getElementById("divBtn");
    divBtn.onclick = onDivBtnClicked;


}


// let num1Field = document.getElementById("num1Field");
// let num2Field = document.getElementById("num2Field");

// let num1 = parseInt(num1Field.value);
// let num2 = parseInt(num2Field.value);



function onAddBtnClicked() {
    let num1Field = document.getElementById("num1Field");
    let num2Field = document.getElementById("num2Field");

    let num1 = parseInt(num1Field.value);
    let num2 = parseInt(num2Field.value);
    let res = num1 + num2;
   
    let ansField = document.getElementById("ansField");
    ansField.value = res;
   
}

function onSubBtnClicked(){

    let num1Field = document.getElementById("num1Field");
    let num2Field = document.getElementById("num2Field");

    let num1 = parseInt(num1Field.value);
    let num2 = parseInt(num2Field.value);

    let res = num1 - num2;
   
    let ansField = document.getElementById("ansField");
    ansField.value = res;
}

function onMulBtnClicked(){

    let num1Field = document.getElementById("num1Field");
    let num2Field = document.getElementById("num2Field");

    let num1 = parseInt(num1Field.value);
    let num2 = parseInt(num2Field.value);

    let res = num1 * num2;
   
    let ansField = document.getElementById("ansField");
    ansField.value = res;

}

function onDivBtnClicked(){
    let num1Field = document.getElementById("num1Field");
    let num2Field = document.getElementById("num2Field");

    let num1 = parseInt(num1Field.value);
    let num2 = parseInt(num2Field.value);

    let res = num1 / num2;
   
    let ansField = document.getElementById("ansField");
    ansField.value = res;
}