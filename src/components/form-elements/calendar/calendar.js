import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";
const formatDate = (date) => {
    return date.toLocaleString("ru", {
        year: "numeric",
        day: "2-digit",
        month: "2-digit",
    });
};
let button = {
    content: "Применить",
    onClick: (dp) => {
        formatDate(dp.selectedDates);
        const input = $(dp["$el"]).closest(".dropdown").find(".input");
        const dates = dp.selectedDates.map((x) => formatDate(x));
        input.val(dates.join(" - "));
        $(input).closest(".input__inner").find(".input__button").click();
    },
};
$.each($(".datepicker"), function () {
    new AirDatepicker(this, {
        inline: true,
        locale: localeRu,
        range: true,
        minDate: [new Date()],
        // maxDate: ?? param
        // dynamicRange: true,
        //showEvent
        //autoClose
        altField: "",
        prevHtml: "arrow_back",
        nextHtml: "arrow_forward",
        navTitles: {
            days: "MMMM yyyy",
        },
        buttons: ["clear", button],
    });
});
