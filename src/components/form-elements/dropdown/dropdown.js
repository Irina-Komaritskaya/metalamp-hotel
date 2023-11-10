//- if list-counter && data === roomsParam - border none
$(function () {
    $(".dropdown__content").not(".dropdown__content_opened").hide();
    $(".dropdown__content.dropdown__content_opened")
        .closest(".dropdown")
        .find(".input")
        .addClass("dropdown__input_border-radius-none");

    const input = $(".dropdown").find(".dropdown__input");

    const toggleDropdown = (el) => {
        const content = $(el).closest(".dropdown").find(".dropdown__content");
        const input = $(content).closest(".dropdown").find(".input");
        $(content).toggle();
        input.toggleClass("input__focused");
        input.toggleClass("dropdown__input_border-radius-none");
    };

    $(input).on("click", (e) => {
        toggleDropdown(e.currentTarget);
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
        console.log(2);
        input.val("");
        $(data.target)
            .closest(".dropdown__content")
            .addClass("dropdown__content-inner-closed");
    });
    $(".dropdown").off("close");
    $(".dropdown").on("close", function (e, data) {
        console.log(1);
        const el = $(data.target).closest(e.currentTarget);
        toggleDropdown(el);
    });
});
