
getAllItems();


$("#itemSave").click(function () {
    if (checkAll()){
        saveItem();
    }else{
        alert("Error");
    }

});


function bindTrEvents() {
    $('#tblItems>tr').click(function () {
        //get the selected rows data
        let code = $(this).children().eq(0).text();
        let description = $(this).children().eq(1).text();
        let unitPrice = $(this).children().eq(2).text();
        let qtyOnHand = $(this).children().eq(3).text();


        //set the selected rows data to the input fields
        $("#inputItemCode").val(code);
        $("#inputItemName").val(description);
        $("#inputUnitPrice").val(unitPrice);
        $("#inputQtyOnHand").val(qtyOnHand);

    })
}

//delete btn event
$("#itemDelete").click(function () {
    let code = $("#inputItemCode").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(code);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItems();
        } else {
            alert("Item Not Removed..!");
        }
    }


});

//update  btn event
$("#itemUpdate").click(function () {
    let code = $("#inputItemCode").val();
    updateItem(code);
    clearItemInputFields();
});

//clear btn event
$("#itemClear").click(function () {
    clearItemInputFields();
});



// CRUD operation Functions
function saveItem() {
    let itemCode = $("#inputItemCode").val();
    //check customer is exists or not?
    if (searchCustomer(itemCode.trim()) == undefined) {

        //if the customer is not available then add him to the array
        let itemDescription = $("#inputItemName").val();
        let itemQtyOnHand = $("#inputQtyOnHand").val();
        let itemUnitPrice = $("#inputUnitPrice").val();

        //by using this one we can create a new object using
        //the customer model with same properties
        let newItem = Object.assign({}, item);

        //assigning new values for the customer object
        newItem.code = itemCode;
        newItem.description = itemDescription;
        newItem.unitPrice = itemUnitPrice;
        newItem.qtyOnHand = itemQtyOnHand;

        //add item record to the customer array (DB)
        itemDB.push(newItem);
        clearItemInputFields();
        getAllItems();

    } else {
        alert("Item already exits.!");
        clearItemInputFields();
    }
}

function getAllItems() {
    //clear all tbody data before add
    $("#tblItem").empty();

    //get all items
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let description = itemDB[i].description;
        let unitPrice = itemDB[i].unitPrice;
        let qty = itemDB[i].qtyOnHand;


        let row = `<tr>
                     <td>${code}</td>
                     <td>${description}</td>
                     <td>${unitPrice}</td>
                     <td>${qty}</td>
                     
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblItem").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work
        bindTrEvents();
    }
}

function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == code) {
            itemDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchItem(code) {
    return itemDB.find(function (item) {
        return item.code == code;
    });
}

function updateItem(code) {
    if (searchItem(code) == undefined) {
        alert("No such Item..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this item.?");
        if (consent) {
            let item = searchItem(code);


            let itemDescription = $("#inputItemName").val();
            let itemUnitPrice = $("#inputUnitPrice").val();
            let itemQtyOnHand = $("#inputQtyOnHand").val();

            item.description = itemDescription;
            item.unitPrice = itemUnitPrice;
            item.qtyOnHand = itemQtyOnHand;

            getAllItems();
        }
    }

}




