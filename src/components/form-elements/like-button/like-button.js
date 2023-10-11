$(function () {
    const isClickedButton = $(".like-button.like-button_clicked");
    const noneClickedButton = $(".like-button");

    noneClickedButton.find(".like-button__symbol").text("favorite_border");
    isClickedButton.find(".like-button__symbol").text("favorite");

    $(".like-button").on("click", (e) => {
        const button = e.currentTarget;
        $(button).toggleClass("like-button_clicked");
        $(button).hasClass("like-button_clicked")
            ? $(button).find(".like-button__symbol").text("favorite")
            : $(button).find(".like-button__symbol").text("favorite_border");
    });
});
