export const listaVencedores = (ano) => 
  fetch(`https://ergast.com/api/f1/${ano}/results/1.json`).then(res => res.json());

export const listaCampeao = (ano) =>
    fetch(`https://ergast.com/api/f1/${ano}/driverStandings/1.json`).then(res => res.json());