module.exports = {
    HTML:function(name){
      return `
      <!doctype html>
      <html>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script>
          Kakao.init('c8f7878f4038f5985f8e341026cae60d');
          console.log(Kakao.isInitialized());
        </script>

        <head>
          <title> Digital Kids Proj. - ${name} </title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1> ${name}의 MBTI는 바로! </h1>
          -------MBTI 결과 값 표시-------
          <br>
          <br>
          <input type="button" onclick="sendLinkCustom();" value="Custom"/>
          <h3></h3>
          <input type='button' value='전체결과 보기' onclick="location.href='.'">
        </body>
        <script>
          function sendLinkCustom(){
            Kakao.Link.sendCustom({
              templateId: 587461,
            });
          }
        </script>
      </html>
      `;
    }
}