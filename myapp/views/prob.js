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
        <h1> 문제점&논의가 필요한 부분 </h1>
        <h3> url이 이름이 아닌 ID 값으로 되어야함 </h3>
        <h3> 각 질문은 고정이니깐 굳이 DB에 넣지 않아도 될듯? </h3>
        <h3> 질문 순서는 어케할건지 </h3>
        <h3> DB와의 연동을 해야함... </h3>
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