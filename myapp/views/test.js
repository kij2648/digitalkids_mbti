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
        <h3> <span id="questionNumber"></span>. ${name}<span id="questionText"></span> </h3>
        <input type='button' value='A' onclick="nextQuestion()">
        <br>
        <input type='button' value='B' onclick="nextQuestion()">
      </body>

      <script>
        var number = 1;
        var questions = new Array('은 평소에 이렇다?', '은 이런 성격이다?', '은 이렇게 행동할 것이다?')
        document.getElementById('questionNumber').innerText = number;
        document.getElementById('questionText').innerText = questions[number-1];

        function nextQuestion(){ 
          if (number<3){
            number=number+1;
            document.getElementById('questionNumber').innerText = number;
            document.getElementById('questionText').innerText = questions[number-1];
          }
          else {
            location.href='./result';
          }
        }
      </script>

      </html>
      `;
    }
}