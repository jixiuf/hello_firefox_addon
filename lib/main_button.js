var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
    id: "hello_firefox_addon_button",
    label: "Hello World hello_firefox_addon_button",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png",
    },
    onClick: handleClick
});

function handleClick(state){
    tabs.open("https://github.com/");
}
