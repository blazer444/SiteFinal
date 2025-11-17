fetch('./json/crypto.json')
    .then(res => res.json())
    .then(livros => {
        const tbody = document.querySelector('tbody');
        livros.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.sigla}</td>
                <td>${item.fundador}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao carregar JSON', error));