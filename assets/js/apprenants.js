// Sélection du formulaire
const form = document.querySelector('.modal-content');

// Sélection du tbody du tableau
const tbody = document.querySelector('.container-table tbody');

const titrenom = document.querySelector('.titrenom');
const titreprenom = document.querySelector('.titreprenom');
const titreemail = document.querySelector('.titreemail');
const titregenre = document.querySelector('.titregenre');
const titretelephones = document.querySelector('.titretelephones');
const titrereferentiels = document.querySelector('.titrereferentiels');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
close.addEventListener('click', function () {
    modal.style.display = 'none';
})

// //Récuperation du lien de l'image
// const imageInput = document.getElementById('image'); // Remplacez 'imageInput' par l'ID réel de votre input
// const imageLink = imageInput.value;
// console.log(imageLink);
// const imageaperçu = document.getElementById('studentImage');
// imageaperçu.src = imageLink;



//objet qui contient tous les données
const data = {
    apprenants: [
        {
            idapprenant: 1,
            image: 'https://via.placeholder.com/150',
            nom: 'Doe',
            prenom: 'John',
            email: 'johndO1@gmail.com',
            telephone: '770606060',
            sexe: 'Masculin',
            date_naissance: '1988-01-01',
            lieu_naissance: 'Paris',
            cni: '1234256781924',
            referentiel: 'Dev Web /mobile',
            promo: 'Promotion 1'
        },
        {
            idapprenant: 2,
            image: 'https://via.placeholder.com/150',
            nom: 'Doe',
            prenom: 'Jane',
            email: 'HkUO1@example.com',
            telephone: '0606060606',
            sexe: 'Feminin',
            date_naissance: '2001-01-01',
            lieu_naissance: 'Paris',
            cni: '1234256781924',
            referentiel: 'Référent Digital',
            promo: 'Promotion 1'
        },
        {
            idapprenant: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGEVZDTvX22Gx3EFWADsK8GCTH-MMGpxPVg&s',
            nom: 'Fernandez',
            prenom: 'Pierre',
            email: 'johndO1@gmail.com',
            telephone: '760606060',
            sexe: 'Masculin',
            date_naissance: '1999-05-03',
            lieu_naissance: 'Paris',
            cni: '1234256781924',
            referentiel: 'Hackeuse',
            promo: 'Promotion 1'

        },
        {
            idapprenant: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGEVZDTvX22Gx3EFWADsK8GCTH-MMGpxPVg&s',
            nom: 'Doe',
            prenom: 'John',
            email: 'HkUO1@example.com',
            telephone: '0606060606',
            sexe: 'Masculin',
            date_naissance: '1988-07-21',
            lieu_naissance: 'Paris',
            cni: '1234256781924',
            referentiel: 'Dev Web /mobile',
            promo: 'Promotion 1'
        },
        {
            idapprenant: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGEVZDTvX22Gx3EFWADsK8GCTH-MMGpxPVg&s',
            nom: 'Sanchez',
            prenom: 'Marie',
            email: 'smariedO1@gmail.com',
            telephone: '768606060',
            sexe: 'Feminin',
            date_naissance: '2000-12-01',
            lieu_naissance: 'Paris',
            cni: '1234256781924',
            referentiel: 'Hackeuse',
            promo: 'Promotion 1'

        },
        {
            idapprenant: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGEVZDTvX22Gx3EFWADsK8GCTH-MMGpxPVg&s',
            nom: 'Perez',
            prenom: 'Jean',
            email: 'HkUO1@example.com',
            telephone: '780606860',
            sexe: 'Masculin',
            date_naissance: '1999-05-03',
            lieu_naissance: 'Paris',
            cni: '1234256781924',
            referentiel: 'Dev Data',
            promo: 'Promotion 1'
        },
        {
            idapprenant: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGEVZDTvX22Gx3EFWADsK8GCTH-MMGpxPVg&s',
            nom: 'Doe',
            prenom: 'John',
            email: 'johndO1@example.com',
            telephone: '760606060',
            sexe: 'Masculin',
            date_naissance: '1988-01-01',
            lieu_naissance: 'Paris',
            cni: '1234256781924',
            referentiel: 'Dev Web /mobile',
            promo: 'Promotion 1'
        }

    ],
    referentiels: [
        {
            idreferentiel: 1,
            nomreferentiel: 'Dev Web /mobile',
            idpromo: 6
        },
        {
            idreferentiel: 2,
            nomreferentiel: 'Référent Digital',
            idpromo: 6
        },
        {
            idreferentiel: 3,
            nomreferentiel: 'Dev Data',
            idpromo: 6
        },
        {
            idreferentiel: 4,
            nomreferentiel: 'AWS',
            idpromo: 6
        },
        {
            idreferentiel: 5,
            nomreferentiel: 'Hackeuse',
            idpromo: 6
        }
    ],
    promos: [
        {
            idpromo: 1,
            nompromo: 'Promotion 1',
            datedebut: '2018-10-01',
            datefin: '2019-05-01',
            etatpromo: 'Désactivée'
        },
        {
            idpromo: 2,
            nompromo: 'Promotion 2',
            datedebut: '2019-10-01',
            datefin: '2020-05-01',
            etatpromo: 'Désactivée'
        },
        {
            idpromo: 3,
            nompromo: 'Promotion 3',
            datedebut: '2020-10-01',
            datefin: '2021-05-01',
            etatpromo: 'Désactivée'
        },
        {
            idpromo: 4,
            nompromo: 'Promotion 4',
            datedebut: '2021-10-01',
            datefin: '2022-05-01',
            etatpromo: 'Désactivée'
        },
        {
            idpromo: 5,
            nompromo: 'Promotion 5',
            datedebut: '2022-10-01',
            datefin: '2023-05-01',
            etatpromo: 'Désactivée'
        },
        {
            idpromo: 6,
            nompromo: 'Promotion 6',
            datedebut: '2024-02-01',
            datefin: '2024-12-01',
            etatpromo: 'Activée'
        }
    ]
}


