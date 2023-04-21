// https://robinherbots.github.io/Inputmask/#/documentation
import "inputmask/dist/jquery.inputmask";
$(document).ready(function () {
    $(".input__mask").inputmask({
        mask: "datetime",
    });
});
