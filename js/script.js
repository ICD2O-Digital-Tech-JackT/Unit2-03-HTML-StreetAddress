function SubmitNameAndAge(){
  let Name = document.getElementById("Name").value
  let Age = document.getElementById("Age").value
  document.getElementById("UserNameAndAge").innerHTML ="Your name is "+Name+" and you are "+Age+" years old."
}