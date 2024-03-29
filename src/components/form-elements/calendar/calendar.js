import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";
import moment from "moment";

const formatDate = (date, format) => {
    const formats = {
        short: {
            day: "2-digit",
            month: "short",
        },
        standart: {
            year: "numeric",
            day: "2-digit",
            month: "2-digit",
        },
    };
    return date.toLocaleString("ru", formats[format]);
};

$(function () {
    let button = {
        content: "Применить",
        onClick: (dp) => {
            dp.selectedDates;
            console.log(dp.selectedDates);
            const parent = "." + $(dp["$el"]).attr("data-parent");
            const input = $(dp["$el"]).closest(parent).find("input");

            const dates = dp.selectedDates.map((x) => formatDate(x));
            console.log(dates);
            if (dp["$altField"].length > 0) {
                input.val(dates[0]);
                $(dp["$altField"][0]).val(dates[1]);
            } else {
                input.val(dates.join(" - "));
            }
            $(parent).trigger("close", {
                target: dp["$el"],
            });
        },
    };
    $.each($(".datepicker"), function () {
        const parent = "." + $(this).attr("data-parent");
        const altField = $(parent).find("[data-alt-input]");
        const formatDates = $(this).attr("data-format-date");
        const startDates = $(this).attr("data-date");
        let selectedDates = [];

        if (startDates) {
            selectedDates = startDates.split(",").map((x) => {
                return new Date(moment(x, "DD-MM-YYYY").format("YYYY-MM-DD"));
            });
            const input = $(this).closest(parent).find("input");
            const formattedDates = formatDate(selectedDates, "formatDates");
            const val = formattedDates.replaceAll(".", "").replace(",", " - ");
            input.val(val);
        }

        new AirDatepicker(this, {
            inline: true,
            locale: localeRu,
            range: "true",
            multipleDatesSeparator: " - ",
            // minDate: [new Date()],
            selectedDates: selectedDates,
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
