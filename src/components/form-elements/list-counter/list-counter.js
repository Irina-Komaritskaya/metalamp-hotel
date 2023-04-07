// че выбрать, делать на одну кнопку и выбирать че внутри, или разделить на две кнопки.
// подумать как сделать максимум
// если младенец без взрослых  - не давать применить.
$(".list-counter__btn").on("click", (e) => {
    const button = e.currentTarget;
    const action = e.currentTarget.innerHTML;
    const otherBtn = $(button).siblings(".list-counter__btn");
    const counterEl = $(button).siblings(".list-counter__counter");
    const counterVal = counterEl.text();
    const title = $(button)
        .closest(".list-counter__item")
        .find("list-counter__item-caption")
        .text();
    const input = $(button).closest(".dropdown").find(".input");
    const defaultValue = {
        "Сколько гостей": ["гость", "гостя", "гостей"],
    };
    if (action === "+") {
        let counter = parseInt(counterVal) + 1;
        counterEl.text(counter);
        otherBtn.removeClass("list-counter__btn-disabled");
        input.val();
        console.log(input.val());
    }
});