//fonction pour ajouter un apprenant
function addApprenant() {
    const newApprenant = {
        idapprenant: data.apprenants.length + 1,
        image: image.value,
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        telephone: telephone.value,
        sexe: sexe.value,
        date_naissance: date_naissance.value,
        lieu_naissance: lieu_naissance.value,
        cni: cni.value,
        referentiel: referentiel.value,
        promo: promo.value
    }
    data.apprenants.push(newApprenant);
}
// fonction pour afficher les apprenants dans le tableau
// function afficherApprenants() {
//     tbody.innerHTML = '';
//     data.apprenants.forEach(apprenant => {
//         const newRow = document.createElement('tr');
//         newRow.classList.add('line');
//         newRow.classList.add('donneeApprenant');
//         newRow.innerHTML = `
//             <td class="bloc">
//             <div class="col-bas"><img src="${apprenant.image}" alt="Image" width="50px"></div>
//             </td>
//             <td class="bloc">
//                 <div class="col-bas" style="color: rgb(29, 109, 29)">${apprenant.nom}</div>
//             </td>
//             <td class="bloc">
//                 <div class="col-bas" style="color: rgb(29, 109, 29)">${apprenant.prenom}</div>
//             </td>
//             <td class="bloc">
//                 <div class="col-bas email">${apprenant.email}</div>
//             </td>
//             <td class="bloc">
//                 <div class="col-bas">${apprenant.sexe}</div>
//             </td>
//             <td class="bloc">
//                 <div class="col-bas">${apprenant.telephone}</div>
//             </td>
//             <td class="bloc">
//                 <div class="col-bas">${apprenant.referentiel}</div>
//             </td>
//             <td class="bloc">
//                 <div class="col-haut"></div>
//                 <input type="checkbox" id="my-checkbox-0" />
//                 <label for="my-checkbox-0"></label>
//             </td>
//         `;
//         tbody.appendChild(newRow);
//     });

// }

//fonction pour valider le formulaire
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const image = document.getElementById('image').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const sexe = document.getElementById('sexe').value;
    const date_naissance = document.getElementById('date_naissance').value;
    const lieu_naissance = document.getElementById('lieu_naissance').value;
    const cni = document.getElementById('cni').value;
    const referentiel = document.getElementById('referentiel1').value;
    const promo = document.getElementById('promo').value;

    console.log(image);


    // Validation du formulaire
    if (validateForm(image, nom, prenom, email, date_naissance, lieu_naissance, cni, telephone)) {
        // Si le formulaire est valide, continuer avec la création de la nouvelle ligne dans le tableau
        const newRow = document.createElement('tr');
        newRow.setAttribute('id', data.apprenants.length + 1);
        newRow.classList.add('line');
        newRow.classList.add('donneeApprenant');
        // Insertion des données dans les cellules de la nouvelle ligne
        newRow.innerHTML = `
            <td class="bloc">
            <div class="col-bas"><img src="${image}" alt="Image" width="50px"></div>
            </td>
            <td class="bloc">
                <div class="col-bas nomapprenant" style="color: rgb(29, 109, 29)">${nom}</div>
            </td>
            <td class="bloc">
                <div class="col-bas prenomapprenant" style="color: rgb(29, 109, 29)">${prenom}</div>
            </td>
            <td class="bloc">
                <div class="col-bas email emailapprenant">${email}</div>
            </td>
            <td class="bloc">
                <div class="col-bas sexeapprenant">${sexe}</div>
            </td>
            <td class="bloc">
                <div class="col-bas telephoneapprenant">${telephone}</div>
            </td>
            <td class="bloc">
                <div class="col-bas referentielapprenant">${referentiel}</div>
            </td>
            <td class="bloc">
                <div class="col-haut"></div>
                <input type="checkbox" id="my-checkbox-0" />
                <label for="my-checkbox-0"></label>
                <button type="button" class="btnEdit">Modifier</button>
                <button type="button" class="btnqrcode" id="qrcode-${data.apprenants.idapprenant}">QrCode</button>
            </td>
        `;
        if (createApprenant.textContent != "Modifier l'apprenant") {

            tbody.appendChild(newRow);
            addApprenant();
            goToPage(1);
            
        }
            // Reinitialisation du formulaire
            form.reset();
            
            // Fermer le formulaire
            modal.style.display = 'none';
    }
});

const nouveauapprenant = document.getElementById('nouveauapprenant');
if (nouveauapprenant.textContent != '+ Nouvelle') {
    nouveauapprenant.addEventListener('click', function () {
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
    });
}


// Fonction de validation de l'image

// Fonction de validation de l'image
function validateImage(image) {
    const imageLength = image.trim().length;
    if (imageLength === 0) {
        document.getElementById('imageError').textContent = 'Veuillez entrer le lien d\'une image.';
        return false;
    } else {
        document.getElementById('imageError').textContent = '';
        return true;
    }
}

// Fonction de validation du champ nom
function validateNom(nom) {
    const nomLength = nom.trim().length;
    if (nomLength === 0) {
        document.getElementById('nomError').textContent = 'Le nom est requis.';
        return false;
    } else if (nomLength < 2 || nomLength > 30) {
        document.getElementById('nomError').textContent = 'Le nom doit contenir entre 2 et 30 caractères.';
        return false;
    } else {
        document.getElementById('nomError').textContent = '';
        return true;
    }
}

// Fonction de validation du champ prénom
function validatePrenom(prenom) {
    const prenomLength = prenom.trim().length;
    if (prenomLength === 0) {
        document.getElementById('prenomError').textContent = 'Le prénom est requis.';
        return false;
    } else if (prenomLength < 3 || prenomLength > 30) {
        document.getElementById('prenomError').textContent = 'Le prénom doit contenir entre 3 et 30 caractères.';
        return false;
    } else {
        document.getElementById('prenomError').textContent = '';
        return true;
    }
}

// Fonction de validation du champ email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        document.getElementById('emailError').textContent = 'Veuillez entrer une adresse email valide.';
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
        return true;
    }
}

// Fonction de validation du champ téléphone
function validateTelephone(telephone) {
    const telephoneLength = telephone.trim().length;
    const re = /^\d{9}$/; // Regex pour vérifier si le numéro contient exactement 9 chiffres
    if (telephoneLength !== 9 || !re.test(telephone)) {
        document.getElementById('telephoneError').textContent = 'Le numéro de téléphone doit contenir 9 chiffres.';
        return false;
    } else {
        document.getElementById('telephoneError').textContent = '';
        return true;
    }
}

// Fonction de validation de la date de naissance
function validateDateNaissance(date_naissance) {
    const isValidDate = !isNaN(Date.parse(date_naissance));
    if (!isValidDate) {
        document.getElementById('dateNaissanceError').textContent = 'Veuillez entrer une date de naissance valide.';
        return false;
    } else {
        document.getElementById('dateNaissanceError').textContent = '';
        return true;
    }
}

