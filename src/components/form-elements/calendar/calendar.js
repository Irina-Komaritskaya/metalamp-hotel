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

        if (dp["$altField"].length > 0) {
            input.val(dates[0]);
            $(dp["$altField"][0]).val(dates[1]);
        } else {
            input.val(dates.join(" - "));
        }
        $(input).closest(".input__inner").find(".input__button").click();
    },
};
$.each($(".datepicker"), function () {
    const dateRange = $(this).closest(".dateRange");
    const dateStart = $(dateRange).find(".dateRange__dateStart").find(".input");
    const dateFinish = $(dateRange)
        .find(".dateRange__dateFinish")
        .find(".input");

    new AirDatepicker(this, {
        inline: true,
        locale: localeRu,
        range: "true",
        minDate: [new Date()],
        // maxDate: ?? param
        // dynamicRange: true,
        //showEvent
        autoClose: "true",
        altField: dateFinish ? dateFinish : "",
        prevHtml: "arrow_back",
        nextHtml: "arrow_forward",
        navTitles: {
            days: "MMMM yyyy",
        },
        buttons: ["clear", button],
    });
});
