$(function () {
    const dateFinishBtn = $(".dateRange__dateFinish").find(".input__button");
    $(dateFinishBtn).on("click", (e) => {
        const dateStartBtn = $(".dateRange__dateStart").find(".input__button");
        $(dateStartBtn).click();
    });
});
