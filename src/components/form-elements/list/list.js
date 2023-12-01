$(function () {
    const listExpand = $(".list").filter("[data-expand='true']");
    const openedList = listExpand
        .find("[data-open='false']")
        .find(".list__content-item");
    openedList.hide();

    $(".list__expand-button").on("click", (e) => {
        const button = e.currentTarget;
        const contentItems = $(button)
            .closest(".list")
            .find(".list__content-item");

        if ($(contentItems).is(":hidden")) {
            $(contentItems).slideDown();
            $(button).css({ transform: "rotate(180deg)" });
        } else {
            $(contentItems).slideUp();
            $(button).css({ transform: "rotate(0deg)" });
        }
    });
});
