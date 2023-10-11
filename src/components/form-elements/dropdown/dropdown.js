//- if list-counter && data === roomsParam - border none
$(function () {
    const expand = $(".dropdown").find(".dropdown__content-expand");
    const content = $(".dropdown").find(".dropdown__content");
    const input = $(expand).closest(".dropdown").find(".input");
    if (expand) {
        input.addClass("dropdown__input_border-radius-none");
    }
    // const contentCalendar = $(".dropdown").find(".datepicker");
    // if (contentCalendar) {
    //     contentCalendar.css({ "border-width": "0px 1px 1px 1px" });
    //     input.addClass("dropdown__input_border-bottom-none");
    // }
    $(".input__button").on("click", (e) => {
        const button = e.currentTarget;
        const input = $(button).prev();
        const content = $(input)
            .closest(".dropdown")
            .find(".dropdown__content-inner");
        const unexpand = $(input)
            .closest(".dropdown")
            .find(".dropdown__content-unexpand");
        if (unexpand) {
            content.toggleClass("dropdown__content-inner-closed");
            content.toggleClass("dropdown__content-inner-opened");
        }

        input.toggleClass("input__focused");
        input.toggleClass("dropdown__input_border-radius-none");
    });

    $(".dropdown").off("changeCount");
    $(".dropdown").on("changeCount", function (e, data) {
        const input = $(data.target).closest(".dropdown").find(".input");

        input.val(data.count);
        if (data.count === 0) {
            input.val("");
            console.log(input.val());
        }
    });

    $(".dropdown").off("clear");
    $(".dropdown").on("clear", function (e, data) {
        const input = $(data.target).closest(".dropdown").find(".input");
        input.val("");
    });
    // - ???
    $(".dropdown").off("apply");
    $(".dropdown").on("apply", function (e, data) {
        const input = $(data.target).closest(".dropdown").find(".input");
        const inputVal = input.val();
        console.log(inputVal);
        input.val("");
        $(data.target)
            .closest(".dropdown__content")
            .addClass("dropdown__content-inner-closed");
    });
});
