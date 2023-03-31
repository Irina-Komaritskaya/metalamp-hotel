// https://robinherbots.github.io/Inputmask/#/documentation
import "inputmask/dist/jquery.inputmask";
$(document).ready(function () {
    $("mask").inputmask("99-9999999"); //static mask
    $("mask").inputmask({ mask: "(999) 999-9999" }); //specifying options
    $("mask").inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
    console.log(1);
});
// import Inputmask from "inputmask";
// var selector = document.getElementById("mask");

// var im = new Inputmask("99-9999999");
// im.mask("mask");
