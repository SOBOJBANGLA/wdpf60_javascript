class Validation{
    constructor(email){
       // super(email, password);
        this.email = email;
       

}

emailCheck(){
    let pattern = /[A-z0-9]+@[A-z]+\.[A-z]/;
    if(this.email.search(pattern) == -1){
        alert("Email is not Valid");
    }else{
        alert(" Valid");
    }

}


}