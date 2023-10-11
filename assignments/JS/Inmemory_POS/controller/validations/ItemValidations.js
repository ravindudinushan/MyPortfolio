// validation for item
const ITEM_CODE_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_DESCRIPTION_REGEX = /^[A-Za-z\s]+$/;
const ITEM_UNITE_PRICE_REGEX = /^\$?\d+(,\d{3})*(\.\d{2})?$/;
const ITEM_QTY_REGEX = /^[1-9]\d*$/;

//add validations and text fields to the
let c_vArray = new Array();
c_vArray.push({field: $("#inputItemCode"), regEx: ITEM_CODE_REGEX});
c_vArray.push({field: $("#inputItemName"), regEx: ITEM_DESCRIPTION_REGEX});
c_vArray.push({field: $("#inputUnitPrice"), regEx: ITEM_UNITE_PRICE_REGEX});
c_vArray.push({field: $("#inputQtyOnHand"), regEx: ITEM_QTY_REGEX});

function clearItemInputFields() {
    $("#inputItemCode,#inputItemName,#inputUnitPrice,#inputQtyOnHand").val("");
    $("#inputItemCode,#inputItemName,#inputUnitPrice,#inputQtyOnHand").css("border", "1px solid #ced4da");
    $("#inputItemCode").focus();
    setBtn();
}

setBtn();

//disable tab
$("#inputItemCode,#inputItemName,#inputUnitPrice,#inputQtyOnHand").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("code") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(c_vArray[indexNo]);

    setBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("code")) {
            //check validation is ok
            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                saveItem();
            }
        }
    }
});


function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

}

function checkAll() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}

function setBtn() {
    $("#itemDelete").prop("disabled", true);
    $("#itemUpdate").prop("disabled", true);

    if (checkAll()) {
        $("#itemSave").prop("disabled", false);
    } else {
        $("#itemSave").prop("disabled", true);
    }

    let id = $("#inputItemCode").val();
    if (searchItem(code) == undefined) {
        $("#itemDelete").prop("disabled", true);
        $("#itemUpdate").prop("disabled", true);
    } else {
        $("#itemDelete").prop("disabled", false);
        $("#itemUpdate").prop("disabled", false);
    }

}

