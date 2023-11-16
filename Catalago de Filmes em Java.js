var filmesDuh0 = "https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_F22908C6-B8BF-4E47-93AB-B2A86F9CEB0D_2023-10-20-T13-49-42.jpg?s=260x371";
var filmesDuh1 = "https://pm1.aminoapps.com/6994/76f67afcdbb2173d182ec91be2ed2d3fef02566ar1-669-900v2_00.jpg";
var filmesDuh2 = "https://m.media-amazon.com/images/S/pv-target-images/e9610afd08e9a136c0051fc2b6fd3c04facb6b318512e9e9dac904a55c8da645.jpg";
var filmesDuh3 = "https://cdn.dc5.ro/img-prod/5949025004820-1605385.jpg";

var listaFilmes = [
  "https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_F22908C6-B8BF-4E47-93AB-B2A86F9CEB0D_2023-10-20-T13-49-42.jpg?s=260x371",
  "https://pm1.aminoapps.com/6994/76f67afcdbb2173d182ec91be2ed2d3fef02566ar1-669-900v2_00.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/e9610afd08e9a136c0051fc2b6fd3c04facb6b318512e9e9dac904a55c8da645.jpg",
  "https://cdn.dc5.ro/img-prod/5949025004820-1605385.jpg",
  "https://www.imfdb.org/images/thumb/0/06/HU_BD_cover.jpg/300px-HU_BD_cover.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Takers.jpg/220px-Takers.jpg"
];

var listaNomesDosFilmes = ["Ronin", "DB Torneio do Poder", "O Último Portal", "007 contra GoldenEye", "Hellsing Ultimate", "Takers"];

document.write("<table>");

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<tr>");
  document.write("<td><img src=" + listaFilmes[i] + "></td>");
  document.write("<td>" + listaNomesDosFilmes[i] + "</td>");
  document.write("</tr>");
}

document.write("</table>");
