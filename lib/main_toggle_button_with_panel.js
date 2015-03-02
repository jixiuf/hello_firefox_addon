var { ToggleButton } = require("sdk/ui/button/toggle");
var tabs = require("sdk/tabs");
var panels = require("sdk/panel");
var self = require("sdk/self");

var toggleButtonWithPanel = ToggleButton({
    id: "hello_firefox_addon_toggle_button_with_panel",
    label: "Hello World hello_firefox_addon_toggle_button_with_panel",
    icon: "./my-icon-72.png",
    onChange: handleToggleButtonChange,
});
var panel =panels.Panel({
    // From Firefox 34, you can use "./myFile.html" as an alias for self.data.url("myFile.html"). So you can rewrite the above code like this:    
    width: 180,
    height: 180,
    // position: {
    //     top: 40,
    //     bottom: 100
    // },
    // position: {
    //     top: 40,
    //     bottom: 100
    // },
    contentURL:self.data.url("panel.html"),
    contentScriptFile:self.data.url("panel.js"),
    onHide:handlePanelHide,
    onShow:handlePanelShow
    
});

// data/panel.js 里需要对相应的<a href> 处理逻辑里调用此函数 ，这里才能收到事件
//self.port.emit('click-link', "panelLink"); // 这里port 一个click-link事件
panel.port.on("my-click-link",onPanelLinkIsClicked);
function onPanelLinkIsClicked(url){
    console.log("on panel link is clicked url:"+url);
    tabs.open(url);
    panel.hide();
}

function handleToggleButtonChange(state){
    console.log(state.label + " checked state: " + state.checked);
    if (state.checked) {
        // 如果不传position, 则默认在窗口正中
        // panel.show();
        panel.show({position:toggleButtonWithPanel});
        // position: {
        //     top: 40,
        //     bottom: 100
        // },
        

    }
}
function handlePanelHide(){
    // 把当前window 的button 设置成未选中状态
    console.log(" on panel hide")
     toggleButtonWithPanel.state('window', {checked: false});
}
function handlePanelShow(){
    // 把当前window 的button 设置成未选中状态
    console.log(" handlePanelShow event on main_toggle_button_with_panel.js")
    panel.port.emit("my-show-event");    // 给data/panel.js 传递事件，处理panel 显示事件
}

function handlePanelButtonClick(state){
    // 把当前window 的button 设置成未选中状态
     toggleButtonWithPanel.state('window', {checked: false}); // window or tab
}
