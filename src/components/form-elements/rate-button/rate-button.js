const toggleStar = (el) => {
    $(el).prevAll(".rate-button").find(".icon-button").text("star");
    $(el).nextAll(".rate-button").find(".icon-button").text("star_border");
};

$(".rate-buttons[data-state='undisabled']").on("mouseout", (e) => {
    const parent = e.currentTarget;
    const rate = $(parent).attr("data-rate");
    const children = $(parent).children()[rate - 1];

    toggleStar(children);
    $(children).find(".icon-button").text("star");
});

$(".rate-buttons[data-state='undisabled'] > .rate-button").on(
    "mouseover",
    (e) => {
        const star = e.currentTarget;
        const icon = $(star).find(".icon-button");

        toggleStar(star);
        icon.text("star");
    }
);
