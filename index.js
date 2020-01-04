const MDCTextField = mdc.textField.MDCTextField;
const MDCRipple = mdc.ripple.MDCRipple;

const foregroundTextField = new MDCTextField(document.querySelector('.foreground'));
const backgroundTextField = new MDCTextField(document.querySelector('.background'));
new MDCRipple(document.querySelector('.mdc-button'));

foregroundTextField.value = "#00000000";
backgroundTextField.value = "#00FFFFFF";
