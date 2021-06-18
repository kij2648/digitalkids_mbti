module.exports = {
    HTML:function(name, mbtiText, fruit, exp, detail){
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
          <link rel="icon" type="image/png" sizes="96x96" href="./public/images/favicon-96x96.png">
        </head>
        <body>
          <h1> ${name}의 MBTI는 바로! </h1>
          <h3> ${mbtiText}!! </h3>
          <h3> ${name}은 ${fruit}같고 아래와 같은 사람이야 </h3>
          <h3> ${exp} : ${detail} </h3>
          <br>
          <br>
          <input type="button" onclick="sendLinkCustom();" value="공유하기"/>
          <h3></h3>
          <input type='button' value='전체결과 보기' onclick="location.href='.'">
        </body>
        <script>
          function sendLinkCustom(){
            Kakao.Link.sendCustom({
              templateId: 54203,
            });
          }
        </script>
      </html>
      `;
    }
}
