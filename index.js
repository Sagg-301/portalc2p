$(document).ready(function() {

    var adminC2P = document.getElementById('adminC2P');
    adminC2P.onclick = function() {
        window.location = './Admin/Frontend/Login/loginAdminC2P.html';
    }
    
    var operatorC2P = document.getElementById('operatorC2P');
    operatorC2P.onclick = function() {
        window.location = './Operator/Frontend/Login/loginOperator.html';
    }

    var registerC2P = document.getElementById('registerC2P');
    registerC2P.onclick = function() {
        // window.location = '../../Frontend/Register/registerMassiveUser.html';
    }
});