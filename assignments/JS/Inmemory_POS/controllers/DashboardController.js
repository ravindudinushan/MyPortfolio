initiateUI();

function initiateUI() {
    clearAll();
    $("#home-page").css('display', 'block');
    // $("header").css('display', 'block');
    setTheLastView();
}

function setTheLastView() {
    let view = localStorage.getItem("view");
    switch (view) {
        case "HOME":
            setView($("#home-page"));
            break;
        case "CUSTOMER":
            setView($("#customer-page"));
            break;
        case "ITEM":
            setView($("#item-page"));
            break;
        case "ORDERS":
            setView($("#order-page"));
            break;
        case "ORDER-DETAILS":
            setView($("#order-detail-page"));
            break;
        default:
            setView($("#home-page"));
    }
}

function saveLastView(clickedID) {
    switch (clickedID) {
        case "home-page":
            localStorage.setItem("view", "HOME");
            break;
        case "customer-page":
            localStorage.setItem("view", "CUSTOMER");
            break;
        case "item-page":
            localStorage.setItem("view", "ITEM");
            break;
        case "order-page":
            localStorage.setItem("view", "ORDERS");
            break;
        case "order-detail-page":
            localStorage.setItem("view", "ORDER-DETAILS");
            break;
        case "log-in-page":
            localStorage.setItem("view", "LOG-IN");
            break;
        case "sign-up-page":
            localStorage.setItem("view", "SIGN-UP");
            break;
    }
}

function setView(viewOb) {

    if (viewOb.get(0).id === "log-in-page" || viewOb.get(0).id === "sign-up-page"){
        clearAll();
        viewOb.css("display", "block");
        $("header").css('display', 'none');
    }else {
        clearAll();
        viewOb.css("display", "block");
        $("header").css('display', 'block');
        saveLastView(viewOb.get(0).id);
    }
}

function clearAll() {
    $("#home-page,#customer-page,#item-page,#order-page,#order-detail-page,#log-in-page,#sign-up-page").css('display','none');
}


$("#home-nav").click(function () {
    setView($("#home-page"));
});

$("#customer-nav").click(function () {
    setView($("#customer-page"));
});

$("#item-nav").click(function () {
    setView($("#item-page"));
});

$("#order-nav").click(function () {
    setView($("#order-page"));
});

$("#order-detail-nav").click(function () {
    setView($("#order-detail-page"));
});

$("#log-in-nav").click(function () {
    setView($("#log-in-page"));
});

$("#sign-up-nav").click(function () {
    setView($("#sign-up-page"));
});

$("#btn-log-in").click(function () {
    setView($("#home-page"));
});

$("#btn-sign-up").click(function () {
    setView($("#log-in-page"));
});

$("#link-log-in").click(function () {
    setView($("#log-in-page"));
});



// <script>
//     let imgBody = document.querySelector("body");
//
//
//     let clickHomeNav = document.querySelector("#home-nav");
//     let clickCustomerNav = document.querySelector("#customer-nav");
//     let clickItemNav = document.querySelector("#item-nav");
//     let clickOrderNav = document.querySelector("#order-nav");
//     let clickOrderDetailNav = document.querySelector("#order-detail-nav");
//     let clickLogInNav = document.querySelector("#log-in-nav");
//     let clickSignUpNav = document.querySelector("#sign-up-nav");
//
//
//     let pageHeader = document.querySelector("header");
//     let pageHome = document.querySelector("#home-page");
//     let pageCustomer = document.querySelector("#customer-page");
//     let pageItem = document.querySelector("#item-page");
//     let pageOrder = document.querySelector("#order-page");
//     let pageOrderDetail = document.querySelector("#order-detail-page");
//     let pageLogIn = document.querySelector("#log-in-page");
//     let pageSignUp = document.querySelector("#sign-up-page");
//
//     let btnLogIn = document.querySelector("#btn-log-in");
//     let btnSignUp = document.querySelector("#btn-sign-up");
//     let linkLogIn = document.querySelector("#link-log-in");
//
//     btnLogIn.addEventListener("click", function (){
//     pageHeader.style.display='block';
//     pageHome.style.display='block';
//     pageCustomer.style.display='none';
//     pageItem.style.display='none';
//     pageOrder.style.display='none';
//     pageOrderDetail.style.display='none';
//     pageLogIn.style.display='none';
// });
//
//     btnSignUp.addEventListener("click", function (){
//     pageLogIn.style.display='block';
//     pageHeader.style.display='none';
//     pageHome.style.display='none';
//     pageCustomer.style.display='none';
//     pageItem.style.display='none';
//     pageOrder.style.display='none';
//     pageOrderDetail.style.display='none';
//     pageSignUp.style.display='none';
// });
//
//     linkLogIn.addEventListener("click", function (){
//     pageLogIn.style.display='block';
//     pageSignUp.style.display='none';
// });
//
//
//     clickHomeNav.addEventListener("click", function (){
//     pageHome.style.display='block';
//     pageCustomer.style.display='none';
//     pageItem.style.display='none';
//     pageOrder.style.display='none';
//     pageOrderDetail.style.display='none';
//     pageLogIn.style.display='none';
//
//     clickHomeNav.style.color='black';
// });
//
//     clickCustomerNav.addEventListener("click", function (){
//     pageCustomer.style.display='block';
//     pageHome.style.display='none';
//     pageItem.style.display='none';
//     pageOrder.style.display='none';
//     pageOrderDetail.style.display='none';
//     pageLogIn.style.display='none';
// });
//
//     clickItemNav.addEventListener("click", function (){
//     pageItem.style.display='block';
//     pageHome.style.display='none';
//     pageCustomer.style.display='none';
//     pageOrder.style.display='none';
//     pageOrderDetail.style.display='none';
//     pageLogIn.style.display='none';
// });
//
//     clickOrderNav.addEventListener("click", function (){
//     pageOrder.style.display='block';
//     pageHome.style.display='none';
//     pageCustomer.style.display='none';
//     pageItem.style.display='none';
//     pageOrderDetail.style.display='none';
//     pageLogIn.style.display='none';
// });
//
//     clickOrderDetailNav.addEventListener("click", function (){
//     pageOrderDetail.style.display='block';
//     pageHome.style.display='none';
//     pageCustomer.style.display='none';
//     pageItem.style.display='none';
//     pageOrder.style.display='none';
//     pageLogIn.style.display='none';
// });
//
//     clickLogInNav.addEventListener("click", function (){
//     pageLogIn.style.display='block';
//     pageHeader.style.display='none';
//     pageHome.style.display='none';
//     pageCustomer.style.display='none';
//     pageItem.style.display='none';
//     pageOrder.style.display='none';
//     pageOrderDetail.style.display='none';
// });
//
//     clickSignUpNav.addEventListener("click", function (){
//     pageSignUp.style.display='block';
//     pageHeader.style.display='none';
//     pageHome.style.display='none';
//     pageCustomer.style.display='none';
//     pageItem.style.display='none';
//     pageOrder.style.display='none';
//     pageOrderDetail.style.display='none';
// });
// </script>