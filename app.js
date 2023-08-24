alert('xush kelibsiz')

const players = [
    { name:  "Ronaldo", age: 37,
       teams: ["Madrid", "United"]
    },
    {  name:  "Salah",   age: 30,
      teams: ["Roma", "Liverpool"]
    },
    {
        name: "Haaland", age: 22,
        teams: ["Dortmund", "City"]
    }
];
console.table(
    players.filter(player => player.age < 32)
);
