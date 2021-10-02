const validation=(user)=>{

    let errors={};
    
    if(!user.name){
        errors.name="Username is required"
    }

    if(!user.email){
        errors.email="Email is required"
    }else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(user.email)) {
        errors.email="Email is invalid"
    }
    
    if(!user.password){
        errors.password="password is required"
    }else if(user.password.length<5){
        errors.password="password must be more than five charaters."
    }
    return errors;
}

export default validation;