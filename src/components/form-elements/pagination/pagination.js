import "../../../../node_modules/paginationjs/dist/pagination";
// свой пагинат
$("#pagination").pagination({
    dataSource: function (done) {
        var result = [];
        for (var i = 1; i < 196; i++) {
            result.push(i);
        }
        done(result);
    },
    pageSize: 12,
    showNavigator: true,
    autoHideNext: true,
    autoHidePrevious: true,
    classPrefix: "1",
    className: "pagination",
    ulClassName: "pagination__pages",
    pageClassName: "pagination__page",
    activeClassName: "pagination__button-active",
    callback: function (data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    },
});