// Fonction de validation du lieu de naissance
function validateLieuNaissance(lieuNaissance) {
    const lieuNaissanceLength = lieuNaissance.trim().length;
    if (lieuNaissanceLength < 5 || lieuNaissanceLength > 50) {
        document.getElementById('lieuNaissanceError').textContent = 'Le lieu de naissance doit contenir entre 5 et 50 caractères.';
        return false;
    } else {
        document.getElementById('lieuNaissanceError').textContent = '';
        return true;
    }
}

// Fonction de validation du champ CNI
function validateCNI(cni) {
    const cniLength = cni.trim().length;
    const re = /^\d{13}$/; // Regex pour vérifier si le CNI contient exactement 13 chiffres
    if (cniLength !== 13 || !re.test(cni)) {
        document.getElementById('cniError').textContent = 'Le numéro de CNI doit contenir exactement 13 chiffres.';
        return false;
    } else {
        document.getElementById('cniError').textContent = '';
        return true;
    }
}

// Fonction de validation globale du formulaire
function validateForm(image, nom, prenom, email, date_naissance, lieuNaissance, cni, telephone) {
    const validImage = validateImage(image);
    const validNom = validateNom(nom);
    const validPrenom = validatePrenom(prenom);
    const validEmail = validateEmail(email);
    const validTelephone = validateTelephone(telephone);
    const validDateNaissance = validateDateNaissance(date_naissance);
    const validLieuNaissance = validateLieuNaissance(lieuNaissance);
    const validCNI = validateCNI(cni);

    return validImage && validNom && validPrenom && validEmail && validTelephone && validDateNaissance && validLieuNaissance && validCNI;
}


const itemsPerPage = 5; // Nombre d'apprenants par page
let currentPage = 1; // Page actuelle

