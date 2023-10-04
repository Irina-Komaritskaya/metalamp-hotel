$(function () {
    const expand = $(".dropdown").find(".dropdown__content-expand");
    if (expand) {
        const input = $(expand).closest(".dropdown").find(".input");
        input.addClass("dropdown__input_border-radius-none");
    }
});

$(".input__button").on("click", (e) => {
    const button = e.currentTarget;
    const input = $(button).prev();
    const defaultVal = $(input).val();
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
    const inputBtn = $(data.target).closest(".dropdown").find(".input__button");
    console.log(inputBtn);
    $(inputBtn)[0].click();
});
