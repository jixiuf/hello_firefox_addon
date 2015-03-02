var { ToggleButton } = require("sdk/ui/button/toggle");
var tabs = require("sdk/tabs");

var toggleButton = ToggleButton({
    id: "hello_firefox_addon_toggle_button",
    label: "Hello World hello_firefox_addon_toggle_button",
    icon: "./my-icon-72.png",
    onChange: handleToggleButtonChange,
    onClick: handleToggleButtonFirstClick
});

function handleToggleButtonFirstClick(state){
    console.log(state.label + " first click : ");
    toggleButton.on("click",handleToggleButtonLaterClick)
    toggleButton.removeListener("click",handleToggleButtonFirstClick)
}
function handleToggleButtonLaterClick(state){
    console.log(state.label + " later click : ");
}
function handleToggleButtonChange(state){
    console.log(state.label + " checked state: " + state.checked);
    // window.alert("state",state.checked);
}