// Your jQuery goes here



var userData = {
  name: '',
  email: '',
  html: {
    likes: [],
    dislikes: []
  },
  css: {
    likes: [],
    dislikes: []
  },
  js: {
    likes: [],
    dislikes: []
  },
  strength: {
    css: '',
    js: '',
    html: ''
  },
  currentQuestion: '#welcome'
};

console.log(localStorage.getItem('userData'));


if (localStorage.getItem('userData')) {
  userData = JSON.parse(localStorage.getItem('userData'));
  $('#welcome').hide();
  $(userData.currentQuestion).show();
  $('#name').val(userData.name);
  $('#email').val(userData.email);
  $('#html').val(userData.html);
  $('#css').val(userData.css);
  $('#js').val(userData.js);
  $('#strength').val(userData.strength);
} else {
  localStorage.setItem('userData', JSON.stringify(userData));
}


$('#start').click(function() {
  $('#welcome').slideUp(500);
  $('#q1').slideDown(500);
  userData.currentQuestion = "#q1";
  localStorage.setItem('userData', JSON.stringify(userData));
});

/*
$('#name').change(function(event) {
  console.log($('#name').val());
});
*/


$('#q1next').click(function() {

  if ($('#name').val() && $('#email').val()) {
    var mailIsGo = false;
    var nameISGo = false;
    var acceptedmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var acceptedname = /^[a-zA-Z ]{2,30}$/;


    if ($('#email').val().match(acceptedmail)) {
      mailIsGo = true;
    }

    if ($('#name').val().match(acceptedname)) {
      nameISGo = true;
    }
    if (mailIsGo && nameISGo) {
      userData.name = $('#name').val();
      userData.email = $('#email').val();
      localStorage.setItem('userData', JSON.stringify(userData));
      $('#q1').fadeOut("fast");
      $('#q2').fadeIn(3000);
      userData.currentQuestion = "#q2";
      localStorage.setItem('userData', JSON.stringify(userData));
    } else if (mailIsGo) {
      alert("Please enter a valid name");
    } else if (nameISGo) {
      alert("Please enter a valid e-mail");
    } else {
      alert("Please enter a valid name and e-mail");
    }
  } else {
    alert('Please enter user name and email')
  }

});

$('#html').click(function() {
  $('#q2').slideUp(500);
  $('#q2a').slideDown(500);
  userData.currentQuestion = "#q2a";
  localStorage.setItem('userData', JSON.stringify(userData));
});

$('#css').click(function() {
  $('#q2').slideUp(500);
  $('#q2b').slideDown(500);
  userData.currentQuestion = "#q2b";
  localStorage.setItem('userData', JSON.stringify(userData));
});

$('#js').click(function() {
  $('#q2').slideUp(500);
  $('#q2c').slideDown(500);
  userData.currentQuestion = "#q2c";
  localStorage.setItem('userData', JSON.stringify(userData));
});

$('#q2a_p').click(function() {
  $('#q2a').slideUp(500);
  $('#q2').slideDown(500);
  userData.currentQuestion = "#q2";
  localStorage.setItem('userData', JSON.stringify(userData));
});

$('#q2b_p').click(function() {
  $('#q2b').slideUp(500);
  $('#q2').slideDown(500);
  userData.currentQuestion = "#q2";
  localStorage.setItem('userData', JSON.stringify(userData));
});

$('#q2c_p').click(function() {
  $('#q2c').slideUp(500);
  $('#q2').slideDown(500);
  userData.currentQuestion = "#q2";
  localStorage.setItem('userData', JSON.stringify(userData));
});

$('#q2a_n').click(function() {

  var givePassforLikes = false;
  var givePassforDislikes = false;

  for (var i = 0; i < document.getElementsByName('likesHTML').length; i++) {
    if (document.getElementsByName('likesHTML')[i].checked) {
      userData.html.likes.push(document.getElementsByName('likesHTML')[i].value);
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforLikes = true;
    }
  }
  for (var i = 0; i < document.getElementsByName('dislikesHTML').length; i++) {
    if (document.getElementsByName('dislikesHTML')[i].checked) {
      userData.html.dislikes.push(document.getElementsByName('dislikesHTML')[i].value);
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforDislikes = true;
    }
  }

  if (givePassforLikes && givePassforDislikes) {
    if (userData.css.likes.length == 0) {
      $('#q2a').fadeOut("fast");
      $('#q2b').fadeIn(1500);
      userData.currentQuestion = "#q2b";
      localStorage.setItem('userData', JSON.stringify(userData));
    } else if (userData.js.likes.length == 0) {
      $('#q2a').fadeOut("fast");
      $('#q2c').fadeIn(1500);
      userData.currentQuestion = "#q2c";
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      $('#q2a').fadeOut("fast");
      $('#q3').fadeIn(1500);
      userData.currentQuestion = "#q3";
      localStorage.setItem('userData', JSON.stringify(userData));
    }

  } else {
    alert("Please select atleast 1 like and dislike");
  }

});

$('#q2b_n').click(function() {

  var givePassforLikes = false;
  var givePassforDislikes = false;

  for (var i = 0; i < document.getElementsByName('likesCSS').length; i++) {
    if (document.getElementsByName('likesCSS')[i].checked) {
      userData.css.likes.push(document.getElementsByName('likesCSS')[i].value);
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforLikes = true;
    }
  }
  for (var i = 0; i < document.getElementsByName('dislikesCSS').length; i++) {
    if (document.getElementsByName('dislikesCSS')[i].checked) {
      userData.css.dislikes.push(document.getElementsByName('dislikesCSS')[i].value);
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforDislikes = true;
    }
  }

  if (givePassforLikes && givePassforDislikes) {
    if (userData.html.likes.length == 0) {
      $('#q2b').fadeOut("fast");
      $('#q2a').fadeIn(1500);
      userData.currentQuestion = "#q2a";
      localStorage.setItem('userData', JSON.stringify(userData));
    } else if (userData.js.likes.length == 0) {
      $('#q2b').fadeOut("fast");
      $('#q2c').fadeIn(1500);
      userData.currentQuestion = "#q2c";
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      $('#q2b').fadeOut("fast");
      $('#q3').fadeIn(1500);
      userData.currentQuestion = "#q3";
      localStorage.setItem('userData', JSON.stringify(userData));
    }


  } else {
    alert("Please select atleast 1 like and dislike");
  }

});


