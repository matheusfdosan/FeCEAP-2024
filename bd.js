const sqlite3 = require("sqlite3").verbose();
const bd = new sqlite3.Database("./siteFeceap.bd");

// Find Update Create Kill - FUCK

bd.serialize(function () {
  // CREATE TABLE
  bd.run(`CREATE TABLE IF NOT EXISTS project(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        img TEXT,
        title TEXT,
        categoria TEXT,
        descricao TEXT,
        url TEXT
       );`);


  // INSERT ITEM
  const query = `INSERT INTO project(img, title, categoria, descricao, url)  VALUES (?, ?, ?, ?, ?);`;

  const values = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvyGcW0WaLAua31jA1rcb-GbvbZdY5ow4EQ&s",
    "Robótica simples: Criando um carrinho movido a elástico",
    "Tecnologia",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    "https://mpaautomacao.com/",
  ];
  bd.run(query, values, function (err) {
    if (err) throw console.error(err);
  });


  // READ 
  bd.all("SELECT * FROM project", function(err, rows) {
    if (err) throw console.error(err)
    console.log(rows);
  })

  
  // KILL
});
