const {readFileSync} = require("fs");

const processCard = (card) => {
  const [pokeID, name, types, _, hp, xp, att, def, weight] = card.split("|");
  const spacedCategories = types.replace(",", " ");
  const pokeIDInThreeDigit = pokeID.padStart(3, 0);
  const processedCard = `<div class="card">
  <div class="pokemon-avatar-container">
  <img class="pokemon-avatar" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIDInThreeDigit}.png"/>
  </div>
  <p class="poke-name">${name}</p> 
  <table class="poke-details">
  <tr>
  <th class="specification">Types</th>
  <td class="values">${spacedCategories}</td>
  </tr>
  <tr>
  <th class="specification">Weight</th>
  <td class="values">${weight}</td>
  </tr>
  <tr>
  <th class="specification">HP</th>
  <td class="values">${hp}</td>
  </tr>
  <tr>
  <th class="specification">XP</th>
  <td class="values">${xp}</td>
  </tr>
  <tr>
  <th class="specification">Attack</th>
  <td class="values">${att}</td>
  </tr>
  <tr>
  <th class="specification">Defence</th>
  <td class="values">${def}</td>
  </tr>
  </table>
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