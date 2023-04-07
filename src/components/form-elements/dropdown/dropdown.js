$(".text-field__button").on("click", (e) => {
    const button = e.currentTarget;
    const input = $(button).prev();
    const content = $(input).closest(".dropdown").find(".dropdown__content");

    content.toggleClass("dropdown__content-unexpand");
    input.toggleClass("input__focused");
    input.css("border-bottom-left-radius", 0);
    input.css("border-bottom-right-radius", 0);
});
