const headers = {"Access-Control-Allow-Headers":"*", 'Access-Control-Allow-Origin':"*"};

const inputName = document.getElementById("nameInput");
const inputAge = document.getElementById("ageInput");
const inputAbility = document.getElementById("abilityInput");
const submitButton = document.getElementById("subBtn");
const finalMsg = document.getElementById('finalMsg');
submitButton.addEventListener("click", gogo)

async function gogo(){
    const userInfo = await axios.post("http://localhost:3000/", JSON.stringify({name:inputName.value, age:inputAge.value, ability: inputAbility.value}));
    document.getElementById("finalMsg").innerText = userInfo.data;
    console.log(userInfo);
}