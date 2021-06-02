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
        <h1> ${name}의 MBTI 테스트 </h1>
        <h3> 당신의 이름이 무엇인가요? </h3>
        <input type='text' id='friend', size='10'>
        <input type='submit' value='시작' onclick="location.href='./test'">
      </body>
      </html>
      `;
    }
}
