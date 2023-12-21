import "../../../../node_modules/paginationjs/dist/pagination";
$(function () {
    const pageSize = 12;
    const dataContainer = "";
    const dataSize = 180;
    const countPage = Math.ceil(dataSize / pageSize);
    $(".pagination__item").first().hide();

    $(".pagination__item").on("click", (e) => {
        const item = e.currentTarget;
        const parent = $(item).closest(".pagination__items");
        const firstItem = parent.find(".pagination__item").first();
        const lastItem = parent.find(".pagination__item").last();
        const number = $(item).text();
        const title = $(item).closest(".pagination").find(".pagination__title");
        parent
            .find(".pagination__item-active")
            .removeClass("pagination__item-active");

        $(item).addClass("pagination__item-active");

        if (number === "1") {
            parent
                .find(".pagination__item")
                .first()
                .hide({ direction: "left" }, 500);
        }
        if (number != "1") {
            firstItem.show({ direction: "left" }, 500);
        }

        if (number === countPage.toString()) {
            lastItem.hide({ direction: "right" }, 500);
        }

        if (number != countPage.toString()) {
            lastItem.show({ direction: "right" }, 500);
        }
    });
});
