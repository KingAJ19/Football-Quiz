(function() {
    var questions = [{
      question: "Which player scored the fastest hat-trick in the Premier League?",
      choices: ['Mane', 'Fowler', 'Defoe', 'Messi', 'Carroll'],
      correctAnswer: 'Mane'
    }, {
      question: "Three players share the record for most Premier League red cards (8). Name one of them.",
      choices: ['Patrick Vieira', 'Richard Dunne', 'Alan Shearer', 'Sergio Ramos', 'Duncan Ferguson'],
      correctAnswer: 'Patrick Vieira' + 'Richard Dunne' + 'Duncan Ferguson'
    }, {
      question: "With 260 goals, who is the Premier League's all-time top scorer?",
      choices: ['Alan Shearer', 'Wayne Rooney', 'Frank Lampard', 'Michael Owen', 'Mohamed Salah'],
      correctAnswer: 'Alan Shearer'
    }, {
      question: "When was the inaugural Premier League season?",
      choices: ['1990-1991', '1992-93', '1989-1990', '2005-2006', '1994-1995'],
      correctAnswer: '1992-93'
    }, {
      question: "Which team won the first Premier League title?",
      choices: ['Arsenal', 'Manchester City', 'Chelsea', 'Manchester United', 'Liverpool'],
      correctAnswer: 'Manchester United'
    }, {
       question: "With 202 clean sheets, which goalkeeper has the best record in the Premier League?",
       choices: ['Petr Cech', 'Ben Foster', 'David De Gea', 'Hugo Lloris', 'Tim Howard'],
       correctAnswer: 'Petr Cech'  
    },{
        question: "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
        choices: ['Philip Billing', 'Christian Eriksen', 'Chris Sutton', 'Ledley King', 'Shane Long'],
        correctAnswer: 'Shane Long'  
     },{
        question: "Which country won the first ever World Cup in 1930?",
        choices: ['Spain', 'Netherlands', 'Italy', 'Uruguay', 'South Korea'],
        correctAnswer: 'Uruguay'  
     },{
        question: "Which country has won the most World Cups?",
        choices: ['Mexico', 'Brazil', 'Argentina', 'Germany', 'Sweden'],
        correctAnswer: 'Brazil'  
     },{
        question: "Which country has appeared in three World Cup finals, but never won the competition?",
        choices: ['England', 'Italy', 'Netherlands', 'Denmark', 'Norway'],
        correctAnswer: 'Netherlands'  
     },{
        question: "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
        choices: ['Spain 1982', 'France 1998', 'Mexico 1986', 'Argentina 1978', 'Italy 1990'],
        correctAnswer: 'Mexico 1986'  
     },{
        question: "Which Portuguese team did Ronaldo play for before signing for Manchester United?",
        choices: ['S.C Braga', 'Boavista FC', 'S.L Benfica', 'Sporting', 'FC Porto'],
        correctAnswer: 'Sporting'  
     },{
        question: "Which club has won the most Champions League titles?",
        choices: ['AC Milan', 'Ajax', 'Real Madrid', 'Liverpool', 'Bayern Munich'],
        correctAnswer: 'Real Madrid'  
     },{
        question: "The 2022 World Cup was held in Qatar. Name the only other side to host the tournament without previously competing in the competition?",
        choices: ['Germany', 'Sweden', 'Uruguay', 'Chile', 'South Africa'],
        correctAnswer: 'South Africa'  
     },{
        question: "Which city is home to two La Liga clubs?",
        choices: ['Bilbao', 'Valencia', 'Madrid', 'Seville', 'Barcelona'],
        correctAnswer: 'Madrid'  
     },{
        question: "Who was the last English player to win the Golden Boot in the Premier League?",
        choices: ['Sadio Mane', 'Daniel Sturridge', 'Wayne Rooney', 'Harry Kane', 'Kevin Philips'],
        correctAnswer: 'Harry Kane'  
     },
    //  {
    //     question: "",
    //     choices: [],
    //     correctAnswer: ''  
    //  },
    ];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('You got ' + numCorrect + ' questions out of ' +
                   questions.length + ' right!!!');
      return score;
    }
  })();