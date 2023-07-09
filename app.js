// $(document).ready(function(){
    // $("header_click").click(function(){
    //   $("slide_content").slideToggle();
    // });
  function toggleFaq(content,arrow,heading){
    $(`#${content}`).slideToggle();
    $(`#${arrow}`).toggleClass('active');
    $(`#${heading}`).toggleClass('active');
  }

//   });

function genderToggle(male,female,selected){
  const array = [male,female];
  const selectedElement = document.getElementById(selected);
  const gender = document.getElementById('genderValue');
  gender.value = ''
  array.forEach((gender) => {
     const element = document.getElementById(gender)
     element.classList.remove('active')
  })
  selectedElement.classList.add('active')
  gender.setAttribute('value', selected == 'male_btn' ? 'male' : 'female')
 }