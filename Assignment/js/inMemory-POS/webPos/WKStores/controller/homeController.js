document.getElementById("customerPage").style.display="none";
document.getElementById("itemPage").style.display="none";

document.getElementById("btnCustomer").addEventListener("click",function (){
    document.getElementById("homePage").style.display="none";
    document.getElementById("customerPage").style.display="block";
    document.getElementById("itemPage").style.display="none";
});

document.getElementById("btnItem").addEventListener("click",function (){
    document.getElementById("homePage").style.display="none";
    document.getElementById("customerPage").style.display="none";
    document.getElementById("itemPage").style.display="block";
});

document.getElementById("btnHome").addEventListener("click",function (){
    document.getElementById("homePage").style.display="block";
    document.getElementById("customerPage").style.display="none";
    document.getElementById("itemPage").style.display="none";
});