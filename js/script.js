var scelta = parseInt(prompt("Quale esercizio eseguire: 1, 2, 3, o 4?"));

if (scelta == 1) {
    // JSnack1
    // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

    var parola1 = prompt("Inserisci la prima parola");
    var parola2 = prompt("Inserisci la seconda parola");

    result = "Le parole " + parola1 + " e " + parola2 + " hanno la stessa lunghezza";

    if ( parola1.length > parola2.length ) {
       result = "La parola " + parola2 + " è più corta di " + parola1;
    } else if ( parola1.length < parola2.length ) {
        result = "La parola " + parola1 + " è più corta di " + parola2;
    }

    document.getElementById("text").innerHTML = result;
} else if (scelta == 2) {
    // JSnack2
    // Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

    var result = 0;

    for (var i = 0; i < 5; i++) {
        result += parseInt(prompt("Inserisci un numero"));
    }

    // var i = 0;
    // while ( i < 5 ) {
    //     result += parseInt(prompt("Inserisci un numero"));
    //     i++;
    // }

    document.getElementById("text").innerHTML = "La somma è: " + result;

    // Variante: stampare solo i numeri pari

    // for ( var i = 0; i < 5; i++ ) {
    //     result = parseInt(prompt("Inserisci un numero"));
    //     if ( result % 2 == 0 ) {
    //         document.getElementById("text").innerHTML += result + " ";
    //     }
    // }
} else if (scelta == 3) {
    // JSnack3
    // Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

    var nums = [];
    var numero;
    for ( var i = 0; i < 6; i++) {
        numero = parseInt(prompt("Inserisci un numero"));
        if ( numero % 2 != 0 ) {
            nums.push(numero);
        }
    }

    document.getElementById("text").innerHTML = nums;
} else if (scelta == 4) {
    // JSnack4
    // In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

    var invitati = ["pluto", "pippo", "pinco", "panco"];
    var nome = prompt("Inserisci il tuo nome");
    var presente = false;

    var i = 0;
    while ( i < invitati.length && !presente ) {
        if ( nome == invitati[i] ) {
            presente = true;
        }
        i++;
    }
    
    if (presente) {
            document.getElementById("text").innerHTML = "Sei nella lista.";
    } else {
            document.getElementById("text").innerHTML = "Non sei nella lista.";
    }
}