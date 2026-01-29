document.getElementById('btnPotvrdi').addEventListener('click', function() {
    const polja = ['vlasnik', 'email', 'telefon', 'ljubimac', 'pregled', 'termin'];
    const infoBox = document.getElementById('glavna-poruka'); // Hvata onaj info box
    let sveValidno = true;

    polja.forEach(id => {
        const el = document.getElementById(id);
        if (el.value.trim() === "" || el.value === "") {
            el.classList.add('error-border');
            sveValidno = false;
        } else {
            el.classList.remove('error-border');
        }
    });

    if (sveValidno) {
        // AKO JE SVE OK - Piše potvrdu unutar info box-a
        const email = document.getElementById('email').value;
        
        infoBox.style.display = "block";
        infoBox.innerHTML = "<strong>Potvrda termina:</strong> Uspešno ste zakazali! Detalji su poslati na mail: " + email;
        
        // Menjamo mu stil da bude zelen (uspeh)
        infoBox.style.background = "#e0f2f1"; 
        infoBox.style.color = "#00796b";
        infoBox.style.borderLeft = "3px solid #00796b";

    } else {
        // AKO IMA GREŠKE - Piše tvoj naslov "Neispravno popunjen formular"
        infoBox.style.display = "block";
        infoBox.innerHTML = "<strong>Neispravno popunjen formular!</strong> Molimo popunite sva crvena polja.";
        
        // Menjamo mu stil da bude crven (greška)
        infoBox.style.background = "#ffebee"; 
        infoBox.style.color = "#c62828";
        infoBox.style.borderLeft = "3px solid #ff5252";
    }
});
