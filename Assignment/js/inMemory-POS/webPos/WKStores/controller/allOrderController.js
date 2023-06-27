function allOrders(){
    $('#tblBodyAllOrders').empty();

    for(var i = 0; i < orderDetails.length; i++){

        var itemCode = orderDetails[i].orderId;
        var itemName = orderDetails[i].customerId;
        var unitePrice = orderDetails[i].total;
        var qty = itemDetailsBig[i].date;

        let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${unitePrice }</td><td>${qty}</td></tr>`

        $('#tblBodyAllOrders').append(row);

    }
}