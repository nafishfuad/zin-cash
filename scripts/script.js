document.getElementById("btn-login").addEventListener("click", 
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        
        if (accountNumber.length===11) {
            if (pinNumber==='1234') {
                window.location.href ="main.html"
            } else {
                alert('Your pin is incorrect')
            }
        } else {
            alert('Your Number is incorrect')
        }
        
})