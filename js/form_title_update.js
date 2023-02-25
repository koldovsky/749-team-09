(()=>{
  function changeFormTitle(){
    const formHeader = document.querySelector('.contacts__form-header');
    if(formHeader.textContent === 'Join Our Coworking Community!'){
      formHeader.innerText =  'We are happy for new friends JOIN US!!';
    }
    else formHeader.innerText =  'Join Our Coworking Community!';
  }
  
  setInterval(changeFormTitle, 5000);
})()