// https://robinherbots.github.io/Inputmask/#/documentation
import "inputmask/dist/jquery.inputmask";
$(document).ready(function () {
    $(".input__mask").inputmask({
        alias: "datetime",
        inputFormat: "dd.mm.yyyy",
        placeholder: "ДД.ММ.ГГГГ",
        max: "01.01.3000",
    });
});
