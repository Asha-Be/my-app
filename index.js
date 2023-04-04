const{ format } = require('date-fns');
//date-fns 모듈에서 format 함수를 가져옴


var date = new Date();
console.log(date);

// yyyy-mm-dd 4자리 연도, 2자리 월 , 2 자리 일


// format(날짜 변수 입력 , 포맷) <공식
var formatDate = format( date, "yyyy-MM-dd");
var Datedate = format ( date, "MM-dd" );
    //MM:mm:ss << 시 분 초

console.log(formatDate);
console.log(Datedate);
console.log(formatDate, Datedate);