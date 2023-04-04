import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";
let button = {
    content: "Применить",
    onClick: (dp) => {
        //отправка даты, сброс выделения
    },
};
new AirDatepicker("#datepicker", {
    inline: true,
    locale: localeRu,
    range: true,
    minDate: [new Date()],
    // maxDate: ?? param
    // dynamicRange: true,
    //showEvent
    //autoClose

    prevHtml: "arrow_back",
    nextHtml: "arrow_forward",
    navTitles: {
        days: "MMMM yyyy",
    },
    buttons: ["clear", button],
});
