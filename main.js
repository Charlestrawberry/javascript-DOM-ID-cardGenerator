function generateCard() {
  //Get value for std name
  const nameElement = document.getElementById("name");
  const nameElementValue = nameElement.value;
  const cardName = document.getElementById("cardName");
  cardName.innerHTML = nameElementValue;

  //Get value for college name

  const collegeName = document.getElementById("collegeName");
  const collegeNameValue = collegeName.value;

  const cardCollegeName = document.getElementById("cardCollegeName");
  cardCollegeName.innerHTML = collegeNameValue;

  //Get card location
  const location = document.getElementById("location");
  const locationValue = location.value;

  const cardLocation = document.getElementById("cardLocation");
  cardLocation.innerText = locationValue;

  document.getElementById("collegeCard").style.display = "block";
}


