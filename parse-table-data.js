const fs = require("fs");

const convertLine = (line) => {
  return line.split("|").map((data) => `<td>${data}</td>`.replace(" ", "  ")).join("\n");
}

const main = () => {
  const data = fs.readFileSync("data.txt", "utf-8");
  const lines = data.split("\n");
  const processedData = lines.map((line) => `<tr>\n${convertLine(line)}\n</tr>`).join("\n");
  console.log(processedData);
  fs.writeFileSync("./processedData.txt", processedData);
}

main();
