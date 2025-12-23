import { pets } from "../data/pets.js";
function vaccinesList(vaccine) {
  return `<li>${vaccine}</li>`;
}
function petDetails(details) {
  return `<article>
        <hgroup>
            <h1>${details.breed}</h1>
            <p>${details.type}</p>
        </hgroup>
        <p>${details.details}</p>
        <footer>
            <h3>Vaccines</h3>
            <ul>${details.vaccines.map(vaccinesList).join("")}</ul>
            <a href="/">Back</a>
        </footer>
    </article>`;
}

function getPetObject(obj) {
  const id = Number(window.location.hash.replace("#", ""));
  return obj.id === id;
}

function errorBanner() {
  return `<hgroup>
    <h2>Pet Id Not Found</h2>
    <p>Look again, this pet id is not present in the DB. Go back to home</p>
  </hgroup>`;
}
export default function render() {
  const pet = pets.find(getPetObject);
  if (!pet) {
    document.getElementById("app").innerHTML = errorBanner();
    return;
  }
  document.getElementById("app").innerHTML = petDetails(pet);
}
