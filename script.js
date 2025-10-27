


    function showPage(page) {
        const content = document.getElementById("content");

        if (page === 'home') {
            content.innerHTML = `
                <h1>Witamy w Good Food!</h1>
                <p>Tu znajdziesz najlepsze potrawy w mieście.</p>
            `;
        }

        if (page === 'menu') {
            content.innerHTML = `
                <h1>Nasze dania</h1>

                <div class="sortowanie">
                    <label>Sortuj według ceny:</label>
                    <select id="sortSelect" onchange="aktualizujListe()">
                        <option value="asc">Od najtańszych</option>
                        <option value="desc">Od najdroższych</option>
                    </select>
                </div>

                <div class="filtr">
                    <label><b>Filtruj kategorię:</b></label>
                    <select id="filterSelect" onchange="aktualizujListe()">
                        <option value="Wszystko">Wszystko</option>
                        <option value="Zupa">Zupy</option>
                        <option value="Danie główne">Dania główne</option>
                        <option value="Przystawka">Przystawki</option>
                        <option value="Ciasto">Ciasta</option>
                        <option value="Napój">Napoje</option>
                    </select>
                </div>
<br>
                <div id="dania-list"></div>
            `;
            aktualizujListe();
        }

        if (page === 'rezerwacje') {
            content.innerHTML = `
                <h1>Rezerwacje</h1>
                <p>Zarezerwuj stolik dzwoniąc pod numer: <strong>123-456-789</strong></p>
            `;
        }

        if (page === 'kontakt') {
            content.innerHTML = `
                <h1>Kontakt</h1>
                <p>📍 Adres: ul. Prószkowska 76, Opole</p>
                <p>📞 Telefon: 123-456-789</p>
                <p>📧 Email: kontakt@goodfood.pl</p>
            `;
        }
    }

    const dania = [
    { nazwa: "Pizza Margherita", cena: 25, kategoria: "Danie główne" },
    { nazwa: "Spaghetti Bolognese", cena: 28, kategoria: "Danie główne" },
    { nazwa: "Burger Klasyczny", cena: 30, kategoria: "Danie główne" },

    { nazwa: "Zupa pomidorowa", cena: 15, kategoria: "Zupa" },
    { nazwa: "Rosół", cena: 14, kategoria: "Zupa" },

    { nazwa: "Sałatka Grecka", cena: 20, kategoria: "Przystawka" },
    { nazwa: "Spring Rolls", cena: 22, kategoria: "Przystawka" },

    { nazwa: "Tiramisu", cena: 18, kategoria: "Ciasto" },
    { nazwa: "Sernik", cena: 16, kategoria: "Ciasto" },

    { nazwa: "Lemoniada", cena: 10, kategoria: "Napój" },
    { nazwa: "Kawa Latte", cena: 12, kategoria: "Napój" },
];


    function pokazDania(lista) {
        const container = document.getElementById("dania-list");
        container.innerHTML = `
            <table class="dania-tabela">
                <tr>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>Cena (zł)</th>
                </tr>
                ${lista.map(d => `
                    <tr>
                        <td>${d.nazwa}</td>
                        <td>${d.kategoria}</td>
                        <td>${d.cena.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    }

    function aktualizujListe() {
        const sortOption = document.getElementById("sortSelect").value;
        const filterOption = document.getElementById("filterSelect").value;

        let lista = [...dania];

        // FILTROWANIE
        if (filterOption !== "Wszystko") {
            lista = lista.filter(d => d.kategoria === filterOption);
        }

        // SORTOWANIE
        if (sortOption === "asc") {
            lista.sort((a, b) => a.cena - b.cena);
        } else {
            lista.sort((a, b) => b.cena - a.cena);
        }

        pokazDania(lista);
    }
