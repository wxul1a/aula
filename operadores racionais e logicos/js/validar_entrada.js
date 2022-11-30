let year = (new Date()).getFullYear()

document.getElementById("btnVerufy").addEventListener("click", () =>{
    let inputValue = document.getElementById("yearOfBorn").value
    let maxYear = year - 100
    if (inputValue == "" || parseInt(inputValue) < maxYear){
        document.getElementById("errorMessage").innerText = "Campo Inválido!!!"
        setTimeout(() => {
            document.getElementById("errorMessage").innerText = ""
        },4000)
    } else {
        let yearOfBorn = parseInt(inputValue)
        let age = year - yearOfBorn
        let withMajor = document.getElementById("withMajor").checked;
        if(age >= 18){
            alert("Bem-vindo ao nosso sistema!")
        } else if (age >= 16 && withMajor){
            alert("Bem-vindo ao nosso sistema!")}
            else{
            alert("Lamento, sua entrada não é permitida!")
        }
    }
    });