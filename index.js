const MDCTextField = mdc.textField.MDCTextField;
const MDCRipple = mdc.ripple.MDCRipple;

const foregroundTextField = new MDCTextField(document.querySelector('.foreground-text-field'));
const backgroundTextField = new MDCTextField(document.querySelector('.background-text-field'));
const frameTextField = new MDCTextField(document.querySelector('.frame-text-field'));
new MDCRipple(document.querySelector('.mdc-button'));

foregroundTextField.value = "#00000000";
backgroundTextField.value = "#00FFFFFF";
frameTextField.value = "#00FFFFFF";

function onClick() {
    const background = document.getElementsByClassName("background");
    const foreground = document.getElementsByClassName("foreground");
    const frame = document.getElementsByClassName("frame");
    const foregroundStroke = document.getElementsByClassName("foreground-stroke");

    const backgroundColor = backgroundTextField.value;
    const foregroundColor = foregroundTextField.value;
    const frameColor = frameTextField.value;

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
    }
}
