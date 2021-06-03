fetch("https://api.thecatapi.com/v1/breeds")
    // fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {

        var btn_gato = document.getElementById('gato')

        btn_gato.addEventListener('click', function() {

            var arrayRazas = [];

            for (var i = 0; i < data.length; i++) {

                // console.log(data[i].name)

                arrayRazas.push(i + " .- " + " " + data[i].name)
            }

            // console.log(data[0].image.url)
            
            alert("Selecciona la raza que desear ver")

            var razas = prompt(arrayRazas)

            var imagen = new Image(300, 300);

            imagen.src = data[razas].image.url;
            document.getElementById('img_gato').append(imagen);

            // console.log(data)

        })
    })