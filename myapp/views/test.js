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
          <input type='button' value='A' onclick="nextQuestion1()">
          <br>
          <input type='button' value='B' onclick="nextQuestion2()">
        </body>

        <script>
          var number = 1;
          var EorI = 0;
          var SorN = 0;
          var TorF = 0;
          var PorJ = 0;
          
          var questions = new Array('E or I', 'S or N', 'T or F', 'P or J')
          document.getElementById('questionNumber').innerText = number;
          document.getElementById('questionText').innerText = questions[number-1];

          function nextQuestion1(){
            switch (number){
              case 1 :
                number=number+1;
                document.getElementById('questionNumber').innerText = number;
                document.getElementById('questionText').innerText = questions[number-1];
                EorI = EorI + 1;
                break;
              case 2 :
                number=number+1;
                document.getElementById('questionNumber').innerText = number;
                document.getElementById('questionText').innerText = questions[number-1];
                SorN = SorN + 1;
                break;
              case 3 :
                number=number+1;
                document.getElementById('questionNumber').innerText = number;
                document.getElementById('questionText').innerText = questions[number-1];
                TorF = TorF + 1;
                break;
              case 4 :
                PorJ = PorJ + 1;
                var name = '${fname}'
                var mbti = '';

                if (EorI>0) {
                  mbti = 'E';
                } else {
                  mbti = 'I';
                }

                if (SorN>0) {
                  mbti = mbti + 'S';
                } else {
                  mbti = mbti + 'N';
                }

                if (TorF>0) {
                  mbti = mbti + 'T';
                } else {
                  mbti = mbti + 'F';
                }

                if (PorJ>0) {
                  mbti = mbti + 'P';
                } else {
                  mbti = mbti + 'J';
                }

                mbtiText = mbti;

                switch (mbti) {
                  case 'ISTJ':
                    mbti=1;
                    break;
                  case 'ISTP':
                    mbti=2;
                    break;
                  case 'ISFJ':
                    mbti=3;
                    break;
                  case 'ISFP':
                    mbti=3;
                    break;
                  case 'INTJ':
                    mbti=5;
                    break;
                  case 'INTP':
                    mbti=6;
                    break;
                  case 'INFP':
                    mbti=7;
                    break;
                  case 'INFJ':
                    mbti=8;
                    break;
                  case 'ESTJ':
                    mbti=9;
                    break;
                  case 'ESTP':
                    mbti=10;
                    break;
                  case 'ESFJ':
                    mbti=11;
                    break;
                  case 'ESFP':
                    mbti=12;
                    break;
                  case 'ENTJ':
                    mbti=13;
                    break;
                  case 'ENTP':
                    mbti=14;
                    break;
                  case 'ENFP':
                    mbti=15;
                    break;
                  case 'ENFJ':
                    mbti=16;
                    break;
                }

                var form = document.createElement('form');
                form.setAttribute('method', 'post');
                form.setAttribute('action', './../fcreate');
  
                var hiddenField1 = document.createElement('input');
                hiddenField1.setAttribute('type','hidden');
                hiddenField1.setAttribute('name','name');
                hiddenField1.setAttribute('value',name);

                var hiddenField2 = document.createElement('input');
                hiddenField2.setAttribute('type','hidden');
                hiddenField2.setAttribute('name','mbti');
                hiddenField2.setAttribute('value', mbti);

                var hiddenField3 = document.createElement('input');
                hiddenField3.setAttribute('type','hidden');
                hiddenField3.setAttribute('name','mbtiText');
                hiddenField3.setAttribute('value', mbtiText);
  
                form.appendChild(hiddenField1);
                form.appendChild(hiddenField2);
                form.appendChild(hiddenField3);
  
                document.body.appendChild(form);
                form.submit();
                break;
            }
          }

          function nextQuestion2(){
            switch (number){
              case 1 :
                number=number+1;
                document.getElementById('questionNumber').innerText = number;
                document.getElementById('questionText').innerText = questions[number-1];
                break;
              case 2 :
                number=number+1;
                document.getElementById('questionNumber').innerText = number;
                document.getElementById('questionText').innerText = questions[number-1];
                break;
              case 3 :
                number=number+1;
                document.getElementById('questionNumber').innerText = number;
                document.getElementById('questionText').innerText = questions[number-1];
                break;
              case 4 :
                PorJ = PorJ - 1;
                var name = '${fname}';
                var mbti = '';

                if (EorI>0) {
                  mbti = 'E';
                } else {
                  mbti = 'I';
                }

                if (SorN>0) {
                  mbti = mbti + 'S';
                } else {
                  mbti = mbti + 'N';
                }

                if (TorF>0) {
                  mbti = mbti + 'T';
                } else {
                  mbti = mbti + 'F';
                }

                if (PorJ>0) {
                  mbti = mbti + 'P';
                } else {
                  mbti = mbti + 'J';
                }

                mbtiText = mbti;

                switch (mbti) {
                  case 'ISTJ':
                    mbti=1;
                    break;
                  case 'ISTP':
                    mbti=2;
                    break;
                  case 'ISFJ':
                    mbti=3;
                    break;
                  case 'ISFP':
                    mbti=3;
                    break;
                  case 'INTJ':
                    mbti=5;
                    break;
                  case 'INTP':
                    mbti=6;
                    break;
                  case 'INFP':
                    mbti=7;
                    break;
                  case 'INFJ':
                    mbti=8;
                    break;
                  case 'ESTJ':
                    mbti=9;
                    break;
                  case 'ESTP':
                    mbti=10;
                    break;
                  case 'ESFJ':
                    mbti=11;
                    break;
                  case 'ESFP':
                    mbti=12;
                    break;
                  case 'ENTJ':
                    mbti=13;
                    break;
                  case 'ENTP':
                    mbti=14;
                    break;
                  case 'ENFP':
                    mbti=15;
                    break;
                  case 'ENFJ':
                    mbti=16;
                    break;
                }

                var form = document.createElement('form');
                form.setAttribute('method', 'post');
                form.setAttribute('action', './../fcreate');
  
                var hiddenField1 = document.createElement('input');
                hiddenField1.setAttribute('type','hidden');
                hiddenField1.setAttribute('name','name');
                hiddenField1.setAttribute('value',name);

                var hiddenField2 = document.createElement('input');
                hiddenField2.setAttribute('type','hidden');
                hiddenField2.setAttribute('name','mbti');
                hiddenField2.setAttribute('value', mbti);

                var hiddenField3 = document.createElement('input');
                hiddenField3.setAttribute('type','hidden');
                hiddenField3.setAttribute('name','mbtiText');
                hiddenField3.setAttribute('value', mbtiText);
  
                form.appendChild(hiddenField1);
                form.appendChild(hiddenField2);
                form.appendChild(hiddenField3);
  
                document.body.appendChild(form);
                form.submit();
                break;
              }
          }
        </script>
      </html>
      `;
    }
}
