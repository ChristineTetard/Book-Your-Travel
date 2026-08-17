// ===== DESTINATION =====

const destinations = [

    {
        city: "Paris",
        img: "assets/images/tour-eiffel.jpg",
        hotels: "1529 Hotels",
        discount: false
    },

    {
        city: "Amsterdam",
        img: "assets/images/Amsterdam2.jpg",
        hotels: "929 Hotels",
        discount: false
    },

    {
        city: "St Petersburg",
        img: "assets/images/StPetersburg.jpg",
        hotels: "658 Hotels",
        discount: false
    },

    {
        city: "Prague",
        img: "assets/images/Prague.jpg",
        hotels: "829 Hotels",
        discount: false
    },

    {
        city: "Prague",
        img: "assets/images/Prague.jpg",
        hotels: "829 Hotels",
        discount: false
    },

    {
        city: "Paris",
        img: "assets/images/tour-eiffel.jpg",
        hotels: "1529 Hotels",
        discount: true
    },

    {
        city: "Amsterdam",
        img: "assets/images/Amsterdam2.jpg",
        hotels: "929 Hotels",
        // identifier la carte qui doit afficher le badge de réduction.
        discount: false
    },

    {
        city: "St Petersburg",
        img: "assets/images/StPetersburg.jpg",
        hotels: "658 Hotels",
        discount: false
    },

    {
        city: "St Petersburg",
        img: "assets/images/StPetersburg.jpg",
        hotels: "658 Hotels",
        discount: false
    },

    {
        city: "Prague",
        img: "assets/images/Prague.jpg",
        hotels: "829 Hotels",
        discount: false
    },

    {
        city: "Paris",
        img: "assets/images/tour-eiffel.jpg",
        hotels: "1529 Hotels",
        discount: false
    },

    {
        city: "Amsterdam",
        img: "assets/images/Amsterdam2.jpg",
        hotels: "929 Hotels",
        discount: false
    }

];

// ===== CONTENEUR DES CARTES =====

const cardsContainer =
    document.getElementById("cards-container");

// ===== AFFICHER LES DESTINATIONS =====

function afficherDestinations() {

    if (!cardsContainer) {
        console.error(
            "Le conteneur #cards-container est introuvable."
        );
        return;
    }

    // Nettoyage du conteneur
    cardsContainer.innerHTML = "";

// ===== CREATION DE CHAQUE CARTE =====

    // Pourcourir le tableau destinations et créer automatiquement une carte pour chaque destination.
    destinations.forEach((city) => {
        // Création d'un élément HTML directement en Javascript.
        const col = document.createElement("div");

        col.className =
            "col-12 col-md-6 col-lg-3";

        // Classe spéciale pour la promo

        const specialClass = city.discount? 
                "special-price"
                : "";

        // badge -20%

        const discountBadge = city.discount? 
                `
                    <div
                        class="badge-discount"
                        aria-label="Promotion moins 20 pour cent"
                    >
                        <span>-20%</span>
                        <div
                            class="triangle"
                            aria-hidden="true"
                        ></div>
                    </div>
                `
                : "";

// ===== HTML DE LA CARTE =====

        col.innerHTML = `

            <div class="card my-card ${specialClass}">

                ${discountBadge}

                <!-- IMAGE -->

                <img
                    src="${city.img}"
                    class="card-img-top"
                    alt="${city.city}"
                    loading="lazy"
                >

                <!-- CARD BODY -->

                <div class="card-body">

                    <!-- TITRE + BOUTON -->

                    <div class="card-header-custom">
                        <h3 class="card-title">
                            ${city.city}
                        </h3>

                        <button
                            type="button"
                            class="btn btn-card"
                            data-city="${city.city}"
                        >
                            VIEW ALL
                        </button>
                    </div>

                    <!-- NOMBRE D'HÔTELS -->

                    <p class="card-text">
                        ${city.hotels}
                    </p>

                    <!-- BARRE DES PRIX -->

                    <a
                        href="#"
                        class="price-bar-link"
                        aria-label="Voir les prix pour ${city.city}"
                    >

                        <div class="price-bar">

                            <!-- HOTEL -->

                            <div class="item">
                                <i
                                    class="fa-solid fa-hotel icone"
                                    aria-hidden="true"
                                ></i>

                                <div class="price">

                                    <span>from</span>

                                    <strong>$ 70</strong>

                                </div>
                            </div>


                            <!-- SÉPARATEUR -->

                            <div
                                class="separator"
                                aria-hidden="true"
                            >
                                |
                            </div>


                            <!-- AVION -->

                            <div class="item">

                                <i
                                    class="fa-solid fa-plane icone"
                                    aria-hidden="true"
                                ></i>

                                <div class="price">

                                    <span>from</span>

                                    <strong>$ 150</strong>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;

// ===== AJOUT DE LA CARTE =====
    // Pour ajouter l'élément créé dans le conteneur cards-container.
    cardsContainer.appendChild(col);
});

// ===== ACTIVATION DES BOUTONS VIEW ALL =====

    activateViewAllButtons();
}

// ===== BOUTONS VIEW ALL =====

function activateViewAllButtons() {
    const buttons =
        document.querySelectorAll(".btn-card");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
         const city = button.dataset.city;

            console.log(
                `Voir toutes les offres pour ${city}`
            );

        });

    });

}

// ===== INITIALISATION =====

document.addEventListener(
    "DOMContentLoaded", // Attend que le HTML soit chargé avant d'exécuter le code.
    () => {

        afficherDestinations();
    }
);

