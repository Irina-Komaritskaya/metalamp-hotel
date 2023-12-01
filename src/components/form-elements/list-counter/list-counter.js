$(function () {
    let values = {
        guests: {},
        roomsParam: {},
    };
    const getNameForNumbers = (value, words) => {
        value = Math.abs(value) % 100;
        let num = value % 10;
        if (value > 10 && value < 20) return words[2];
        if (num > 1 && num < 5) return words[1];
        if (num == 1) return words[0];
        return words[2];
    };

    $(".list-counter__btn").on("click", (e) => {
        const button = e.currentTarget;
        const action = e.currentTarget.innerHTML;
        const content = $(button).closest("ul").attr("data-content");
        const siblingsBtn = $(button).siblings(".list-counter__btn");
        const counterEl = $(button).siblings(".list-counter__counter");
        const counterVal = counterEl.text();
        const parentEl = "." + $(button).closest("ul").attr("data-for");
        const title = $(button)
            .closest(".list-counter__item")
            .children(".list-counter__item-title")
            .text();
        let counter = parseInt(counterVal);
        const contentValues = values[content];

        if (action === "+") {
            contentValues[title] = contentValues[title]
                ? contentValues[title] + 1
                : 1;
            counter += 1;
            counterEl.text(counter);
            siblingsBtn.removeClass("list-counter__btn-disabled");
        }
        if (action === "-") {
            if (counter === 0) {
                $(button).addClass("list-counter__btn-disabled");
            } else {
                contentValues[title] = contentValues[title]
                    ? contentValues[title] - 1
                    : 0;
                counter = counter - 1;
            }
            counterEl.text(counter);
        }

        let contentValue = "";
        if (content === "guests") {
            const names = ["гость", "гостя", "гостей"];
            let sumGuests = 0;
            for (const [key, value] of Object.entries(contentValues)) {
                sumGuests += value;
            }
            contentValue = `${sumGuests} ${getNameForNumbers(
                sumGuests,
                names
            )}`;
        }
        if (content === "roomsParam") {
            const names = {
                спальни: ["кровать", "кровати", "кроватей"],
                кровати: ["спальня", "спальни", "eспален"],
                "ванные комнаты": ["ванная", "ванны", "ванн"],
            };
            let roomsParam = [];
            for (const [key, value] of Object.entries(contentValues)) {
                roomsParam.push(
                    `${value} ${getNameForNumbers(value, names[key])}`
                );
            }
            console.log(contentValues);
            contentValue = roomsParam.join(", ");
        }
        $(parentEl).trigger("changeCountListCounter", {
            target: e.currentTarget,
            count: contentValue,
        });
    });

    $(".list-counter__confirmButtons-btnClear").on("click", (e) => {
        const button = e.currentTarget;
        const parentEl =
            "." +
            $(button).closest(".list-counter").find("ul").attr("data-for");
        values = {
            guests: {},
            roomsParam: {},
        };
        const countVal = $(button)
            .closest(".list-counter")
            .find(".list-counter__counter")
            .text(0);
        $(parentEl).trigger("clearListCounter", {
            target: e.currentTarget,
            value: values,
        });
    });

    $(".list-counter__confirmButtons-btnApply").on("click", (e) => {
        const button = e.currentTarget;
        const parentEl =
            "." +
            $(button).closest(".list-counter").find("ul").attr("data-for");
        $(parentEl).trigger("applyListCounter", {
            target: e.currentTarget,
        });
        console.log(parentEl);
    });
});
