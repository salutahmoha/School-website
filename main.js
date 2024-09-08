window.addEventListener('scroll', ()=>{
    document.querySelector('navbar').classList.toggle('window-scroll', window.scrollY > 0)
})

//show/hide answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className==='bi bi-plus'){
            icon.className = "bi bi-dash";
        }else{
            icon.className = "bi bi-plus";
        }
    })
})

  // Close the navbar when a link is clicked
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
