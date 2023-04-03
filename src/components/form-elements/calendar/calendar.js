import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";
//import "air-datepicker/air-datepicker.css";

new AirDatepicker("#datepicker", {
    inline: true,
    locale: localeRu,
    range: true,
    // minDate:
    // maxDate:
    // dynamicRange: true,
    classes: "calendar",
    prevHtml: "arrow_back",
    nextHtml: "arrow_forward",
    navTitles: {
        days: "MMMM yyyy",
    },
    onRenderCell({ date, cellType }) {
        if (cellType === "day") {
            if (date.getDate() === 12) {
                return {
                    disabled: true,
                    classes: "cell",
                    attrs: {
                        title: "Cell is disabled",
                    },
                };
            }
        }
    },
});
console.log(1);