function displayApprenants(startIndex, endIndex) {
    // Affichage des apprenants de l'index de début à l'index de fin
    const apprenants = data.apprenants.slice(startIndex, endIndex);
    tbody.innerHTML = ''; // Efface le contenu actuel du tableau

    apprenants.forEach((apprenant, index) => {
        const newRow = document.createElement('tr');
        newRow.setAttribute('id', apprenant.idapprenant);
        newRow.classList.add('line');
        newRow.classList.add('donneeApprenant');
        // Insertion des données dans les cellules de la nouvelle ligne
        newRow.innerHTML = `
            <td class="bloc">
            <div class="col-bas"><img src="${apprenant.image}" alt="Image" width="50px"></div>
            </td>
            <td class="bloc">
                <div class="col-bas nomapprenant" style="color: rgb(29, 109, 29)">${apprenant.nom}</div>
            </td>
            <td class="bloc">
                <div class="col-bas prenomapprenant" style="color: rgb(29, 109, 29)">${apprenant.prenom}</div>
            </td>
            <td class="bloc">
                <div class="col-bas email emailapprenant">${apprenant.email}</div>
            </td>
            <td class="bloc">
                <div class="col-bas sexeapprenant">${apprenant.sexe}</div>
            </td>
            <td class="bloc">
                <div class="col-bas telephoneapprenant">${apprenant.telephone}</div>
            </td>
            <td class="bloc">
                <div class="col-bas referentielapprenant">${apprenant.referentiel}</div>
            </td>
            <td class="bloc">
                <div class="col-haut"></div>
                <input type="checkbox" id="my-checkbox-${index}" />
                <label for="my-checkbox-${index}"></label>
                <button type="button" class="btnEdit">Modifier</button>
                <button type="button" class="btnqrcode" id="qrcode-${apprenant.idapprenant}">QrCode</button>
            </td>
        `;
        tbody.appendChild(newRow);


        const mysqrcodes = document.querySelectorAll('[id^="qrcode-"]');
        console.log(mysqrcodes);
        mysqrcodes.forEach((mysqrcode) => {
            const id = mysqrcode.id.split('-')[1];
            mysqrcode.addEventListener('click', () => {
                const apprenant = data.apprenants.find((apprenant) => apprenant.idapprenant === parseInt(id));
                const divqrcode = document.getElementById('divqrcode');
                const imageapprenant = document.createElement('img');
                imageapprenant.src = apprenant['image'];
                imageapprenant.style.width = '150px';
                divqrcode.innerHTML = '';
                divqrcode.appendChild(imageapprenant);
                // divqrcode.classList.add('show');
                // divqrcode.classList.remove('hide');
                divqrcode.style.display = 'block';
                divqrcode.style.display = 'flex';
                divqrcode.style.justifyContent = 'center';
                divqrcode.style.alignItems = 'center';
                divqrcode.style.position = 'absolute';
                divqrcode.style.top = '50%';
                divqrcode.style.left = '50%';
                divqrcode.style.transform = 'translate(-50%, -50%)';
                divqrcode.style.zIndex = '9999';
                divqrcode.style.backgroundColor = 'white';
                divqrcode.style.borderRadius = '10px';
                divqrcode.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

                const img = document.createElement('img');
                img.style.width = "200px";
                img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + apprenant['telephone'];
                divqrcode.appendChild(img);

                const button = document.createElement('button');
                button.textContent = 'Fermer';
                button.style.position = 'absolute';
                button.style.top = '10px';
                button.style.right = '10px';
                button.style.backgroundColor = 'red';
                button.style.color = 'white';
                button.style.border = 'none';
                button.style.borderRadius = '5px';
                button.style.padding = '5px 10px';
                button.style.cursor = 'pointer';
                button.addEventListener('click', () => {
                    divqrcode.style.display = 'none';
                });
                divqrcode.appendChild(button);

            });
        });

        const nomapprenant = document.querySelectorAll('.nomapprenant');
        nomapprenant.forEach((nom) => {
            nom.addEventListener('dblclick', function (event) {
                const nomTexte = event.target;
                console.log(nomTexte);
                event.target.contentEditable = true;
                event.target.focus();

                event.target.addEventListener('blur', function () {
                    event.target.contentEditable = false;

                    // Enregistrer les modifications dans le tableau des apprenants
                    const index = event.target.parentNode.parentNode.id;
                    console.log(index);
                    data.apprenants.forEach((apprenant) => {
                        if (apprenant.idapprenant == index) {
                            apprenant.nom = nomTexte.textContent;
                        }
                    })
                })


            });
        });

        const prenomapprenant = document.querySelectorAll('.prenomapprenant');
        prenomapprenant.forEach((prenom) => {
            prenom.addEventListener('dblclick', function (event) {
                const nomTexte = event.target;
                console.log(nomTexte);
                event.target.contentEditable = true;
                event.target.focus();

                event.target.addEventListener('blur', function () {
                    event.target.contentEditable = false;

                    // Enregistrer les modifications dans le tableau des apprenants
                    const index = event.target.parentNode.parentNode.id;
                    console.log(index);
                    data.apprenants.forEach((apprenant) => {
                        if (apprenant.idapprenant == index) {
                            apprenant.prenom = nomTexte.textContent;
                        }
                    })
                })

            });
        });

        const emailapprenant = document.querySelectorAll('.emailapprenant');
        emailapprenant.forEach((email) => {
            email.addEventListener('dblclick', function (event) {
                const nomTexte = event.target;
                console.log(nomTexte);
                event.target.contentEditable = true;
                event.target.focus();

                event.target.addEventListener('blur', function () {
                    event.target.contentEditable = false;

                    // Enregistrer les modifications dans le tableau des apprenants
                    const index = event.target.parentNode.parentNode.id;
                    console.log(index);
                    data.apprenants.forEach((apprenant) => {
                        if (apprenant.idapprenant == index) {
                            apprenant.email = nomTexte.textContent;
                        }
                    })
                })

            });
        });

        const sexeapprenant = document.querySelectorAll('.sexeapprenant');
        sexeapprenant.forEach((sexe) => {
            sexe.addEventListener('dblclick', function (event) {
                const nomTexte = event.target;
                console.log(nomTexte);
                event.target.contentEditable = true;
                event.target.focus();

                event.target.addEventListener('blur', function () {
                    event.target.contentEditable = false;

                    // Enregistrer les modifications dans le tableau des apprenants
                    const index = event.target.parentNode.parentNode.id;
                    console.log(index);
                    data.apprenants.forEach((apprenant) => {
                        if (apprenant.idapprenant == index) {
                            apprenant.sexe = nomTexte.textContent;
                        }
                    })
                })

            });
        });

        const telephoneapprenant = document.querySelectorAll('.telephoneapprenant');
        telephoneapprenant.forEach((telephone) => {
            telephone.addEventListener('dblclick', function (event) {
                const nomTexte = event.target;
                console.log(nomTexte);
                event.target.contentEditable = true;
                event.target.focus();

                event.target.addEventListener('blur', function () {
                    event.target.contentEditable = false;

                    // Enregistrer les modifications dans le tableau des apprenants
                    const index = event.target.parentNode.parentNode.id;
                    console.log(index);
                    data.apprenants.forEach((apprenant) => {
                        if (apprenant.idapprenant == index) {
                            apprenant.telephone = nomTexte.textContent;
                        }
                    })
                })

            });
        });

        const referentielapprenant = document.querySelectorAll('.referentielapprenant');
        referentielapprenant.forEach((referentiel) => {
            referentiel.addEventListener('dblclick', function (event) {
                const nomTexte = event.target;
                console.log(nomTexte);
                event.target.contentEditable = true;
                event.target.focus();

                event.target.addEventListener('blur', function () {
                    event.target.contentEditable = false;

                    // Enregistrer les modifications dans le tableau des apprenants
                    const index = event.target.parentNode.parentNode.id;
                    console.log(index);
                    data.apprenants.forEach((apprenant) => {
                        if (apprenant.idapprenant == index) {
                            apprenant.referentiel = nomTexte.textContent;
                        }
                    })
                })

            });
        });


        const btnEdit = document.querySelectorAll('.btnEdit');
        // Afficher le popup de modification d'un apprenant quand on clique sur le bouton Modifier

        const createApprenant = document.querySelector('#createApprenant');

        btnEdit.forEach(function (btn) {
            btn.addEventListener('click', function () {
                modal.style.display = 'block';

                const index = btn.parentNode.parentNode.id;
                console.log(index);
                data.apprenants.forEach((apprenant) => {
                    if (apprenant.idapprenant == index) {
                        const image = document.querySelector('#image');
                        const nom = document.querySelector('#nom');
                        const prenom = document.querySelector('#prenom');
                        const email = document.querySelector('#email');
                        const telephone = document.querySelector('#telephone');
                        const sexe = document.querySelector('#sexe');
                        const date_naissance = document.querySelector('#date_naissance');
                        const lieu_naissance = document.querySelector('#lieu_naissance');
                        const cni = document.querySelector('#cni');
                        const referentiel = document.querySelector('#referentiel1');
                        const promo = document.querySelector('#promo');

                        image.value = apprenant.image;
                        nom.value = apprenant.nom;
                        prenom.value = apprenant.prenom;
                        email.value = apprenant.email;
                        telephone.value = apprenant.telephone;
                        sexe.value = apprenant.sexe;
                        date_naissance.value = apprenant.date_naissance;
                        lieu_naissance.value = apprenant.lieu_naissance;
                        cni.value = apprenant.cni;
                        referentiel.value = apprenant.referentiel;
                        promo.value = apprenant.promo;

                        createApprenant.textContent = "Modifier l'apprenant";

                        // Enregistrer les modifications dans le tableau des apprenants quand on clique sur le bouton créer un apprenant sans ajouter un nouvel apprenant
                        createApprenant.addEventListener('click', function () {
                            apprenant.image = image.value;
                            apprenant.nom = nom.value;
                            apprenant.prenom = prenom.value;
                            apprenant.email = email.value;
                            apprenant.telephone = telephone.value;
                            apprenant.sexe = sexe.value;
                            apprenant.date_naissance = date_naissance.value;
                            apprenant.lieu_naissance = lieu_naissance.value;
                            apprenant.cni = cni.value;
                            apprenant.referentiel = referentiel.value;
                            apprenant.promo = promo.value;

                            // Fermer le formulaire
                            modal.style.display = 'none';

                            // Rafraîchir l'affichage des apprenants
                            const startIndex = (currentPage - 1) * itemsPerPage;
                            const endIndex = startIndex + itemsPerPage;
                            displayApprenants(startIndex, endIndex);
                            updatePaginationButtons();

                        });
                    }
                })
            });
        });

        // Écouter les changements de sélection dans les checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateSelectOptions);
        });


    });
}

