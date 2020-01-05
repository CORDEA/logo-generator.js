const saveSvgAsPng = require('save-svg-as-png');

const MDCTextField = mdc.textField.MDCTextField;
const MDCRipple = mdc.ripple.MDCRipple;
const MDCSlider = mdc.slider.MDCSlider;

const foregroundTextField = new MDCTextField(document.querySelector('.foreground-text-field'));
const backgroundTextField = new MDCTextField(document.querySelector('.background-text-field'));
const frameTextField = new MDCTextField(document.querySelector('.frame-text-field'));
const scaleTextField = new MDCTextField(document.querySelector('.scale-text-field'));
new MDCRipple(document.querySelector('.mdc-button'));
const slider = new MDCSlider(document.querySelector('.mdc-slider'));

foregroundTextField.value = "#000000";
backgroundTextField.value = "#FFFFFF";
frameTextField.value = "#FFFFFF";
scaleTextField.value = "1";

document.getElementById("apply").onclick = function() {
    const background = document.getElementsByClassName("background");
    const foreground = document.getElementsByClassName("foreground");
    const frame = document.getElementsByClassName("frame");
    const foregroundStroke = document.getElementsByClassName("foreground-stroke");

    const backgroundColor = backgroundTextField.value;
    const foregroundColor = foregroundTextField.value;
    const frameColor = frameTextField.value;
    const frameAlpha = slider.value;

    for (let i = 0; i < background.length; i++) {
        background[i].setAttribute("fill", backgroundColor);
    }
    for (let i = 0; i < foreground.length; i++) {
        foreground[i].setAttribute("fill", foregroundColor);
    }
    for (let i = 0; i < foregroundStroke.length; i++) {
        foregroundStroke[i].setAttribute("stroke", foregroundColor);
    }
    for (let i = 0; i < frame.length; i++) {
        frame[i].setAttribute("fill", frameColor);
        frame[i].setAttribute("fill-opacity", frameAlpha / 100.0);
    }
}

document.getElementById("save").onclick = function() {
    const scale = scaleTextField.value;
    if (scale > 0) {
        saveSvgAsPng.saveSvgAsPng(document.getElementById("logo"), "logo.png", {scale: scale});
    }
}
