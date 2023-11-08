
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 'vertical' for vertical slider
    loop: true, // Loop the slides
    navigation: {          
        nextEl: ".swiper-button-next",          
        prevEl: ".swiper-button-prev",        
    }
});
 var constraints = {
    creditCardNumber: {
        presence: true,
        format: {
            pattern: "\\d{10}",
            message: "must be a 10 digit number"
        }
    },
    cvv: {
        presence: true,
        format: {
            pattern: "\\d{3}",
            message: "must be a 3 digit number"
        }
    }
};

var form3 = document.getElementById('form3');

form3.addEventListener('submit', function(event) {
    event.preventDefault();
    var errors = validate(form3, constraints);
    if (errors) {
        
        console.log(errors);
    } else {
       
        form3.submit();
    }
});


document.getElementById('phone').oninvalid = function() {
    this.setCustomValidity('Please enter a 10-digit phone number.');
};

document.getElementById('phone').oninput = function() {
    this.setCustomValidity('');
};

document.getElementById('email').oninvalid = function() {
    this.setCustomValidity('Please enter a valid email address.');
};

document.getElementById('email').oninput = function() {
    this.setCustomValidity('');
};



    
   