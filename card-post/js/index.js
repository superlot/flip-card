$('.com-expand-holder').click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass('active');
  $('.card-stuff').toggleClass('active');
});