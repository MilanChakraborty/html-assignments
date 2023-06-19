const {readFileSync} = require("fs");

const chunk = function(list, size) {
  if(list.length === 0) return list;

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size);
  return [currentChunk].concat(chunk(remaining, size));
}

const processCard = (card) => {
  const [name, types, _, hp, xp, att, def, weight] = card.split("|");
  const spacedType = types.replace(",", ", ");
  const processedCard = `<div class="card">
  <div class="pokemon-avatar"></div>
  <p class="poke-name">${name}</p>
  <table class="poke-details">
  <tr>
  <th class="specification">Types</th>
  <td class="values">${spacedType}</td>
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
</div>`;

  return processedCard;
}

const processCardRows = (cardRow) => {
  const processedCardRows = `<div class="card-row">
  ${cardRow.map(processCard).join("\n")}
  </div>`

  return processedCardRows;
}

const main = () => {
  const rawData = readFileSync("data.txt", "utf-8");
  const cards = rawData.split("\n");
  const cardRows = chunk(cards, 5, 0);
  const processedCardRows = `<section class="cards">
  ${cardRows.map(processCardRows).join("")};
  </section>`;
  console.log(processedCardRows);
}

main();