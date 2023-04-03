// https://robinherbots.github.io/Inputmask/#/documentation
import "../../../../node_modules/inputmask/dist/jquery.inputmask";
//C:\Users\Ирус\Desktop\програминг\metalamp-hotel\node_modules\inputmask\dist\jquery.inputmask.js
$(document).ready(function () {
    //     console.log($("#mask"));
    $("#mask").inputmask("99-9999999"); //static mask
    //     $("#mask").inputmask({ mask: "(999) 999-9999" }); //specifying options
    //     $("#mask").inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
});
// //
// var selector = document.getElementById("mask");
// $("#mask").inputmask("99-9999999");
