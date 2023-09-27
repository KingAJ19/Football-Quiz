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
     {
        question: "Who won the man of the match award for the 2014 World Cup final?",
        choices: ['Mario Götze', 'Sergio Romero', 'Martín Demichelis', 'Lionel Messi'],
        correctAnswer: 'Mario Götze'  
     },
     {
      question: "Who was the first non-European to win the Ballon d'Or?",
      choices: ['Ronaldo', 'Pelé', 'George Weah', 'Rivaldo'],
      correctAnswer: 'George Weah'  
     },
     {
      question: "What Was Cristiano Ronaldo’s First Club?",
      choices: ['West Ham', 'Benfica', 'Sporting Lisbon', 'Bestikas'],
      correctAnswer: 'Sporting Lisbon'  
     },
     {
      question: "Who Is The All-Time Top Scorer In La Liga?",
      choices: ['Luis Figo', 'Francesco Beroni', 'Cristiano Ronaldo', 'Messi'],
      correctAnswer: 'Messi'  
     },
     {
      question: "Which football club does David Beckham play for last?",
      choices: ['Manchester United', 'Liverpool', 'Real Madrid', 'PSG'],
      correctAnswer: 'PSG'  
     },
     {
      question: "Which former Barcelona Player Is Famous For Biting Other Players?",
      choices: ['Didier Drogba', 'David Luiz', 'Luis Suarez', 'Lionel Messi'],
      correctAnswer: 'Luis Suarez'  
     },
     {
      question: "What Is The Nickname Of Manchester United?",
      choices: ['The Red Lions', 'The Gunners', 'The Old Lady', 'The Red Devils'],
      correctAnswer: 'The Red Devils'  
     },
     {
      question: "What Is The German Soccer League Called?",
      choices: ['The Bundesliga', 'The Blitzliga', 'The Volksliga', 'The Reichsliga'],
      correctAnswer: 'The Bundesliga'  
     },
     {
      question: "Which English club was the first to win the European Cup in 1968?",
      choices: ['Tottenham Hotspur', 'Manchester United', 'Liverpool', 'Chelsea'],
      correctAnswer: 'Manchester United'  
     },
     {
      question: "Who is the all-time top scorer for the German national team?",
      choices: ['Gerd Müller', 'Lukas Podolski', 'Miroslav Klose', 'Thomas Müller'],
      correctAnswer: 'Miroslav Klose'  
     },
     {
      question: "Who is the youngest player to ever score in a World Cup tournament?",
      choices: ['Pelé', 'Manuel Rosas', 'Gavi', 'Michael Owen'],
      correctAnswer: 'Pelé'  
     },
     {
      question: "Which club did Jürgen Klopp manage before joining Liverpool?",
      choices: ['Bayern Munich', 'E. Frankfurt', 'Borussia Dortmund', 'FSV Mainz 05'],
      correctAnswer: 'Borussia Dortmund'  
     },
     {
      question: "Which player holds the record for the most goals scored in a single Premier League season?",
      choices: ['Alan Shearer', 'Erling Haaland', 'Luis Suarez', 'Cristiano Ronaldo'],
      correctAnswer: 'Erling Haaland'  
     },
     {
      question: "Which club has won the most FA Cup titles?",
      choices: ['Manchester City', 'Manchester United', 'Arsenal', 'Chelsea'],
      correctAnswer: 'Arsenal'  
     },
     {
      question: "Which manager won the UEFA Champions League three times in a row with Real Madrid from 2016 to 2018?",
      choices: ['Zinedine Zidane', 'Carlo Ancelotti', 'Rafael Benítez', 'Santiago Solari'],
      correctAnswer: 'Zinedine Zidane'  
     },
     {
      question: "Who is the only goalkeeper to have won the Ballon d'Or?",
      choices: ['Iker Casillas', 'Manuel Neuer', 'Edwin van der Sar', 'Lev Yashin'],
      correctAnswer: 'Lev Yashin'  
     },
     {
      question: "Which club has won the most Scottish Premiership titles?",
      choices: ['Heart of Midlothian', 'Rangers', 'Celtic', 'Aberdeen'],
      correctAnswer: 'Rangers'  
     },
     {
      question: "Which club did Thierry Henry play for before joining Arsenal?",
      choices: ['QPR', 'Juventus', 'AS Monaco', 'Chelsea'],
      correctAnswer: 'AS Monaco'  
     },
     {
      question: "Who was the manager of the Liverpool team that won the UEFA Champions League in 2005, coming back from a 3-0 deficit to win on penalties?",
      choices: ['Bob Paisley', 'Roy Evans', 'Kenny Dalglish', 'Rafael Benítez'],
      correctAnswer: 'Rafael Benítez'  
     },
     {
      question: "Which stadium is known as 'The Theatre of Dreams'?",
      choices: ['Anfield', 'Stamford Bridge', 'Old Trafford', 'Selhurst Park'],
      correctAnswer: 'Old Trafford'  
     },
     {
      question: "In which year was the Video Assistant Referee (VAR) system first introduced in official competitions?",
      choices: ['2017', '2021', '2015', '2013'],
      correctAnswer: '2017'  
     },
     {
      question: "Which country won the UEFA European Championship in 2004, causing one of the biggest upsets in tournament history?",
      choices: ['Wales', 'Greece', 'Hungary', 'Denmark'],
      correctAnswer: 'Greece'  
     },
     {
      question: "Which team is nicknamed 'The Baggies'?",
      choices: ['Milwall', 'Preston', 'West Bromwich Albion', 'Blackburn Rovers'],
      correctAnswer: 'West Bromwich Albion'  
     },
     {
      question: "Which club did Alan Shearer win the Premier League title with?",
      choices: ['Newcastle United', 'Leicester City', 'Burnley', 'Blackburn Rovers'],
      correctAnswer: 'Blackburn Rovers'  
     },
     {
      question: "The Scudetto is the name given to the league title in which European country?",
      choices: ['Spain', 'Italy', 'England', 'Germany'],
      correctAnswer: 'Italy'  
     },
     {
      question: "Red Bull own a football club based in which Austrian city?",
      choices: ['Schalke', 'Hertha', 'Fürth', 'Salzburg'],
      correctAnswer: 'Salzburg'  
     },
     {
      question: "Which 2 teams play in The Barcelona Derby?",
      choices: ['Barcelona & Sevilla', 'Barcelona & Atletico Madrid', 'Barcelona & Espanyol', 'Barcelona & Real Madrid'],
      correctAnswer: 'Barcelona & Espanyol'  
     },
     {
      question: "Which footballer has won the Premier League with both Leicester City and Manchester City?",
      choices: ['Riyad Mahrez', 'NGolo Kanté', 'Kasper Schmeichel', 'Marc Albrighton'],
      correctAnswer: 'Riyad Mahrez'  
     },
     {
      question: "Which player had 13 years between his 2 Champions League wins in 1995 and 2008?",
      choices: ['Eden Hazard', 'Edwin Van Der Sar', 'Lionel Messi', 'Cristiano Ronaldo'],
      correctAnswer: 'Edwin Van Der Sar'  
     },
     {
      question: "How many times has England won the UEFA Women’s Championship?",
      choices: ['1', '3', '0', '6'],
      correctAnswer: '1'  
     },
     {
      question: "In which year was the first UEFA European Championship held?",
      choices: ['1970', '1965', '1960', '1959'],
      correctAnswer: '1960'  
     },
     {
      question: "The Brazilian legend Romario played 5 seasons for which Dutch club before moving to Barcelona?",
      choices: ['Twente', 'Feyenoord', 'PSV Eindhoven', 'Ajax'],
      correctAnswer: 'PSV Eindhoven'  
     },
     {
      question: "Which company has sponsored the EFL Trophy since 2020?",
      choices: ['Castore', 'Papa Johns', 'Capital One', 'Jameson'],
      correctAnswer: 'Papa Johns'  
     },
     {
      question: "In what year was the Women’s Football Association established in England?",
      choices: ['1987', '1969', '1950', '1975'],
      correctAnswer: '1969'  
     },
     {
      question: "What is Juventus’ nickname?",
      choices: ['The Hatters', 'The Seagulls', 'The Old Lady', 'The Cherries'],
      correctAnswer: 'The Old Lady'  
     },
     {
      question: "In what football league does ‘The Beckham Rule’ apply?",
      choices: ['Eredivise', 'MLS', 'Ligue 1', 'LaLiga'],
      correctAnswer: 'MLS'  
     },
     {
      question: "Who is the most capped England player with 125 appearances?",
      choices: ['Jamie Vardy', 'Raheem Sterling', 'Harry Kane', 'Peter Shilton'],
      correctAnswer: 'Peter Shilton'  
     },
     {
      question: "Who scored the first ever goal in the Premier League?",
      choices: ['Peter Beagrie', 'Brian Deane', 'Alan Shearer', 'Sol Campbell'],
      correctAnswer: 'Brian Deane'  
     },
     {
      question: "What country did Eusébio play international football for?",
      choices: ['Portugal', 'France', 'Ecuador', 'Italy'],
      correctAnswer: 'Portugal'  
     },
     {
      question: "Which football club as a stand named after Sir Elton John?",
      choices: ['Aston Villa', 'Watford', 'Chelsea', 'Norwich'],
      correctAnswer: 'Watford'  
     },
     {
      question: "In what year did the women’s England football team play their first ever international game?",
      choices: ['1980', '1972', '1956', '1990'],
      correctAnswer: '1972'  
     },
     {
      question: "Which English club was the first to win the European Cup twice?",
      choices: ['Tottenham Hotspur', 'Liverpool', 'Chelsea', 'Manchester United'],
      correctAnswer: 'Liverpool'  
     },
     {
      question: "Which 2 countries hosted the 2002 FIFA World Cup?",
      choices: ['England & Japan', 'South Korea & Japan', 'Germany & France', 'Italy & France'],
      correctAnswer: 'South Korea & Japan'  
     },
     {
      question: "Which striker was the first to score more than 20 goals in the Premier League for 5 consecutive seasons?",
      choices: ['Ashley Cole', 'Harry Kane', 'Sergio Aguero', 'Thierry Henry'],
      correctAnswer: 'Thierry Henry'  
     },
     {
      question: "Tranbzonspor are a football club based in which country?",
      choices: ['Turkey', 'Netherlands', 'France', 'Engalnd'],
      correctAnswer: 'Turkey'  
     },
     {
      question: "Reece James spent the 2019/20 season on loan at which club?",
      choices: ['Wycombe', 'Derby County', 'Wigan Athletic', 'Portsmouth'],
      correctAnswer: 'Wigan Athletic'  
     },
     {
      question: "At which club did Frank Lampard start his professional career?",
      choices: ['Leicester City', 'Chelsea', 'Burnley', 'West Ham'],
      correctAnswer: 'West Ham'  
     },
     {
      question: "Who is the Bundesliga’s all-time top goalscorer?",
      choices: ['Gerd Müller', 'Robert Lewandowski', 'Klaus Fischer', 'Jupp Heynckes'],
      correctAnswer: 'Gerd Müller'  
     },
     {
      question: "Which England goalkeeper saved a penalty against Scotland at UEFA Euro 1996?",
      choices: ['Gordon Banks', 'David Seaman', 'Peter Bonetti', 'Alex Stepney'],
      correctAnswer: 'David Seaman'  
     },
     {
      question: "What stadium is home to Bayern Munich?",
      choices: ['Old Trafford', 'Camp Nou', 'Allianz Arena', 'San Siro'],
      correctAnswer: 'Allianz Arena'  
     },
     {
      question: "Deli Ali moved to Tottenham Hotspur from which EFL club?",
      choices: ['Gillingham', 'Bradford City', 'Notts County', 'MK Dons'],
      correctAnswer: 'MK Dons'  
     },
     {
      question: "How many teams play in the group stages of the UEFA Champions League?",
      choices: ['36', '34', '32', '33'],
      correctAnswer: '32'  
     },
     {
      question: "Who were the first team to win the European Cup in 1956?",
      choices: ['Chelsea', 'Real Madrid', 'Liverpool', 'Manchester United'],
      correctAnswer: 'Real Madrid'  
     },
     {
      question: "Name the three players who shared the Premier League Golden Boot in 2019.",
      choices: ['Pierre-Emerick Aubameyang, Sadio Mane and Sergio Aguero', 'Pierre-Emerick Aubameyang, Sadio Mane and Mohamed Salah', 'Pierre-Emerick Aubameyang, Roberto Firmino and Mohamed Salah', 'Harry Kane, Sadio Mane and Mohamed Salah'],
      correctAnswer: 'Pierre-Emerick Aubameyang, Sadio Mane and Mohamed Salah'  
     },
     {
      question: "Which nation has won the African Cup of Nations the most?",
      choices: ['Egypt', 'Algeria', 'Senegal', 'Nigeria'],
      correctAnswer: 'Egypt'  
     },
     {
      question: "How many teams originally competed in the Premier League?",
      choices: ['20', '23', '22', '25'],
      correctAnswer: '22'  
     },
     {
      question: "Which Argentinian club did Lionel Messi play for as a youth?",
      choices: ['Racing Club', 'Boca Juniors', 'Newell’s Old Boys', 'River Plate'],
      correctAnswer: 'Newell’s Old Boys'  
     },
     {
      question: "Which football club in 1993 became the first to win the FA Cup and League Cup in the same season?",
      choices: ['Chelsea', 'Arsenal', 'Liverpool', 'Manchester United'],
      correctAnswer: 'Arsenal'  
     },
     {
      question: "Which Frenchman was the first foreign player to win the PFA Player of the Year award?",
      choices: ['Patrick Viera', 'Thierry Henry', 'Zinedine Zidane', 'Eric Cantona'],
      correctAnswer: 'Eric Cantona'  
     },
     {
      question: "Which club set a Premier League record for most goals scored in a match away from home when they beat Southampton 9-0?",
      choices: ['Leicester City', 'Manchester United', 'Chelsea', 'Newcastle United'],
      correctAnswer: 'Leicester City'  
     },
     {
      question: "What is the Dutch Super cup also known as?",
      choices: ['Rimet Cup', 'Durand Cup', 'Johan Cruyff Shield', 'Witkamp Cup'],
      correctAnswer: 'Johan Cruyff Shield'  
     },
     {
      question: "Jaap Stam managed which English club?",
      choices: ['Stevenage', 'Reading', 'Oxford Utd', 'Bristol Rovers'],
      correctAnswer: 'Reading'  
     },
     {
      question: "Which nation won UEFA Euro 1992 despite not initially qualifying?",
      choices: ['wales', 'Norway', 'Japan', 'Denmark'],
      correctAnswer: 'Denmark'  
     },
     {
      question: "Which player holds the record for the most Premier League appearances with 653 games?",
      choices: ['Gareth Barry', 'Ryan Giggs', 'James Milner', 'Gary Speed'],
      correctAnswer: 'Gareth Barry'  
     },
     {
      question: "What is Newcastle United’s mascot called?",
      choices: ['Filbert Fox', 'Billy The Badger', 'Monty Magpie', 'Cherry Bear'],
      correctAnswer: 'Monty Magpie'  
     },
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