$('#q2c_n').click(function() {

  var givePassforLikes = false;
  var givePassforDislikes = false;

  for (var i = 0; i < document.getElementsByName('likesJS').length; i++) {
    if (document.getElementsByName('likesJS')[i].checked) {
      userData.js.likes.push(document.getElementsByName('likesJS')[i].value);
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforLikes = true;
    }
  }
  for (var i = 0; i < document.getElementsByName('dislikesJS').length; i++) {
    if (document.getElementsByName('dislikesJS')[i].checked) {
      userData.js.dislikes.push(document.getElementsByName('dislikesJS')[i].value);
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforDislikes = true;
    }
  }

  if (givePassforLikes && givePassforDislikes) {
    if (userData.html.likes.length == 0) {
      $('#q2c').fadeOut("fast");
      $('#q2a').fadeIn(1500);
      userData.currentQuestion = "#q2a";
      localStorage.setItem('userData', JSON.stringify(userData));
    } else if (userData.css.likes.length == 0) {
      $('#q2c').fadeOut("fast");
      $('#q2b').fadeIn(1500);
      userData.currentQuestion = "#q2b";
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      $('#q2c').fadeOut("fast");
      $('#q3').fadeIn(1500);
      userData.currentQuestion = "#q3";
      localStorage.setItem('userData', JSON.stringify(userData));
    }


  } else {
    alert("Please select atleast 1 like and dislike");
  }

});

$('#q3_p').click(function() {
  $('#q3').slideUp(500);
  $('#q2').slideDown(500);
  userData.currentQuestion = "#q2";
  localStorage.setItem('userData', JSON.stringify(userData));
});


$('#q3_n').click(function() {

  var givePassforhtml = false;
  var givePassforcss = false;
  var givePassforjs = false;

  for (var i = 0; i < document.getElementsByName('htmlRadio').length; i++) {
    if (document.getElementsByName('htmlRadio')[i].checked) {
      userData.strength.html = document.getElementsByName('htmlRadio')[i].value;
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforhtml = true;
      break;
    }
  }
  for (var i = 0; i < document.getElementsByName('cssRadio').length; i++) {
    if (document.getElementsByName('cssRadio')[i].checked) {
      userData.strength.css = document.getElementsByName('cssRadio')[i].value;
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforcss = true;
      break;
    }
  }

  for (var i = 0; i < document.getElementsByName('jsRadio').length; i++) {
    if (document.getElementsByName('jsRadio')[i].checked) {
      userData.strength.js = document.getElementsByName('jsRadio')[i].value;
      localStorage.setItem('userData', JSON.stringify(userData));
      givePassforjs = true;
      break;
    }
  }

  if (givePassforhtml && givePassforcss && givePassforjs) {

    $('#q3').slideUp(500);
    $('#thanks').slideDown(500);
    userData.currentQuestion = "#thanks";
    localStorage.setItem('userData', JSON.stringify(userData));

  } else {
    alert("Please select your strenths in all three fields");
  }

});

$('#delete').click(function() {
  localStorage.clear();

  alert("All your answers has been deleted");
  location.reload(true);
});

$('#view').click(function() {
  userData = JSON.parse(localStorage.getItem('userData'));

  if (userData) {
    $('#thanks').fadeOut("fast");
    $('#answers').fadeIn(1000);
    document.getElementById('viewname').innerHTML = userData.name;
    document.getElementById('viewemail').innerHTML = userData.email;
    var List = "";
    for (var i = 0; i < userData.html.likes.length; i++) {
      nameList = "<li>" + userData.html.likes[i] + "</li>";
      document.getElementById("htmllikes").innerHTML += nameList;
    }
    var List = "";
    for (var i = 0; i < userData.html.dislikes.length; i++) {
      nameList = "<li>" + userData.html.dislikes[i] + "</li>";
      document.getElementById("htmldislikes").innerHTML += nameList;
    }

    for (var i = 0; i < userData.css.likes.length; i++) {
      nameList = "<li>" + userData.css.likes[i] + "</li>";
      document.getElementById("csslikes").innerHTML += nameList;
    }
    var List = "";
    for (var i = 0; i < userData.css.dislikes.length; i++) {
      nameList = "<li>" + userData.css.dislikes[i] + "</li>";
      document.getElementById("cssdislikes").innerHTML += nameList;
    }

    for (var i = 0; i < userData.js.likes.length; i++) {
      nameList = "<li>" + userData.js.likes[i] + "</li>";
      document.getElementById("jslikes").innerHTML += nameList;
    }
    var List = "";
    for (var i = 0; i < userData.js.dislikes.length; i++) {
      nameList = "<li>" + userData.js.dislikes[i] + "</li>";
      document.getElementById("jsdislikes").innerHTML += nameList;
    }

    document.getElementById("htmlstrength").innerHTML = userData.strength.html;
    document.getElementById("cssstrength").innerHTML = userData.strength.css;
    document.getElementById("jsstrength").innerHTML = userData.strength.js;
  } else {
    alert("No data available");
  }

});
