module.exports = {
    HTML:function(){
      return `
      <!doctype html>
      <html>
        <head>
          <title> Digital Kids Proj. </title>
          <meta charset="utf-8">
          <link rel="icon" type="image/png" sizes="96x96" href="/public/images/favicon-96x96.png">
        </head>
        <body>
          <h1> 남들이 보는 당신의 MBTI가 궁금하신가요? </h1>
          <h3> 당신의 이름은 무엇인가요? </h3>
          <form action='/create' method='post'>
            <input type='text' name='name' size='10'>
            <input type='submit' value='시작'>
          </form>
        </body>
      </html>
      `;
    }
}