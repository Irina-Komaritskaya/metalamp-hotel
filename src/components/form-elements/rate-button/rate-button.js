$(".rate-button").on("mouseover", (e) => {
    const star = e.currentTarget;
    const state = $(star).closest(".rate-buttons").attr("data-state");
    if (state === "undisabled") {
        const icon = $(star).find(".icon-button");
        const text = icon.text() === "star_border" ? "star" : "star_border";
        $(star).nextAll(".rate-button").find(".icon-button").text(text);
    }
});
