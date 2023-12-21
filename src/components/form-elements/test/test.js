import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";
const el = $(".test").find("input");
const func = (el, parent, pointer) => {};
new AirDatepicker(el[0], {
    dateFormat: "dd MMM ",
    // inline: true,
    classes: "datepicker",
    position({ $datepicker, $target, $pointer }) {
        $pointer.style.display = "none";
    },
    container: ".test",
    locale: localeRu,
    range: "true",
    multipleDatesSeparator: " - ",
    // minDate: [new Date()],
    // selectedDates: selectedDates,
    // autoClose: "true",
    // altField: altField ? altField : "",
    prevHtml: "arrow_back",
    nextHtml: "arrow_forward",
    navTitles: {
        days: "MMMM yyyy",
    },
    buttons: ["clear"],
});
