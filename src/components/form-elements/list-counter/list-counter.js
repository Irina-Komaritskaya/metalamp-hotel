$(function () {
    const countableNames = {
        guests: ["гость", "гостя", "гостей"],
        roomsParam: {
            спальни: ["спальня", "спальни", "спален"],
            кровати: ["кровать", "кровати", "кроватей"],
            "ванные комнаты": ["ванная", "ванны", "ванн"],
        },
    };
    const getCountableNames = (value, words) => {
        value = Math.abs(value) % 100;
        let num = value % 10;
        if (value > 10 && value < 20) return words[2];
        if (num > 1 && num < 5) return words[1];
        if (num == 1) return words[0];
        return words[2];
    };

    const sumValues = (contentValues, names) => {
        let sum = 0;
        let content = "";
        for (const [key, values] of Object.entries(contentValues)) {
            sum += values;
        }
        if (sum != 0) {
            content = `${sum} ${getCountableNames(sum, names)}`;
        }
        return content;
    };
    const sumEachItemValue = (contentValues, names) => {
        const arr = [];
        for (const [key, value] of Object.entries(contentValues)) {
            arr.push(`${value} ${getCountableNames(value, names[key])}`);
        }
        const content = arr.join(", ");
        return content;
    };

    const getBtnElements = (target) => {
        const title = $(target)
            .closest(".list-counter__item")
            .find(".list-counter__item-title")
            .text();
        const counterEl = $(target).siblings(".list-counter__counter");
        let counter = parseInt(counterEl.text());
        return { title, counter, counterEl };
    };

    $.each($(".list-counter"), function () {
        let values = {
            guests: {},
            roomsParam: {},
        };

        const btnPlus = $(this).find(".list-counter__btn_plus");
        const btnMinus = $(this).find(".list-counter__btn_minus");
        const content = $(this).closest(".list-counter").attr("data-content");
        let contentValues = values[content];
        const parentEl = $(this).closest("." + $(this).attr("data-for"));
        const btnApply = $(this).find(".list-counter__confirmButtons-btnApply");
        const btnClear = $(this).find(".list-counter__confirmButtons-btnClear");

        const functionForContent = {
            guests: sumValues,
            roomsParam: sumEachItemValue,
        };

        $(btnPlus).on("click", (e) => {
            let { title, counter, counterEl } = getBtnElements(e.currentTarget);
            const minusBtn = $(e.currentTarget).siblings(
                ".list-counter__btn_minus"
            );
            contentValues[title] = contentValues[title]
                ? contentValues[title] + 1
                : 1;
            counter += 1;
            counterEl.text(counter);
            minusBtn.removeClass("list-counter__btn-disabled");

            if (btnClear) {
                btnClear.show();
            }

            const valueForDisplay = functionForContent[content](
                contentValues,
                countableNames[content]
            );

            $(parentEl).trigger("changeCountListCounter", {
                target: e.currentTarget,
                count: valueForDisplay,
            });
        });

        $(btnMinus).on("click", (e) => {
            let { title, counter, counterEl } = getBtnElements(e.currentTarget);
            if (counter != 0) {
                contentValues[title] = contentValues[title]
                    ? contentValues[title] - 1
                    : 0;
                counter = counter - 1;
                counterEl.text(counter);
            }
            if (counter === 0) {
                $(e.currentTarget).addClass("list-counter__btn-disabled");
            }
            if (btnClear) {
                const sum = Object.values(values[content]).reduce(
                    (acc, val) => acc + val,
                    0
                );
                if (sum === 0) {
                    $(btnClear).hide();
                }
            }
            const valueForDisplay = functionForContent[content](
                contentValues,
                countableNames[content]
            );

            $(parentEl).trigger("changeCountListCounter", {
                target: e.currentTarget,
                count: valueForDisplay,
            });
        });

        $(btnClear).on("click", (e) => {
            const counterEl = $(this).find(".list-counter__counter");
            values = {
                guests: {},
                roomsParam: {},
            };
            contentValues = {};
            counterEl.text("0");
            $(parentEl).trigger("clearListCounter", {
                target: e.currentTarget,
            });
            $(btnClear).hide();
        });

        $(btnApply).on("click", (e) => {
            const counterEl = $(this).find(".list-counter__counter");
            values = {
                guests: {},
                roomsParam: {},
            };
            contentValues = {};
            counterEl.text("0");
            $(parentEl).trigger("applyListCounter", {
                target: e.currentTarget,
            });
            $(btnClear).hide();
        });
    });
});
