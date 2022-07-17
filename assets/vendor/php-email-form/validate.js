/**
* PHP Email Form Validation - v3.2
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  const forms = document.querySelector('.php-email-form');
    function sendMessage(e){
      debugger;
      e.preventDefault();
      
      const name = document.querySelector("[name='name']").value;
      const email = document.querySelector("[name='email']").value;
      var msg = document.querySelector("[name='message']").value;
      msg = name + " " + email + " " + "<br>" + msg;
      

      /*Email.send({
          Host : "smtp.yourisp.com",
          Username : "agaete92@gmail.com",
          Password : "cottlgbcwzrbrdoj",
          To : 'agaete92@gmail.com',
          From : email,
          Subject : "Contacto BigThinks",
          Body : msg
      }).then(
        message => alert(message)
      );*/

      let thisForm = this;
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      Email.send({
          SecureToken : "d43c4130-aa0e-4334-bb2c-06ac685e2a00 ",
          To : 'agaete92@gmail.com',
          From : 'agaete92@gmail.com',
          Subject : "Contacto BigThinks",

          Body : msg
      }).then(function (message) {

        thisForm.querySelector('.loading').classList.remove('d-block');

        if(message==="OK"){
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset();
        }else{
          displayError(thisForm, "error");
        }
       
      });
        
    }

    forms.addEventListener('submit',sendMessage);




 /* forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, error)
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      if( response.ok ) {
        return response.text()
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }*/

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }
 

})();
