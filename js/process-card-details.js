const {readFileSync} = require("fs");

const processCard = (card) => {
  const [pokeID, name, types, _, hp, xp, att, def, weight] = card.split("|");
  const spacedCategories = types.replace(",", " ");
  const pokeIDInThreeDigit = pokeID.padStart(3, 0);
  const processedCard = `      <div class="card">
  <div class="pokemon-avatar-container">
    <img class="pokemon-avatar" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIDInThreeDigit}.png" />
  </div>
  <p class="poke-name">${name}</p>
  <div class="poke-details">
    <div class="specification">
      <div class="category">Types</div>
      <div class="value">${spacedCategories}</div>
    </div>
    <div class="specification">
      <div class="category">Weight</div>
      <div class="value">${weight}</div>
    </div>
    <div class="specification">
      <div class="category">HP</div>
      <div class="value">${hp}</div>
    </div>
    <div class="specification">
      <div class="category">XP</div>
      <div class="value">${xp}</div>
    </div>
    <div class="specification">
      <div class="category">Attack</div>
      <div class="value">${att}</div>
    </div>
    <div class="specification">
      <div class="category">Defence</div>
      <div class="value">${def}</div>
    </div>
  </div>
</div>`

  return processedCard;
}

const main = () => {
  const rawData = readFileSync("./resources/pokemon-data.txt", "utf-8");
  const cards = rawData.split("\n");
  const processedCardRows = `<section class="cards">
  ${cards.map(processCard).join("\n")}
  </section>`
  console.log(processedCardRows);
}

main();