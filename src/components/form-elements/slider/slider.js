import * as noUiSlider from "nouislider";

$(function () {
    $(".slider").each(function () {
        const start = $(this).attr("data-start").split(",").map(Number);
        const min = parseInt($(this).attr("data-min"));
        const max = parseInt($(this).attr("data-max"));
        console.log(start);
        noUiSlider.create(this, {
            start: start,
            connect: true,
            range: {
                min: min,
                max: max,
            },
            step: 200,
            cssClasses: {
                target: "target slider__target",
                origin: "origin",
                handle: "handle slider__handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                touchArea: "touch-area slider__touch-area",
                horizontal: "horizontal slider__horizontal",
                connect: "connect slider__connect",
                tap: "state-tap",
            },
            format: {
                to: function (value) {
                    return Math.round(value) + "₽";
                },
                from: function (value) {
                    return parseInt(value);
                },
            },
        });

        const valueElement = $(this)
            .closest(".slider__inner")
            .find(".slider-label__value");

        this.noUiSlider.on("update", function (values) {
            valueElement.text(values.join(" - "));
        });
    });
});
