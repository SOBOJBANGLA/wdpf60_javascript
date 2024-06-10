class Validation{
    constructor(email){
        this.email = email;

    }
    validate(){
        let pattern = /[A-z0-9._]+@[A-z0-9]+\.[A-z]{2,4}/;
        if(this.email.search(pattern)==-1){
           // alert("Please enter a valid email address");
           alert("Email is wrong")
    }else{
        //alert("Valid email address")
        alert("Email is correct")
    }

}

}