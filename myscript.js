function Population(name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
var pName = document.getElementById("name");
var data = new Population(pName, gender, address, education, profession);
console.log(data.name);