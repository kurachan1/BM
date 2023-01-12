document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
});

document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
});

document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
});

document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
});

document.getElementById("BMI").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var sum = num1 / (num2/100*num2/100);
    document.getElementById("result").innerHTML = "ค่า BMI:" +sum;
});

function myalert(){
    alert("Hello Srinum")
}
const img = document.createElement("img")

img.src = "img/gg.jpg"
img.style.width = "200px";

document.getElementById("my.div").appendChild(img)