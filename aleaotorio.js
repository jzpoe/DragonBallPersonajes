const boton = document.getElementById("boton");
        const mensaje = document.getElementById("personaje");
        const imagenPersonaje = document.getElementById("imagenPersonaje");

        const personajes = [
            { nombre: "Goku", imagen: "./img/goku.png" },
            { nombre: "Vegeta", imagen: "./img/vegeta.png" },
            { nombre: "Gohan", imagen: "./img/gohan.png" },
            { nombre: "Milk", imagen: "./img/milk.png" },
            { nombre: "Pam", imagen: "./img/pam.png" },
            { nombre: "Bulma", imagen: "./img/bulma.png" }
        ];

        boton.addEventListener("click", function() {
            const indiceAleatorio = Math.floor(Math.random() * personajes.length);
            const personajeSeleccionado = personajes[indiceAleatorio];

            mensaje.textContent = personajeSeleccionado.nombre;
            imagenPersonaje.src = personajeSeleccionado.imagen;
            imagenPersonaje.style.display = "block"; // Mostrar la imagen
        });


