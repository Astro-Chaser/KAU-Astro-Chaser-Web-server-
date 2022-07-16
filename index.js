
// node_modules의 express 패키지를 가져온다.
var express = require('./config/express')
var expressForStatic = require("express");

//app이라는 변수에 express 함수의 변환 값을 저장한다.
var app = express()

//환경변수에서 port를 가져온다. 환경변수가 없을시 8000포트를 지정한다.
var port = app.listen(process.env.PORT || 8000);

// 정적 파일 불러오기
app.use(expressForStatic.static(__dirname + "/frontWEB/static"));

//html 정의 시작
//1. index 페이지
app.get('/', function(req, res) {
    res.sendFile(__dirname+"/frontWEB/index.html");
})
app.get('/m', function(req, res) {
    res.sendFile(__dirname+"/frontWEB/mobile_index.html");
})

app.get('/user/signup', function(req, res) {
    res.sendFile(__dirname+"/frontWEB/signup.html");
})

app.get('/user/signin', function(req, res) {
    res.sendFile(__dirname+"/frontWEB/signin.html");
})

//2. 망원경 관련 페이지
app.get('/telescopes/owned', function(req, res) {
    res.sendFile(__dirname+"/frontWEB/telescopes.html");
})

app.get('/telescopes/manual', function(req, res) {
    res.sendFile(__dirname+"/frontWEB/telescope-setting.html");
})

//3. 사진 게시판 페이지
app.get('/chasing-history', function(req, res){
    res.sendFile(__dirname+"/frontWEB/pictureNoticeBoard.html")
})
app.get('/chasing-history/1', function(req, res){
    res.sendFile(__dirname+"/frontWEB/pictureNoticeBoardSample1.html")
})
app.get('/chasing-history/2', function(req, res){
    res.sendFile(__dirname+"/frontWEB/pictureNoticeBoardSample2.html")
})


// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(port, function() {
    console.log('start! express server');
})