function updatePaginationButtons() {
    const totalApprenants = data.apprenants.length;
    const totalPages = Math.ceil(totalApprenants / itemsPerPage);

    document.getElementById('pageInfo').innerText = `Page ${currentPage} / ${totalPages}`;

    const btnFirst = document.querySelector('.pagination .btn-first');
    const btnPrev = document.querySelector('.pagination .btn-prev');
    const btnNext = document.querySelector('.pagination .btn-next');
    const btnLast = document.querySelector('.pagination .btn-last');

    btnFirst.disabled = currentPage === 1;
    btnPrev.disabled = currentPage === 1;
    btnNext.disabled = currentPage === totalPages;
    btnLast.disabled = currentPage === totalPages;
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
}

document.querySelector('.pagination .btn-first').addEventListener('click', () => {
    goToPage(1);
});

document.querySelector('.pagination .btn-prev').addEventListener('click', () => {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
});

document.querySelector('.pagination .btn-next').addEventListener('click', () => {
    const totalPages = Math.ceil(data.apprenants.length / itemsPerPage);
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
});

document.querySelector('.pagination .btn-last').addEventListener('click', () => {
    const totalPages = Math.ceil(data.apprenants.length / itemsPerPage);
    goToPage(totalPages);
});

// Afficher la première page au chargement
goToPage(1);

const searchapprenant = document.getElementById('searchapprenant');
searchapprenant.addEventListener('input', () => {
    const donneeApprenants = document.querySelectorAll('.donneeApprenant');
    const searchValue = searchapprenant.value.toLowerCase();
    donneeApprenants.forEach((apprenant) => {
        if (searchValue.length >= 3) {
            if (apprenant.innerText.toLowerCase().includes(searchValue)) {
                apprenant.classList.remove('hiddenApprenant');
            }
            else {
                apprenant.classList.add('hiddenApprenant');
            }
        }
        else {
            apprenant.classList.remove('hiddenApprenant');
        }
    });
})


// Ajout d'un événement qui permet de filter les noms des apprenants par ordre croissant ou decroissant en cliquant sur le nom

titrenom.addEventListener('click', function () {
    // Vérifier si les noms sont triés par ordre croissant des noms
    const isSorted = data.apprenants.every((nom, index) => index === 0 || data.apprenants[index - 1].nom.localeCompare(nom.nom) <= 0);
    //console.log(isSorted);

    // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
    if (isSorted) {
        data.apprenants.sort((a, b) => {
            return b.nom.localeCompare(a.nom); // Triez par ordre decroissant
        });
    } else {
        // Sinon, triez les noms par ordre croissant
        data.apprenants.sort((a, b) => {
            return a.nom.localeCompare(b.nom); // Triez par ordre croissant
        });
    }

    // Afficher les noms mises à jour
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
});

titreprenom.addEventListener('click', function () {
    // Vérifier si les noms sont triés par ordre croissant des noms
    const isSorted = data.apprenants.every((prenom, index) => index === 0 || data.apprenants[index - 1].prenom.localeCompare(prenom.prenom) <= 0);
    //console.log(isSorted);

    // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
    if (isSorted) {
        data.apprenants.sort((a, b) => {
            return b.prenom.localeCompare(a.prenom); // Triez par ordre decroissant
        });
    } else {
        // Sinon, triez les noms par ordre croissant
        data.apprenants.sort((a, b) => {
            return a.prenom.localeCompare(b.prenom); // Triez par ordre croissant
        });
    }

    // Afficher les prenoms mises à jour
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
});

titreemail.addEventListener('click', function () {
    // Vérifier si les noms sont triés par ordre croissant des noms
    const isSorted = data.apprenants.every((email, index) => index === 0 || data.apprenants[index - 1].email.localeCompare(email.email) <= 0);
    //console.log(isSorted);

    // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
    if (isSorted) {
        data.apprenants.sort((a, b) => {
            return b.email.localeCompare(a.email); // Triez par ordre decroissant
        });
    } else {
        // Sinon, triez les noms par ordre croissant
        data.apprenants.sort((a, b) => {
            return a.email.localeCompare(b.email); // Triez par ordre croissant
        });
    }

    // Afficher les noms mises à jour
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
});

titregenre.addEventListener('click', function () {
    // Vérifier si les noms sont triés par ordre croissant des noms
    const isSorted = data.apprenants.every((sexe, index) => index === 0 || data.apprenants[index - 1].sexe.localeCompare(sexe.sexe) <= 0);
    //console.log(isSorted);

    // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
    if (isSorted) {
        data.apprenants.sort((a, b) => {
            return b.sexe.localeCompare(a.sexe); // Triez par ordre decroissant
        });
    } else {
        // Sinon, triez les noms par ordre croissant
        data.apprenants.sort((a, b) => {
            return a.sexe.localeCompare(b.sexe); // Triez par ordre croissant
        });
    }

    // Afficher les noms mises à jour
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
});

titretelephones.addEventListener('click', function () {
    // Vérifier si les noms sont triés par ordre croissant des noms
    const isSorted = data.apprenants.every((telephone, index) => index === 0 || data.apprenants[index - 1].telephone.localeCompare(telephone.telephone) <= 0);
    //console.log(isSorted);

    // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
    if (isSorted) {
        data.apprenants.sort((a, b) => {
            return b.telephone.localeCompare(a.telephone); // Triez par ordre decroissant
        });
    } else {
        // Sinon, triez les noms par ordre croissant
        data.apprenants.sort((a, b) => {
            return a.telephone.localeCompare(b.telephone); // Triez par ordre croissant
        });
    }

    // Afficher les noms mises à jour
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
});

titrereferentiels.addEventListener('click', function () {
    // Vérifier si les noms sont triés par ordre croissant des noms
    const isSorted = data.apprenants.every((referentiel, index) => index === 0 || data.apprenants[index - 1].referentiel.localeCompare(referentiel.referentiel) <= 0);
    //console.log(isSorted);

    // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
    if (isSorted) {
        data.apprenants.sort((a, b) => {
            return b.referentiel.localeCompare(a.referentiel); // Triez par ordre decroissant
        });
    } else {
        // Sinon, triez les noms par ordre croissant
        data.apprenants.sort((a, b) => {
            return a.referentiel.localeCompare(b.referentiel); // Triez par ordre croissant
        });
    }

    // Afficher les noms mises à jour
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
});

