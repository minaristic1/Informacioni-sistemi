let termini = [];
let editId = null;

const tabelaBody = document.getElementById('tabela-body');
const btnSacuvaj = document.getElementById('btnSacuvaj');

btnSacuvaj.addEventListener('click', () => {
    const podaci = {
        vlasnik: document.getElementById('vlasnik').value,
        telefon: document.getElementById('telefon').value,
        email: document.getElementById('email').value,
        ljubimac: document.getElementById('ljubimac').value,
        pregled: document.getElementById('pregled').value,
        termin: document.getElementById('termin').value
    };

    // Validacija
    if(!podaci.vlasnik || !podaci.termin) {
        alert("Ime i termin su obavezni!");
        return;
    }

    if (editId !== null) {
        // Izmena postojećeg
        termini[editId] = podaci;
        editId = null;
        btnSacuvaj.innerText = "Sačuvaj u bazu";
    } else {
        // Dodavanje novog
        termini.push(podaci);
    }

    osveziTabelu();
    resetujFormu();
});

function osveziTabelu() {
    tabelaBody.innerHTML = "";
    termini.forEach((t, index) => {
        const red = `
            <tr>
                <td>${t.termin.replace('T', ' ')}</td>
                <td>${t.vlasnik}</td>
                <td>${t.telefon}</td>
                <td>${t.ljubimac}</td>
                <td>${t.pregled}</td>
                <td>
                    <button class="btn-edit" onclick="pokreniIzmenu(${index})">Izmeni</button>
                    <button class="btn-delete" onclick="obrisiTermin(${index})">Briši</button>
                </td>
            </tr>
        `;
        tabelaBody.innerHTML += red;
    });
}

function obrisiTermin(index) {
    if(confirm("Da li ste sigurni da želite da obrišete ovaj termin?")) {
        termini.splice(index, 1);
        osveziTabelu();
    }
}

function pokreniIzmenu(index) {
    const t = termini[index];
    document.getElementById('vlasnik').value = t.vlasnik;
    document.getElementById('telefon').value = t.telefon;
    document.getElementById('email').value = t.email;
    document.getElementById('ljubimac').value = t.ljubimac;
    document.getElementById('pregled').value = t.pregled;
    document.getElementById('termin').value = t.termin;

    editId = index;
    btnSacuvaj.innerText = "Potvrdi izmenu podataka";
    window.scrollTo(0, 0);
}

function resetujFormu() {
    // Čisti sva tekstualna polja (ime, telefon, email, termin)
    document.querySelectorAll('input').forEach(i => i.value = "");
    
    // Vraća sve padajuće menije na prvu opciju ("Izaberite...")
    document.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
    
    // Slanje poruke u info-box
    const msg = document.getElementById('msg');
    if(msg) {
        msg.innerHTML = "Podaci uspešno obrađeni.";
        msg.style.background = "#e0f2f1"; // Vraća na zelenu boju
        msg.style.color = "#00796b";
    }
}
