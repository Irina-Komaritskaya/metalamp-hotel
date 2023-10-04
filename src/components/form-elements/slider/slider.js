import * as noUiSlider from "nouislider";

noUiSlider.create(slider, {
    start: [3000, 7000],
    connect: true,
    range: {
        min: 0,
        max: 10000,
    },
    step: 200,
    cssClasses: {
        target: "target slider__target",
        base: "base",
        origin: "origin",
        handle: "handle slider__handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area slider__touch-area",
        horizontal: "horizontal slider__horizontal",
        background: "background",
        connect: "connect slider__connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    },
});
