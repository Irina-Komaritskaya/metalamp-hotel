// подумать как сделать максимум
// поведение при нуле при минусе
// если младенец без взрослых  - не давать применить.
const values = {};
const getNameForGuests = (guests) => {
    guests = guests % 10;
    if (guests === 1) {
        return "гость";
    }
    if (guests < 5) {
        return "гостя";
    }
    if (guests >= 5) {
        return "гостей";
    }
    return "";
};
$(".list-counter__btn").on("click", (e) => {
    const button = e.currentTarget;
    const action = e.currentTarget.innerHTML;
    const siblingsBtn = $(button).siblings(".list-counter__btn");
    const counterEl = $(button).siblings(".list-counter__counter");
    const counterVal = counterEl.text();
    const parentEl = "." + $(button).closest("ul").attr("data-for");
    const title = $(button)
        .closest(".list-counter__item")
        .children(".list-counter__item-title")
        .text();
    const input = $(button).closest(parentEl).find(".input");
    let counter = parseInt(counterVal);

    if (action === "+") {
        values[title] = values[title] ? values[title] + 1 : 1;
        console.log(values);
        counter += 1;
        counterEl.text(counter);
        siblingsBtn.removeClass("list-counter__btn-disabled");
    }
    if (action === "-") {
        if (counter === 0) {
            $(button).addClass("list-counter__btn-disabled");
        } else {
            values[title] = values[title] ? values[title] - 1 : 0;
            counter = counter - 1;
        }
        counterEl.text(counter);
    }

    const content = $(button).closest("ul").attr("data-content");
    let contentValue = "";
    if (content === "guests") {
        let sumGuests = 0;
        for (const [key, value] of Object.entries(values)) {
            sumGuests += value;
        }
        contentValue = `${sumGuests} ${getNameForGuests(sumGuests)}`;
    }
    $(parentEl).trigger("changeCount", {
        target: e.currentTarget,
        count: contentValue,
    });
});
