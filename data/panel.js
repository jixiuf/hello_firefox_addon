var panelButton1 = document.getElementById("panelButton1");
panelButton1.onclick=function(state){
    alert("click button on panel");
};

var panelLink = document.getElementById("panelLink");
panelLink.onclick=function(state){
    // alert("click button on panel");
    self.port.emit('click-link', panelLink.href); // 这里port 一个click-link事件
    // lib/main_toggle_button_with_panel.js 里的panel 变量会 处理此事件
    //那里的脚本就可以收到此脚本传去的事件， 进行相应的逻辑处理
    // 这里return false,不跳转到其href
    return false;
};
 