$(function () {
    const style = $(".dropdown__input").filter("[data-style]");
    const input = $(".dropdown").find(".dropdown__input");
    $(".dropdown__content.dropdown__content_opened")
        .closest(".dropdown")
        .find(".input")
        .addClass("dropdown__input_bottom-border-radius-none");

    $.each(style, (i, x) => {
        const dataStyle = $(x).data().style;
        const prefix = "dropdown__input_";
        $(x).find(".input").addClass(`${prefix}${dataStyle}`);
        if (dataStyle === "bottom-border-radius-none") {
            $(x).addClass(`${prefix}non-roundable`);
        }
    });
    const toggleDropdown = (el) => {
        const content = $(el).closest(".dropdown").find(".dropdown__content");
        const input = $(content).closest(".dropdown").find(".input");
        const roundedInput = $(el)
            .closest(".dropdown")
            .find(".dropdown__input")
            .not(".dropdown__input_non-roundable")
            .find(".input");
        $(content).toggle();
        input.toggleClass("input__focused");

        roundedInput.toggleClass("dropdown__input_bottom-border-radius-none");
    };

    $(input).on("click", (e) => {
        toggleDropdown(e.currentTarget);
    });

    $(".dropdown").off("changeCountListCounter");
    $(".dropdown").on("changeCountListCounter", function (e, data) {
        const input = $(data.target).closest(".dropdown").find(".input");
        cutValue =
            data.count.length >= 20
                ? data.count.substring(0, 20) + "..."
                : data.count;
        console.log(data.count.length);
        input.val(cutValue);
        if (data.count === 0) {
            input.val("");
            console.log(input.val());
        }
    });

    $(".dropdown").off("clearListCounter");
    $(".dropdown").on("clearListCounter", function (e, data) {
        const input = $(data.target).closest(".dropdown").find(".input");
        input.val("");
    });
    // - ???
    $(".dropdown").off("applyListCounter");
    $(".dropdown").on("applyListCounter", function (e, data) {
        const input = $(data.target).closest(".dropdown").find(".input");
        input.val("");
        $(data.target)
            .closest(".dropdown__content")
            .addClass("dropdown__content-inner-closed");
    });
    $(".dropdown").off("close");
    $(".dropdown").on("close", function (e, data) {
        const el = $(data.target).closest(e.currentTarget);
        toggleDropdown(el);
    });
});
