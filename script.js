const formE1 =document.getElementById('form');
formE1.addEventListener("submit", function(e){
e.preventDefault();
console.log(e);
const nameValue=e.target[0].value.trim();
const ageValue=e.target[1].value.trim();
console.log(nameValue)

if(nameValue.trim().length<3){
    Err['name']='Name is too short';

}elseif(nameValue.length>20);{
    Err['name']='Name is too long';
}
if(Err && 'name' in err){
    document.getElementById('name-err').innerText=Err['name'];
}

if(ageValue>120){
    err['age']="Age is not valid";

}else if(AgeValue<0){
err['age']="Age is not valid";
}

if(err && 'age' in err){
    document.getElementById('age-err').innerText=Err['age'];
}
})