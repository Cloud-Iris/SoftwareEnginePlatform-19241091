window.onload = function() {
    console.log('index.js成功引入');
    if(Kernal.isLogin()) {
        initUserInfo();
    }
    console.log('成功越过一个判断');

    // 设置监听器，点击搜索按钮后，执行对应函数     可以用addEventListener添加
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });
    // 附加任务一：当用户在搜索框中按下回车键时，执行搜索函数    可以用 给对象添加属性的方式添加
    var input =  document.getElementsByTagName('input')[0];
    input.onkeydown = function(event) {
        event = event || window.event;
        // console.log(event.key);
        if (event.key==='Enter') {
            search();
        }
    }

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    })
}

function search() {
    // TODO: 搜索触发后的行为
    var inputContext = document.getElementsByTagName('input')[0].value;
    if(inputContext){
        alert(inputContext);
        // window.location.href="https://www.baidu.com/";
        /* 新知识：设置事件跳转链接  */
        window.location.href="https://www.baidu.com/s?wd="+inputContext;
    }
    else{
        alert("请输入搜索内容");
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    // var content = '<div id="user">\
    //                     <span id="user-img">\
    //                         <img src="img/user.jpg" />\
    //                     </span>\
    //                     <span id="name">' + username + '</span>\
    //                 </div>';
    console.log(username);
    console.log(username instanceof HTMLElement);


    var userDiv = document.createElement('div');
    var userImgSpan = document.createElement('span');
    var userNameSpan = document.createElement('span');
    var userImg = document.createElement('img');
    var userName = document.createTextNode(username);   // 以文本节点形式创建
    userDiv.id = 'user';
    userImgSpan.id = 'user-img';
    userNameSpan.id = 'name';
    userImg.src = 'img/user.jpg';

    userImgSpan.appendChild(userImg);
    userNameSpan.appendChild(userName);
    // userNameSpan.innerHTML = username;
    userDiv.appendChild(userImgSpan);
    userDiv.appendChild(userNameSpan);
    document.getElementById('top-right').replaceChild(userDiv, document.getElementById('top-login-btn'));
    // document.getElementById('top-right').innerHTML = content;
    // console.log(content);
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}