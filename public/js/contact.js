

(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {

        var contactForm = $('#contact-form');

        contactForm.on('submit', function (e) {
            window.setTimeout(function () {
                var errors = $('.has-error');
                if (errors.length) {
                    $('html, body').animate({scrollTop: 150}, 500);
                }
            }, 0);

            // if the validator does not prevent form submit
            if (!e.isDefaultPrevented()) {
                var url = "includes/contact-form.php";

                // POST values in the background the the script URL
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function (data)
                    {
                        // data = JSON object that contact.php returns
                        var result = JSON.parse(data);
                        console.log(result);

                        // we recieve the type of the message: success x danger and apply it to the
                        var messageAlert = 'alert-' + result.type;
                        var messageText = result.message;

                        // let's compose Bootstrap alert box HTML
                        var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                        // If we have messageAlert and messageText
                        if (messageAlert && messageText) {
                            // inject the alert to .messages div in our form
                            $('.messages').html(alertBox);
                            // empty the form
                            contactForm[0].reset();
                        }
                    }
                });
                return false;
            }
        });

    });

})(jQuery);


/*=================================================================== Validate ===*/
function showValidate (input) {
    $(input).next('.tooltip-validate').addClass('show-tooltip');
    $(input).next().next('.symbol-validate').css('display','block');
}

function hideValidate (input) {
    $(input).next('.tooltip-validate').removeClass('show-tooltip');
    $(input).next().next('.symbol-validate').css('display','none');
}

$('#contact-form').on('submit',function(){
    var check = true;

    if($('#name').val().trim() == ''){
        showValidate($('#name'));
        check=false;
    }
    else{
        hideValidate($('#name'));
    }

    if($('#msg').val().trim() == ''){
        showValidate($('#msg'));
        check=false;
    }
    else{
        hideValidate($('#msg'));
    }
    

    if($('#email').val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        showValidate($('#email'));
        check=false;
    }
    else{
        hideValidate($('#email'));
    }

    return check;
});


$('.input-form').each(function(){
    $(this).focus(function(){
         hideValidate(this);
    });
});
