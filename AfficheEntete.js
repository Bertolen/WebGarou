// Récupération de la racine du site
function getBaseUrl() {

    var chemin = window.location.href;
    
    if(chemin.startsWith('file:')) {
    // A utiliser sur un navigeur
    return chemin.match(/^.*WebGarou[\\|\/]/);        
    }
    
    // A utiliser sur la vue dynamique de Brackets
    return chemin.match(/^.*\/\/[\w.:]*\//);
}

// Liste des liens
var onglets = [
    {
        libele: "Campagnes",
        lien: "Campagne/Accueil.html"
    },
    {
        libele: "Apocalypse",
        lien: "Apocalypse/LoupGarouApocalypse.html"
    },
    {
        libele: "Déchus",
        lien: "Dechus/LoupGarouDechus.html"
    },
    {
        libele: "Ferae",
        lien: "Ferae/Accueil.html"
    }
];

var tableElt = document.createElement("table"); // Création du tableau

// Création de la ligne du tableau
var trElt = document.createElement("tr");

// Pour chaque onglet a faire

onglets.forEach(function(onglet){
    
    // Création de la case
    var tdElt = document.createElement("td");

    // Création du lien
    var aElt = document.createElement("a");

    // Alimentation du lien
    aElt.textContent = onglet.libele;
    aElt.href = getBaseUrl() + onglet.lien;

    // Ajout du lien au tableau
    tdElt.appendChild(aElt);

    // Ajout de la case à la ligne
    trElt.appendChild(tdElt);
    
});

// On ajoute au tableau la ligne
tableElt.appendChild(trElt);

document.body.appendChild(tableElt); // Ajout de la liste à la page