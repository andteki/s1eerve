
$('#signupForm').validate({
    rules: {
        user: {
            required: true,
            minlength: 3
        },
        pass: {
            required: true,
            minlength: 5            
        },
        confirm_pass: {
            required: true,
            minlength: 5,
            equalTo: "#pass"            
        }

    },
    messages: {
        user: {
            required: "Kötelező",
            minlength: "Legyen legalább 3 karakter"
        }
        
    }
});