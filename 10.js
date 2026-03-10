let times = ["Flamengo", "Palmeiras", "São Paulo"];

// 1. Adicione "Corinthians" no final.
times.push("Corintians");

// 2. Adicione "Grêmio" no início.
times.unshift("Grêmio");

// 3. Remova o último time.
times.pop();

// 4. Encontre a posição do "Palmeiras".
console.log(times.indexOf("Palmeiras"));

// 5. Inverta a ordem dos times.
times.reverse();

console.log(times);