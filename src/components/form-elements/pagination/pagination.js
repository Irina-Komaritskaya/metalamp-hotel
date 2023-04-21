import "../../../../node_modules/paginationjs/dist/pagination";
$(function () {
    const pageSize = 12;
    const dataContainer = "";
    const dataSize = 196;
    const countPage = dataSize / pageSize;
    $(".pagination__item").first().addClass("pagination__item-hide");
});

$(".pagination__item").on("click", (e) => {
    const item = e.currentTarget;
    const parent = $(item).closest(".pagination__items");
    const number = $(item).text();
    parent
        .find(".pagination__item-active")
        .removeClass("pagination__item-active");

    $(item).addClass("pagination__item-active");

    if (number === "1") {
        parent
            .find(".pagination__item")
            .first()
            .addClass("pagination__item-hide");
    }
    if (number != "1") {
        // или если последняя
        parent
            .find(".pagination__item-hide")
            .removeClass("pagination__item-hide");
    }
});

// свой пагинат
// $("#pagination").pagination({
//     dataSource: function (done) {
//         var result = [];
//         for (var i = 1; i < 196; i++) {
//             result.push(i);
//         }
//         done(result);
//     },
//     pageSize: 12,
//     showNavigator: true,
//     autoHideNext: true,
//     autoHidePrevious: true,
//     classPrefix: "1",
//     className: "pagination",
//     ulClassName: "pagination__pages",
//     pageClassName: "pagination__page",
//     activeClassName: "pagination__button-active",
//     callback: function (data, pagination) {
//         // template method of yourself
//         var html = template(data);
//         dataContainer.html(html);
//     },
// });
