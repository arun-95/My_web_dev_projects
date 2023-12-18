let users=[];
addUser=()=>{
    let name= document.getElementById('name');
    let email=document.getElementById('mail');

    let user={
        name : name.value ,
        email: email.value 
    }

    let isExist = users.filter((data)=>{
        return (data.email === email.value);
    });
    console.log("Filter result :",isExist);

    if(isExist.length===0){
        users.push(user);
    }
    else{
        console.log("Email exists");
    }
    
    console.log("Users : ",users)
} 


