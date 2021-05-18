module.exports = {
    HTML:function(name){
      return `
      <!doctype html>
      <html>
      <head>
        <title> Digital Kids Proj. - ${name} </title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1> ${name}의 MBTI는 바로! </h1>
        -------MBTI 결과 값 표시-------
        <br>
        <br>
        <input type='button' value='공유하기'>
        <h3></h3>
        <input type='button' value='전체결과 보기' onclick="location.href='.'">
      </body>
      </html>
      `;
    }
}