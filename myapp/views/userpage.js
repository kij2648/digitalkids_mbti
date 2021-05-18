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
        <h1> ${name}의 MBTI 페이지 </h1>
        
        <br>
        <br>
        -------MBTI 결과 값 표시-------
        <br>
        <br>

        <h3> ${name}의 MBTI를 알려주세요. </h3>
        <input type='button' value='MBTI 테스트 시작' onclick="location.href='./test/0'">

        <h3> 남들이 생각하는 자신의 MBTI가 궁금하다면? </h3>
        <input type='button' value='나의 Test 만들기' onclick="location.href='..'">
        
      </body>
      </html>
      `;
    }
}