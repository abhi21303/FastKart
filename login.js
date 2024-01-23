function validateform() {
    
    var u = document.getElementById('uid').value;
    var p = document.getElementById('pass').value;

    // Validate email
    if (u==Number ||u=="") {
        alert('Please enter a valid User Id.');
        return false;
    }

    // Validate password
    if (p=="" || p.length<8) {
        alert('Please enter a valid password.');
        return false;
    }

    // If all validations pass, submit the form
    
    return true

}