const btntransfert = document.querySelector('#btntransfert');
// Au clic sur le bouton, afficher le modal de transfert si au moins un apprenant est sélectionné
btntransfert.addEventListener('click', function () {
    if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0) {
        transfert.style.display = 'block';
    }
    else {
        alert('Veuillez sélectionner au moins un apprenant.');
    }
});


// Sélection de la div avec l'ID "transfert"
const transfert = document.querySelector('#transfert');

// Création de l'élément select
const selectElement = document.createElement('select');
selectElement.name = 'transfert';
selectElement.id = 'transfert';

// Création de l'option par défaut
const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.text = 'Transfert';
defaultOption.disabled = true;
defaultOption.selected = true;
selectElement.appendChild(defaultOption);

// Ajouter une fonction pour mettre à jour les options du select en fonction des apprenants sélectionnés
function updateSelectOptions() {
    // Réinitialiser les options du select
    selectElement.innerHTML = '';

    // Créer un ensemble pour stocker les référentiels des apprenants cochés
    const selectedReferentiels = new Set();

    // Parcourir les apprenants cochés pour récupérer les référentiels
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const apprenantId = checkbox.parentNode.parentNode.id;
        const apprenant = data.apprenants.find(apprenant => apprenant.idapprenant === parseInt(apprenantId));
        selectedReferentiels.add(apprenant.referentiel);
    });

    // Ajouter les options pour les référentiels restants dans data.referentiels[]
    data.referentiels.forEach(referentiel => {
        // Ajouter l'option uniquement si le référentiel n'est pas dans les référentiels des apprenants cochés
        if (!selectedReferentiels.has(referentiel.nomreferentiel)) {
            const option = document.createElement('option');
            option.value = referentiel.idreferentiel;
            option.text = referentiel.nomreferentiel;
            selectElement.appendChild(option);
        }
    });
}

// Mettre à jour les options initiales
updateSelectOptions();

// // Écouter les changements de sélection dans les checkboxes
// document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
//     checkbox.addEventListener('change', updateSelectOptions);
// });


// Ajout du select à la div avec l'ID "transfert"
transfert.appendChild(selectElement);

// Transférer un apprenant ou groupe d'apprenants sélectionnés a un autre referentiel en choisissant le referentiel dans le select de référentiels 

// Écouter les changements de sélection dans le select de référentiels
selectElement.addEventListener('change', function () {
    const selectedReferentielId = this.value; // ID du référentiel sélectionné
    const selectedReferentielName = this.options[this.selectedIndex].text; // Nom du référentiel sélectionné
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkboxes);

    checkboxes.forEach(checkbox => {
        const apprenantId = checkbox.parentNode.parentNode.id;
        const apprenant = data.apprenants.find(apprenant => apprenant.idapprenant === parseInt(apprenantId));


        // Mettre à jour le référentiel de l'apprenant avec le nouveau référentiel sélectionné
        apprenant.referentiel = selectedReferentielName;

        transfert.style.display = 'none';
    });

    // Rafraîchir l'affichage des apprenants
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayApprenants(startIndex, endIndex);
    updatePaginationButtons();
});


//***************************Promo****************************
const togglepromo = document.querySelector('#togglepromo');
const containertablepromo = document.querySelector('#container-tablepromo');
const containertable = document.querySelector('#container-table');
const tbodypromo = document.querySelector('#tbodypromo');
const line4 = document.querySelector('#line4');

