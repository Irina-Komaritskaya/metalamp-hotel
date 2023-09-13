// подумать как сделать максимум
// поведение при нуле при минусе
// если младенец без взрослых  - не давать применить.
$(".list-counter__btn").on("click", (e) => {
    const button = e.currentTarget;
    const action = e.currentTarget.innerHTML;
    const otherBtn = $(button).siblings(".list-counter__btn");
    const counterEl = $(button).siblings(".list-counter__counter");
    const counterVal = counterEl.text(); //0???
    const parentEl = "." + $(button).closest("ul").attr("data-for");
    const title = $(button)
        .closest(".list-counter__item")
        .find("list-counter__item-caption")
        .text();
    const input = $(button).closest(parentEl).find(".input");
    let counter = parseInt(counterVal);

    if (action === "+") {
        counter += 1;
        counterEl.text(counter);
        otherBtn.removeClass("list-counter__btn-disabled");
        input.val();
    }
    if (action === "-") {
        if (counter === 0) {
            $(button).addClass("list-counter__btn-disabled");
            input.val("");
        } else {
            counter = counter - 1;
        }
        counterEl.text(counter);
    }
    $(parentEl).trigger("changeCount", {
        target: e.currentTarget,
        count: counter,
    });
});
