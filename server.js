// server.js

const express = require('express');
const app = express();
const port = 3002;

// 정적 파일을 제공하기 위해 Express에게 'public' 디렉토리를 사용하도록 지시합니다.
app.use(express.static(__dirname));

// 로그인 페이지로 들어오는 요청에 대한 처리
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// 작성 페이지로 들어오는 요청에 대한 처리
app.get('/test2', (req, res) => {
    res.sendFile(__dirname + '/test2.html');
});


// 작성 페이지로 들어오는 요청에 대한 처리
app.get('/view', (req, res) => {
    res.sendFile(__dirname + '/view.html');
});

// 서버를 지정한 포트로 실행합니다.
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}/login 에서 실행 중입니다.`);
});