togglepromo.addEventListener('click', function () {
    containertablepromo.style.display = 'block';
    containertable.style.display = 'none';
    line4.style.display = 'none';


    nouveauapprenant.textContent = '+ Nouvelle';

    const popupPromo = document.querySelector('#popupPromo');
    const closebtn = document.querySelector('.close-btn');

    closebtn.addEventListener('click', function () {
        popupPromo.style.display = 'none';
    });

    nouveauapprenant.addEventListener('click', function () {
        popupPromo.style.display = 'block';
        modal.style.display = 'none';
    });

    //Afficher les promotions du tableau data.promos
    function afficherPromos() {
        tbodypromo.innerHTML = '';
        const promos = data.promos;
        promos.forEach(function (promo) {
            const newRow = document.createElement('tr');
            newRow.setAttribute('id', data.promos.length + 1);
            newRow.classList.add('line');
            newRow.classList.add('donneepromo');
            newRow.innerHTML = `
                    <td class="bloc">
                      <div class="col-bas nompromo">${promo.nompromo}</div>
                    </td>
                    <td class="bloc">
                      <div class="col-bas datedebut">${promo.datedebut}</div>
                    </td>
                    <td class="bloc">
                      <div class="col-bas datefin">${promo.datefin}</div>
                    </td>
                    <td class="bloc">
                      <div class="col-bas etatpromo">${promo.etatpromo}</div>
                      <div style = "margin-left: 30px;"><button type="button" class="btnEditpromo">Modifier</button></div>
                    </td>
            `;
            tbodypromo.appendChild(newRow);
        });
    }

    afficherPromos();

    const formpromo = document.querySelector('#taskForm');
    const btnaddpromo = document.querySelector('.btnaddpromo');

    //fonction pour ajouter une nouvelle promo
    formpromo.addEventListener('submit', function (e) {
        e.preventDefault();
        const nompromo = document.querySelector('#nompromo').value;
        const datedebut = document.querySelector('#dateDebut').value;
        const datefin = document.querySelector('#dateFin').value;
        const promo = {
            idpromo: data.promos.length + 1,
            nompromo: nompromo,
            datedebut: datedebut,
            datefin: datefin,
            etatpromo: 'Désactivée'
        };
        if (validateFormPromo(nompromo, datedebut, datefin)) {

            if (btnaddpromo.textContent != 'Modifier') {

                data.promos.push(promo);
                formpromo.reset();

                nompromo.value = '';
                datedebut.value = '';
                datefin.value = '';
                popupPromo.style.display = 'none';
                afficherPromos();
                goToPagePromo(1);
            }
        }

    });

    const itemsPerPagePromo = 4; // Nombre de promotions par page
    let currentPagePromo = 1; // Page actuelle pour les promotions

    function displayPromos(startIndex, endIndex) {
        // Affichage des promotions de l'index de début à l'index de fin
        const promos = data.promos.slice(startIndex, endIndex);
        tbodypromo.innerHTML = ''; // Efface le contenu actuel du tableau

        promos.forEach((promo, index) => {
            const newRow = document.createElement('tr');
            newRow.setAttribute('id', promo.idpromo);
            newRow.classList.add('line');
            newRow.classList.add('donneepromo');
            newRow.innerHTML = `
            <td class="bloc">
              <div class="col-bas nompromo">${promo.nompromo}</div>
            </td>
            <td class="bloc">
              <div class="col-bas datedebut">${promo.datedebut}</div>
            </td>
            <td class="bloc">
              <div class="col-bas datefin">${promo.datefin}</div>
            </td>
            <td class="bloc" style= "display: flex;">
              <div class="col-bas etatpromo">${promo.etatpromo}</div>
              <div style = "margin-left: 30px;"><button type="button" class="btnEditpromo">Modifier</button></div>
              
            </td>
        `;
            tbodypromo.appendChild(newRow);

            // Ajoute l'événement au clic sur l'état de la promo
            newRow.querySelector('.etatpromo').addEventListener('click', function () {
                // Vérifie si la promotion est déjà activée
                if (promo.etatpromo === 'Désactivée') {
                    // Parcourt toutes les promotions pour les désactiver
                    data.promos.forEach(p => p.etatpromo = 'Désactivée');
                    // Active la promotion sur laquelle l'utilisateur a cliqué
                    promo.etatpromo = 'Activée';
                }
                // Met à jour l'affichage des promotions
                displayPromos(startIndex, endIndex);
            });


            // Ajoute l'événement au clic sur le nom de la promo pour le modifier
            const nompromo = document.querySelectorAll('.nompromo');
            nompromo.forEach(nom => {
                nom.addEventListener('dblclick', function (event) {
                    const nomTexte = event.target;
                    console.log(nomTexte);
                    event.target.contentEditable = true;
                    event.target.focus();

                    event.target.addEventListener('blur', function () {
                        event.target.contentEditable = false;

                        // Enregistrer les modifications dans le tableau des apprenants
                        const index = event.target.parentNode.parentNode.id;
                        console.log(index);
                        data.promos.forEach((promo) => {
                            if (promo.idpromo == index) {
                                promo.nompromo = nomTexte.textContent;
                            }
                        })
                    })
                }
                )
            })

            const datedebut = document.querySelectorAll('.datedebut');
            datedebut.forEach(date => {
                date.addEventListener('dblclick', function (event) {
                    const dateTexte = event.target;
                    console.log(dateTexte);
                    event.target.contentEditable = true;
                    event.target.focus();

                    event.target.addEventListener('blur', function () {
                        event.target.contentEditable = false;

                        // Enregistrer les modifications dans le tableau des apprenants
                        const index = event.target.parentNode.parentNode.id;
                        console.log(index);
                        data.promos.forEach((promo) => {
                            if (promo.idpromo == index) {
                                promo.datedebut = dateTexte.textContent;
                            }
                        })
                    })
                }
                )
            })

            const datefin = document.querySelectorAll('.datefin');
            datefin.forEach(date => {
                date.addEventListener('dblclick', function (event) {
                    const dateTexte = event.target;
                    console.log(dateTexte);
                    event.target.contentEditable = true;
                    event.target.focus();

                    event.target.addEventListener('blur', function () {
                        event.target.contentEditable = false;

                        // Enregistrer les modifications dans le tableau des apprenants
                        const index = event.target.parentNode.parentNode.id;
                        console.log(index);
                        data.promos.forEach((promo) => {
                            if (promo.idpromo == index) {
                                promo.datefin = dateTexte.textContent;
                            }
                        })
                    })
                })
            });

            const btnEditpromo = document.querySelectorAll('.btnEditpromo');

            btnEditpromo.forEach(btn => {
                btn.addEventListener('click', function () {
                    popupPromo.style.display = 'block';
                    modal.style.display = 'none';

                    const index = btn.parentNode.parentNode.parentNode.id;
                    console.log(index);
                    data.promos.forEach((promo) => {
                        if (promo.idpromo == index) {

                            const nompromo = document.getElementById('nompromo');
                            const datedebut = document.getElementById('dateDebut');
                            const datefin = document.getElementById('dateFin');

                            nompromo.value = promo.nompromo;
                            datedebut.value = promo.datedebut;
                            datefin.value = promo.datefin;

                            btnaddpromo.textContent = 'Modifier';

                            btnaddpromo.addEventListener('click', function () {
                                promo.nompromo = nompromo.value;
                                promo.datedebut = datedebut.value;
                                promo.datefin = datefin.value;

                                popupPromo.style.display = 'none';

                                displayPromos(startIndex, endIndex);

                            });
                        }

                    })

                })

            });

        });
    }


    function updatePaginationButtonsPromo() {
        const totalPromos = data.promos.length;
        const totalPagesPromo = Math.ceil(totalPromos / itemsPerPagePromo);

        document.getElementById('pageInfopromo').innerText = `Page ${currentPagePromo} / ${totalPagesPromo}`;

        const btnFirstPromo = document.querySelector('.pagination .btn-firstpromo');
        const btnPrevPromo = document.querySelector('.pagination .btn-prevpromo');
        const btnNextPromo = document.querySelector('.pagination .btn-nextpromo');
        const btnLastPromo = document.querySelector('.pagination .btn-lastpromo');

        btnFirstPromo.disabled = currentPagePromo === 1;
        btnPrevPromo.disabled = currentPagePromo === 1;
        btnNextPromo.disabled = currentPagePromo === totalPagesPromo;
        btnLastPromo.disabled = currentPagePromo === totalPagesPromo;
    }

    function goToPagePromo(pageNumber) {
        currentPagePromo = pageNumber;
        const startIndex = (currentPagePromo - 1) * itemsPerPagePromo;
        const endIndex = startIndex + itemsPerPagePromo;
        displayPromos(startIndex, endIndex);
        updatePaginationButtonsPromo();
    }

    document.querySelector('.pagination .btn-firstpromo').addEventListener('click', () => {
        goToPagePromo(1);
    });

    document.querySelector('.pagination .btn-prevpromo').addEventListener('click', () => {
        if (currentPagePromo > 1) {
            goToPagePromo(currentPagePromo - 1);
        }
    });

    document.querySelector('.pagination .btn-nextpromo').addEventListener('click', () => {
        const totalPagesPromo = Math.ceil(data.promos.length / itemsPerPagePromo);
        if (currentPagePromo < totalPagesPromo) {
            goToPagePromo(currentPagePromo + 1);
        }
    });

    document.querySelector('.pagination .btn-lastpromo').addEventListener('click', () => {
        const totalPagesPromo = Math.ceil(data.promos.length / itemsPerPagePromo);
        goToPagePromo(totalPagesPromo);
    });

    // Afficher la première page de promotions au chargement
    goToPagePromo(1);


    //Ajout d'un événement qui permet de filter les noms des promos par ordre croissant ou decroissant en cliquant sur le nom du promo
    const titrenompromo = document.querySelector('.titrenompromo');
    titrenompromo.addEventListener('click', function () {
        // Vérifier si les noms sont triés par ordre croissant des noms
        const isSorted = data.promos.every((nom, index) => index === 0 || data.promos[index - 1].nompromo.localeCompare(nom.nompromo) <= 0);
        //console.log(isSorted);

        // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
        if (isSorted) {
            data.promos.sort((a, b) => {
                return b.nompromo.localeCompare(a.nompromo); // Triez par ordre decroissant
            });
        } else {
            // Sinon, triez les noms par ordre croissant
            data.promos.sort((a, b) => {
                return a.nompromo.localeCompare(b.nompromo); // Triez par ordre croissant
            });
        }

        // Afficher les noms promos mises à jour
        const startIndex = (currentPagePromo - 1) * itemsPerPagePromo;
        const endIndex = startIndex + itemsPerPagePromo;
        displayPromos(startIndex, endIndex);
        updatePaginationButtonsPromo();
    });

    const titredatedebutpromo = document.querySelector('.titredatedebutpromo');
    titredatedebutpromo.addEventListener('click', function () {
        // Vérifier si les noms sont triés par ordre croissant des noms
        const isSorted = data.promos.every((datedebut, index) => index === 0 || data.promos[index - 1].datedebut.localeCompare(datedebut.datedebut) <= 0);
        //console.log(isSorted);

        // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
        if (isSorted) {
            data.promos.sort((a, b) => {
                return b.datedebut.localeCompare(a.datedebut); // Triez par ordre decroissant
            });
        } else {
            // Sinon, triez les noms par ordre croissant
            data.promos.sort((a, b) => {
                return a.datedebut.localeCompare(b.datedebut); // Triez par ordre croissant
            });
        }

        // Afficher les dates de debut promos mises à jour
        const startIndex = (currentPagePromo - 1) * itemsPerPagePromo;
        const endIndex = startIndex + itemsPerPagePromo;
        displayPromos(startIndex, endIndex);
        updatePaginationButtonsPromo();
    });

    const titredatefinpromo = document.querySelector('.titredatefinpromo');
    titredatefinpromo.addEventListener('click', function () {
        // Vérifier si les noms sont triés par ordre croissant des noms
        const isSorted = data.promos.every((datefin, index) => index === 0 || data.promos[index - 1].datefin.localeCompare(datefin.datefin) <= 0);
        //console.log(isSorted);    

        // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
        if (isSorted) {
            data.promos.sort((a, b) => {
                return b.datefin.localeCompare(a.datefin); // Triez par ordre decroissant
            });
        } else {
            // Sinon, triez les noms par ordre croissant
            data.promos.sort((a, b) => {
                return a.datefin.localeCompare(b.datefin); // Triez par ordre croissant
            });
        }

        // Afficher les dates de fin promos mises à jour
        const startIndex = (currentPagePromo - 1) * itemsPerPagePromo;
        const endIndex = startIndex + itemsPerPagePromo;
        displayPromos(startIndex, endIndex);
        updatePaginationButtonsPromo();
    });

    const titreetatpromo = document.querySelector('.titreetatpromo');
    titreetatpromo.addEventListener('click', function () {
        // Vérifier si les noms sont triés par ordre croissant des noms
        const isSorted = data.promos.every((etat, index) => index === 0 || data.promos[index - 1].etatpromo.localeCompare(etat.etatpromo) <= 0);
        //console.log(isSorted);

        // Si les noms sont triés par ordre croissant, triez-les par ordre decroissant
        if (isSorted) {
            data.promos.sort((a, b) => {
                return b.etatpromo.localeCompare(a.etatpromo); // Triez par ordre decroissant
            });
        } else {
            // Sinon, triez les noms par ordre croissant
            data.promos.sort((a, b) => {
                return a.etatpromo.localeCompare(b.etatpromo); // Triez par ordre croissant
            });
        }

        // Afficher les etats promos mises à jour
        const startIndex = (currentPagePromo - 1) * itemsPerPagePromo;
        const endIndex = startIndex + itemsPerPagePromo;
        displayPromos(startIndex, endIndex);
        updatePaginationButtonsPromo();
    });




});


