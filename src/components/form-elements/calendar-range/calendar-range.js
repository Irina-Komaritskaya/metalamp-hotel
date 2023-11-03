$(function () {
    $(".date-range__calendar").hide();
    const inputButton = $(".date-range").find(".input__button");

    $(inputButton).on("click", (e) => {
        const calendar = $(e.currentTarget)
            .closest(".date-range")
            .find(".date-range__calendar");
        const input = $(e.currentTarget).closest(".date-range").find(".input");
        input.toggleClass("input__focused");
        input.toggleClass("date-range__input_bottom-border-none");
        $(calendar).toggle();
    });
});
