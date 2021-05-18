module.exports = {
    HTML:function(number, name){
      return `
      <!doctype html>
      <html>
      <head>
        <title> Digital Kids Proj. - ${name} </title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1> ${name}의 MBTI 테스트 </h1>
        <h3> ${number}. ${name}은 평소에? </h3>
        <input type='button' value='A' onclick="pageNumbering()">
        <br>
        <input type='button' value='B' onclick="pageNumbering()">
      </body>

      <script>
        function pageNumbering(){
          if (Number(${number})<3){
            location.href='./${number}';
          }
          else {
            location.href='../result';
          }
        }
      </script>

      </html>
      `;
    }
}