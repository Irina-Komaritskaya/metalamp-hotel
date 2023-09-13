$(function () {
    const listExpand = $(".list").filter("[data-expand='true']");
    const openedList = listExpand.find("[data-open='false']");
    openedList.hide();

    $(".list__expand-button").on("click", (e) => {
        const button = e.currentTarget;
        const contentItems = $(button)
            .closest(".list")
            .find(".list__content-item");

        if ($(contentItems).is(":hidden")) {
            console.log(contentItems);
            console.log($(contentItems).is(":hidden"));
            $(contentItems).slideDown();
        } else {
            $(contentItems).slideUp();
        }
    });
});
