module.exports = {
    HTML:function(name, fname){
      return `
      <!doctype html>
      <html>
        <head>
          <title> Digital Kids Proj. - ${name} </title>
          <meta charset="utf-8">
          <link rel="icon" type="image/png" sizes="96x96" href="/public/images/favicon-96x96.png">
        </head>
        <body>
          <h1> ${name}의 MBTI 테스트 </h1>
          <h3> <span id="questionNumber"></span>. ${name}<span id="questionText"></span> </h3>
          <input type='button' value='A' onclick="nextQuestion()">
          <br>
          <input type='button' value='B' onclick="nextQuestion()">
        </body>

        <script>
          var number = 1;
          var questions = new Array('는(은) 평소에 이렇다?', '는(은) 이런 성격이다?', '는(은) 이렇게 행동할 것이다?')
          document.getElementById('questionNumber').innerText = number;
          document.getElementById('questionText').innerText = questions[number-1];

          function nextQuestion(){ 
            if (number<3){
              number=number+1;
              document.getElementById('questionNumber').innerText = number;
              document.getElementById('questionText').innerText = questions[number-1];
            }
            else {
              var name = '${fname}'

              var form = document.createElement('form');
              form.setAttribute('method', 'post');
              form.setAttribute('action', './../fcreate');

              var hiddenField = document.createElement('input');
              hiddenField.setAttribute('type','hidden');
              hiddenField.setAttribute('name','name');
              hiddenField.setAttribute('value',name);

              form.appendChild(hiddenField);

              document.body.appendChild(form);
              form.submit();
            }
          }
        </script>
      </html>
      `;
    }
}
