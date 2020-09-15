import express from "express";
import path from "path"; // "path" <- path 라는 패키지에서 갖고옴

// express를 app에 넣는다.
const app = express();

// PORT = 3000
const PORT = 3000;

// app.js 에게 퍼그를 써야한다고 신호를 줌
// view engine <- 키워드
app.set("view engine", "pug");

// app.js 에게 CSS나 js는 /assets에 있음
app.use(express.static(path.join(__dirname, "/assets")));

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`💌   ${PORT} Server Start`);
});
