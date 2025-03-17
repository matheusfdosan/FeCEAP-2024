const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

nunjucks.configure("views", {
  express: app,
  noCache: true,
})

const projects = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8ioiLOm86eQmxG4Xcpgtw-QvUBG3ACoAjw&s",
    title: "O advento de battle royalle, um estudo sobre Free Fire",
    category: "Administração",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTup-NSOuxvCebubrugZFewahpSYFFZU9NsTA&s",
    title: "Por que a Terra NÃO é plana?",
    category: "Ciências",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://i.ytimg.com/vi/BfcmXI6BxvM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDNi1urUBl4AewnykXV8YD1kt6fKg",
    title: "Satélite caseiro",
    category: "Engenharia",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqYE0wSOM66Np-06ip2jZPtZEHQclJhjzLw&s",
    title: "Como os Video Games inspiram nossa criatividade",
    category: "Criatividade",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://content.nationalgeographic.pt/medio/2023/09/29/tungurahua-equador_f3f3b898_230929121306_800x533.jpg",
    title: "A química dos vulcões: O que faz a lava brilhar?",
    category: "Química",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://portalsolar-images.s3.us-east-2.amazonaws.com/institucional-and-info-production/images/62c812d3-77bf-471f-bd45-1393eec5b0aa/energia-solar.jpg",
    title: "Energia solar: Construindo um painel com materiais reciclados",
    category: "Engenharia",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWAs3FBw0pzT9ojpnpiQwoORqMc0O6cavJw&s",
    title: "O impacto das plantas na qualidade do ar",
    category: "Biologia",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvyGcW0WaLAua31jA1rcb-GbvbZdY5ow4EQ&s",
    title: "Robótica simples: Criando um carrinho movido a elástico",
    category: "Tecnologia",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
    url: "#",
  },
]

app.use(express.static("public"))

app.get("/", (req, res) => {
  return res.render("index.html", { projects: projects.splice(projects.length - 3, projects.length) })
})

app.get("/projects", (req, res) => {
  return res.render("projects.html", { projects })
})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/")
})
