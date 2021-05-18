module.exports = {
    HTML:function(){
      return `
      <!doctype html>
      <html>
      <head>
        <title> Digital Kids Proj. </title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1> 남들이 보는 당신의 MBTI가 궁금하신가요? </h1>
        <h3> 당신의 이름이 무엇인가요? </h3>
        <input type='text' id='name', size='10'>
        <input type='submit' value='시작' onclick="startTest()" onkeypress="if(event.keyCode==13) {startTest(); return false;}">
      </body>

      <script>
        function startTest(){
          var txt = document.getElementById("name").value;
          location.href='./' + txt + '/';
        }
        
      </script>

      </html>
      `;
    }
}