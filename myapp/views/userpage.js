module.exports = {
    HTML:function(name){
      return `
      <!doctype html>
      <html>
      <head>
        <title> Digital Kids Proj. - ${name} </title>
        <meta charset="utf-8">
        <link rel="icon" type="image/png" sizes="96x96" href="./public/images/favicon-96x96.png">
      </head>
      <body>
        <h1> ${name}의 MBTI 페이지 </h1>
        
        <br>
        <br>
        -------MBTI 결과 값 표시-------
        <br>
        <br>

        <h3> ${name}의 MBTI를 알려주세요. </h3>
        <input type='button' value='MBTI 테스트 시작' onclick="urlRedirect()">
        <h3> 남들이 생각하는 자신의 MBTI가 궁금하다면? </h3>
        <input type='button' value='나의 Test 만들기' onclick="location.href='..'">
        
      </body>
      <script>
        var url33 = window.location.href
        var lastChar = url33.slice(-1)
        function urlRedirect(){
          if(lastChar == "/"){
            location.href=window.location.href+'friend'
          } else {
            location.href=window.location.href+'/friend'
          }
        }
      </script>
      </html>
      `;
    }
}
