$(function () {
    const inputButton = $(".date-range").find(".input__button");

    const toggleCalendar = (el) => {
        const calendar = $(el)
            .closest(".date-range")
            .find(".date-range__calendar");
        const input = $(el).closest(".date-range").find(".input");
        input.toggleClass("input__focused");
        input.toggleClass("date-range__input_bottom-border-none");
        $(calendar).toggle();
    };

    $(inputButton).on("click", (e) => {
        toggleCalendar(e.currentTarget);
    });

    $(".date-range").off("close");
    $(".date-range").on("close", function (e, data) {
        toggleCalendar(data.target);
    });
});
