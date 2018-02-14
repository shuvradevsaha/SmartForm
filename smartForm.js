// Your jQuery goes here

var userData = {

name :'',
email : '',
html : {likes :[], dislikes:[]},
css : {likes :[], dislikes:[]} ,
js : {likes :[], dislikes:[]} ,
strength: {css: '', js: '', html: ''} ,
currentQuestion : '#welcome'


};

if(localStorage.getItem('userData'))
{
  userData= JSON.parse(localStorage.getItem('userData'));

  $('#welcome').hide();
  $(userData.currentQuestion).show();
  $('#name').val(userData.name);
  $('#email').val(userData.email);
}

else
{
  localStorage.setItem('userData', JSON.stringify(userData));
}

$('#start').click(function()
{
  console.log("start");
  $('#welcome').hide();
  $('#q1').show();
  userData.currentQuestion="#q1";
  localStorage.setItem('userData' , JSON.stringify(userData));
});

$('name').change(function(event)
{
  //console.log(event);
  console.log($('#name').val());
});

$('#next').click(function()
{
  if($('#name').val() && $('#email').val())
  {
  userData.name= $('name').val();
  userData.email= $('email').val();
  $('#welcome').hide();
  $('#q1').hide();
  $('#q2').show();
}

else
{
  alert('Please Enter Name & email');
}
});