// Fonction pour valider le champ nom promo
function validateNompromo(nompromo) {
    const nompromoLength = nompromo.trim().length;
    if (nompromoLength === 0) {
        document.getElementById('promoError').textContent = 'Le nom de la promo est requis.';
        return false;
    } else if (nompromoLength < 3 || nompromoLength > 30) {
        document.getElementById('promoError').textContent = 'Le nom de la promo doit contenir entre 3 et 30 caractères.';
        return false;
    } else {
        document.getElementById('promoError').textContent = '';
        return true;
    }
}

function validateDateDebut(datedebut) {
    const isValidDate = !isNaN(Date.parse(datedebut));
    if (!isValidDate) {
        document.getElementById('dateDebutError').textContent = 'Veuillez entrer une date de début valide.';
        return false;
    } else {
        document.getElementById('dateDebutError').textContent = '';
        return true;
    }
}

function validateDateFin(datefin) {
    const isValidDate = !isNaN(Date.parse(datefin));
    if (!isValidDate) {
        document.getElementById('dateFinError').textContent = 'Veuillez entrer une date de fin valide.';
        return false;
    } else {
        document.getElementById('dateFinError').textContent = '';
        return true;
    }
}

// fonction vérifier la date de fin est plus grande que la date de debut
function validateDate(datedebut, datefin) {
    if (new Date(datedebut) > new Date(datefin)) {
        document.getElementById('dateFinError').textContent = 'La date de fin doit être plus grande que la date de debut.';
        return false;
    } else {
        document.getElementById('dateFinError').textContent = '';
        return true;
    }
}

function validateFormPromo(nompromo, datedebut, datefin) {
    return validateNompromo(nompromo) && validateDateDebut(datedebut) && validateDateFin(datefin) && validateDate(datedebut, datefin);
}
