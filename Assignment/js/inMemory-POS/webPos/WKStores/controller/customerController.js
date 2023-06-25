var btnSave = $("#btnSave");
var btnRemove = $("#btnRemove");
var btnGetAll = $("#btnGetAll");
var btnUpdate = $("#btnUpdate");


$("#customerIdText, #customerNameText, #customerTelText, #customerAddressText").keydown(function (e){
    if(e.key == "Tab"){
        e.preventDefault();
    }
});


$("#customerIdText").keyup(function (e){
    if(regexId.test($("#customerIdText").val())){
        $("#customerIdText").css("background-color","white");
    }else{
        $("#customerIdText").css("background-color","red");
    }
});


$("#customerIdText").keydown(function (e){
    if(e.keyCode == 13 && regexId.test($("#customerIdText").val())) {
        $("#customerNameText").focus();
    }
});



$("#customerNameText").keyup(function (e){
    if(regexName.test($("#customerNameText").val())){
        $("#customerNameText").css("background-color","white");
    }else{
        $("#customerNameText").css("background-color","red");
    }
});

$("#customerNameText").keydown(function (e){
    if(e.keyCode == 13 && regexName.test($("#customerNameText").val())){
        $("#customerTelText").focus();
    }
});




$("#customerTelText").keyup(function (e){
    if(regexTel.test($("#customerTelText").val())){
        $("#customerTelText").css("background-color","white");
    }else{
        $("#customerTelText").css("background-color","red");
    }
});

$("#customerTelText").keydown(function (e){
    if(e.keyCode == 13 && regexTel.test($("#customerTelText").val())){
        $("#customerAddressText").focus();
    }
});




$("#customerAddressText").keyup(function (e){
    if(regexAddress.test($("#customerAddressText").val())){
        $("#customerAddressText").css("background-color","white");
    }else{
        $("#customerAddressText").css("background-color","red");
    }
});

$("#customerAddressText").keydown(function (e){
    if(e.keyCode == 13 && regexAddress.test($("#customerAddressText").val())){
        save();
    }
});



function save(){

    if(regexId.test($("#customerIdText").val()) && regexName.test($("#customerNameText").val()) && regexTel.test($("#customerTelText").val()) && regexAddress.test($("#customerAddressText").val())){
        var is = false;

        for(let i = 0; i < detailsBig.length; i++){
            if(detailsBig[i].cid == $("#customerIdText").val()){
                is = true;
            }
        }

        if(is == false){

            var tblBody = $("#tblBody");

            var id = $("#customerIdText").val();
            var name = $("#customerNameText").val();
            var tel = $("#customerTelText").val();
            var address = $("#customerAddressText").val();

            customer = {
                cid : id,
                cname : name,
                ctel : tel,
                caddress : address
            }

            detailsBig.push(customer);

            let tr=$('<tr> <td>'+detailsBig[detailsBig.length-1].cid+'</td> <td>'+detailsBig[detailsBig.length-1].cname+'</td> <td>'+detailsBig[detailsBig.length-1].ctel+'</td> <td>'+detailsBig[detailsBig.length-1].caddress+'</td></tr>');
            $("#tblBody").append(tr);

        }else{
            alert("Customer ID Already Used")
        }
    }


    $("#tblBody>tr").click(function (e){

        $("#customerIdText").val($(this).children().eq(0).text());
        $("#customerNameText").val($(this).children().eq(1).text());
        $("#customerTelText").val($(this).children().eq(2).text());
        $("#customerAddressText").val($(this).children().eq(3).text());

    });

}


btnSave.click(function(){

    save();
    clearFields();

});



function getAll(){

    $('#tblBody').empty();

    for(var i = 0; i < detailsBig.length; i++){

        var id = detailsBig[i].cid;
        var name = detailsBig[i].cname;
        var address = detailsBig[i].caddress;
        var contact = detailsBig[i].ctel;

        let row = `<tr><td>${id}</td><td>${name}</td><td>${contact}</td><td>${address}</td></tr>`

        $('#tblBody').append(row);

    }
}


btnGetAll.click(function (){

    getAll();

});



btnRemove.click(function(event){

    var id = $("#customerIdText").val();

    for(var i = 0; i < detailsBig.length; i++){

        if(detailsBig[i].cid == id){
            detailsBig.splice(i, 1);
            console.log(detailsBig.length);
            getAll();
            clearFields();
            break;
        }

    }

});


btnUpdate.click(function(){

    var id = $("#customerIdText").val();
    var name = $("#customerNameText").val();
    var tel = $("#customerTelText").val();
    var address = $("#customerAddressText").val();

    for(var i = 0; i < detailsBig.length; i++){

        if(detailsBig[i].cid == id){

            detailsBig[i].cid = id;
            detailsBig[i].cname = name;
            detailsBig[i].caddress = address;
            detailsBig[i].ctel = contact;

            getAll();
            clearFields();

            break;

        }

        if(i == detailsBig.length - 1){
            alert("No")
        }

    }

    getAll();

});


function clearFields(){
    $("#customerIdText").val("");
    $("#customerNameText").val("");
    $("#customerTelText").val("");
    $("#customerAddressText").val("");

    $("#customerIdText").focus();
}
