function requestMethod(par1,par2,par3,callback) {
    var xhr=new XMLHttpRequest();
//2、建立与服务端的链接（GET/POST）
    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
//设置头信息，让数据以表单的形式传递给服务器
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
//3、发送请求
    xhr.send(par3);//发起异步请求
//4、接受服务端返回的数据
    xhr.onreadystatechange=function () {
        //readyState==4,（Ajax）代表数据请求完成。
        //status==200，表示数据成功返回
        if(xhr.readyState==4&&xhr.status==200){
            //responseText包含了从服务器返回的数据
            var res=JSON.parse(xhr.responseText);
            var str=res.data;
            callback(str);
        }
    }
}
function requstMethod2(par1,par2,title_cont,subTitle_cont,info_cont){
    //1、创建请求对象xhr
    var xhr=new XMLHttpRequest();
    //2、建立与服务端的链接（GET/POST）
    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
    //设置头信息，让数据以表单的形式传递给服务器
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //3、发送请求
    xhr.send();
    //4、接受服务端返回的数据
    xhr.onreadystatechange=function () {
        //readyState==4,（Ajax）代表数据请求完成。
        //status==200，表示数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText包含了从服务器返回的数据
            var res = JSON.parse(xhr.responseText);
            title_cont.innerHTML=res.data.title;
            subTitle_cont.innerHTML=res.data.subTitle;
            info_cont.innerHTML=res.data.info;
        }
    }
}