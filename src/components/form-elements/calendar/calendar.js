import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";

const formatDate = (date) => {
    return date.toLocaleString("ru", {
        year: "numeric",
        day: "2-digit",
        month: "2-digit",
    });
};
$(function () {
    let button = {
        content: "Применить",
        onClick: (dp) => {
            formatDate(dp.selectedDates);

            const parent = "." + $(dp["$el"]).attr("data-parent");
            const input = $(dp["$el"]).closest(parent).find("input");
            const dates = dp.selectedDates.map((x) => formatDate(x));
            if (dp["$altField"].length > 0) {
                input.val(dates[0]);
                $(dp["$altField"][0]).val(dates[1]);
            } else {
                input.val(dates.join(" - "));
            }
            console.log(dp["$el"]);
            $(parent).trigger("close", {
                target: dp["$el"],
            });
        },
    };
    $.each($(".datepicker"), function () {
        const parent = "." + $(this).attr("data-parent");
        const altField = $(parent).find("[data-alt-input]");

        new AirDatepicker(this, {
            inline: true,
            locale: localeRu,
            range: "true",
            minDate: [new Date()],
            autoClose: "true",
            altField: altField ? altField : "",
            prevHtml: "arrow_back",
            nextHtml: "arrow_forward",
            navTitles: {
                days: "MMMM yyyy",
            },
            buttons: ["clear", button],
        });
    });
});
