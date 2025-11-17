const moedas = ['bitcoin', 'ethereum', 'binancecoin', 'ripple', 'solana'];

async function atualizarPrecos() {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${moedas.join(',')}&vs_currencies=brl&include_24hr_change=true`);
    const dados = await response.json();

    let html = '';
    for (const id of moedas) {
      const nome = id.charAt(0).toUpperCase() + id.slice(1);
      const preco = dados[id].brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const variacao = dados[id].brl_24h_change.toFixed(2).replace('.', ',');
      const classe = variacao >= 0 ? 'sobe' : 'desce';

      html += `<div class="moeda">${nome}: R$ ${preco} <span class="${classe}">(${variacao}%)</span></div>`;
    }

    document.getElementById('precos').innerHTML = html;
  } catch (error) {
    document.getElementById('precos').innerHTML = "Erro ao carregar preços.";
    console.error(error);
  }
}

atualizarPrecos();
setInterval(atualizarPrecos, 10000);