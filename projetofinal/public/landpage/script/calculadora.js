document.getElementById('converter').addEventListener('click', async function () {
    const crypto = document.getElementById('crypto').value;
    const moeda = document.getElementById('moeda').value;     
    const amount = document.getElementById('amount').value;

    if (!amount) {
        alert('Por favor, insira uma quantidade.');
        return;
    }

    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${crypto.toLowerCase()}&vs_currencies=${moeda.toLowerCase()}`
        );
        const data = await response.json();

        const rate = data[crypto.toLowerCase()][moeda.toLowerCase()];
        const resultado = (parseFloat(amount) * rate).toFixed(2);

        document.getElementById('resultado').textContent = `${amount} ${crypto} = ${resultado} ${moeda}`;
    } catch (error) {
        document.getElementById('resultado').textContent = 'Erro ao obter os dados. Tente novamente mais tarde.';
        console.error(error);
    }
});
