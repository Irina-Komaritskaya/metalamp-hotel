import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";
import moment from "moment";

const formatingDate = (date, format) => {
    if (format === "short") {
        return date.toLocaleString("ru", {
            day: "2-digit",
            month: "short",
        });
    }
    if (format === "long") {
        return date.toLocaleString("ru", {
            year: "numeric",
            day: "2-digit",
            month: "2-digit",
        });
    }
};

$(function () {
    let button = {
        content: "Применить",
        onClick: (dp) => {},
    };

    // let button = {
    //     content: "Применить",
    //     onClick: (dp) => {
    //         const parent = "." + $(dp["$el"]).attr("data-parent");
    //         const input = $(dp["$el"]).closest(parent).find("input");
    //         const format = $(parent)
    //             .find(".datepicker")
    //             .attr("data-format-date");
    //         const dates = formatingDate(dp.selectedDates, format);
    //         console.log(dates);
    //         if (dp["$altField"].length > 0) {
    //             input.val(dates[0]);
    //             $(dp["$altField"][0]).val(dates[1]);
    //         } else {
    //             input.val(dates.join(" , "));
    //         }
    //         $(parent).trigger("close", {
    //             target: dp["$el"],
    //         });
    //     },
    // };
    $.each($(".datepicker"), function () {
        const parent = "." + $(this).attr("data-parent");
        const altField = $(this).attr("[data-alt-input]");
        const format = $(this).attr("data-format-date");
        const startDates = $(this).attr("data-date");
        let selectedDates = [];
        let input1 = "";
        if (parent != ".date-range") {
            input1 = $(this).closest(parent).find("input");
        }
        if (parent === ".date-range") {
            input1 = $(this)
                .closest(parent)
                .find(".date-range__date-start")
                .find("input");
        }

        if (startDates) {
            selectedDates = startDates.split("-").map((x) => {
                return new Date(moment(x, "DD-MM-YYYY").format("YYYY-MM-DD"));
            });
            const input = $(this).closest(parent).find("input");
            const val = formatingDate(selectedDates, format);
            // val = formatDate.replaceAll(".", "").replace(",", " - ");
            input.val(val);
        }

        new AirDatepicker(input1[0], {
            // inline: true,
            locale: localeRu,
            position({ $datepicker, $target, $pointer }) {
                $pointer.style.display = "none";
            },
            onSelect({ date, formattedDate, $datepicker }) {},
            container: this,
            dateFormat: "dd MMM",
            range: "true",
            multipleDatesSeparator: " - ",
            // minDate: [new Date()],
            selectedDates: selectedDates,
            // autoClose: false,
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
