let contador = 0;
fetch("peliculas.json")
  .then((datos) => {
    return datos.json();
  })
  .then((datos) => {
    datos.forEach((pelis) => {
      console.log(pelis.Title);

      if (contador >= 0 && contador < 6) {
        let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem">
  <img
    src="${pelis.Images[0]}"
    class="card-img-top"
    alt="${pelis.Images[0]}"
  />
  <div class="card-body">
    <h5 class="card-title">${pelis.Title}</h5>
    <p class="card-text">
      ${pelis.Plot}
    </p>
    <p class="card-text">
      ${pelis.Genre}
    </p>
    <p class="card-text">
      ${pelis.Type}
    </p>
    <p class="card-text">
    año ${pelis.Year}
  </p>
  <p class="card-text">
  imdbRating ${pelis.imdbRating}
</p>
    <a href="#" class="btn btn-primary">VER AHORA</a>
  </div>
</div>
</div>`;

        document.getElementById("1").innerHTML += descripcion;
        contador = contador + 1;
      }

      if (contador >= 6 && contador < 12) {
        let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem">
  <img
    src="${pelis.Images[0]}"
    class="card-img-top"
    alt="${pelis.Images[0]}"
  />
  <div class="card-body">
    <h5 class="card-title">${pelis.Title}</h5>
    <p class="card-text">
      ${pelis.Plot}
    </p>
    <p class="card-text">
      ${pelis.Genre}
    </p>
    <p class="card-text">
    ${pelis.Type}
  </p>
    <p class="card-text">
    año ${pelis.Year}
  </p>
  <p class="card-text">
  imdbRating ${pelis.imdbRating}
</p>
    <a href="#" class="btn btn-primary">VER AHORA</a>
  </div>
</div>
</div>`;

        document.getElementById("2").innerHTML += descripcion;
        contador = contador + 1;
      }

      if (contador >= 12 && contador < 18) {
        let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem;">
  <img
    src="${pelis.Images[0]}"
    class="card-img-top"
    alt="${pelis.Images[0]}"
  />
  <div class="card-body">
    <h5 class="card-title">${pelis.Title}</h5>
    <p class="card-text">
      ${pelis.Plot}
    </p>
    <p class="card-text">
      ${pelis.Genre}
    </p>
    <p class="card-text">
    ${pelis.Type}
  </p>
    <p class="card-text">
    año ${pelis.Year}
  </p>
  <p class="card-text">
  imdbRating ${pelis.imdbRating}
</p>
    <a href="#" class="btn btn-primary">VER AHORA</a>
  </div>
</div>
</div>`;

        document.getElementById("3").innerHTML += descripcion;
        contador = contador + 1;
      }
      if(contador == 18)
      {
        contador=0;
      }
    });
  });



  function funcion_series()
  {
    console.log(contador)
    document.getElementById("quitar").innerHTML=``;
document.getElementById("1").innerHTML=``;
document.getElementById("2").innerHTML=``;
document.getElementById("3").innerHTML=``;
 fetch("peliculas.json").then((serie)=>{return serie.json()})
 .then((serie)=>{
serie.forEach((datos)=>{
if(datos.Type == "series")
{
  if (contador >= 0 && contador < 6) {
    let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem">
<img
src="${datos.Images[0]}"
class="card-img-top"
alt="${datos.Images[0]}"
/>
<div class="card-body">
<h5 class="card-title">${datos.Title}</h5>
<p class="card-text">
  ${datos.Plot}
</p>
<p class="card-text">
  ${datos.Genre}
</p>
<p class="card-text">
  ${datos.Type}
</p>
<p class="card-text">
año ${datos.Year}
</p>
<p class="card-text">
imdbRating ${datos.imdbRating}
</p>
<a href="#" class="btn btn-primary">VER AHORA</a>
</div>
</div>
</div>`;

    document.getElementById("1").innerHTML += descripcion;
    contador = contador + 1;
  }

  if (contador >= 6 && contador < 12) {
    let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem">
<img
src="${datos.Images[0]}"
class="card-img-top"
alt="${datos.Images[0]}"
/>
<div class="card-body">
<h5 class="card-title">${datos.Title}</h5>
<p class="card-text">
  ${datos.Plot}
</p>
<p class="card-text">
  ${datos.Genre}
</p>
<p class="card-text">
${datos.Type}
</p>
<p class="card-text">
año ${datos.Year}
</p>
<p class="card-text">
imdbRating ${datos.imdbRating}
</p>
<a href="#" class="btn btn-primary">VER AHORA</a>
</div>
</div>
</div>`;

    document.getElementById("2").innerHTML += descripcion;
    contador = contador + 1;
  }

  if (contador >= 12 && contador < 18) {
    let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem;">
<img
src="${datos.Images[0]}"
class="card-img-top"
alt="${datos.Images[0]}"
/>
<div class="card-body">
<h5 class="card-title">${datos.Title}</h5>
<p class="card-text">
  ${datos.Plot}
</p>
<p class="card-text">
  ${datos.Genre}
</p>
<p class="card-text">
${datos.Type}
</p>
<p class="card-text">
año ${datos.Year}
</p>
<p class="card-text">
imdbRating ${datos.imdbRating}
</p>
<a href="#" class="btn btn-primary">VER AHORA</a>
</div>
</div>
</div>`;

    document.getElementById("3").innerHTML += descripcion;
    contador = contador + 1;
  }
  if(contador >= 8)
  {
    contador=0;
  }
}


});

 })


  }

  function funcion_peliculas()
  {
    console.log(contador)
document.getElementById("quitar").innerHTML=``;
document.getElementById("1").innerHTML=``;
document.getElementById("2").innerHTML=``;
document.getElementById("3").innerHTML=``;
 fetch("peliculas.json").then((serie)=>{return serie.json()})
 .then((serie)=>{
serie.forEach((datos)=>{
if(datos.Type == "movie")
{
  if (contador >= 0 && contador < 6) {
    let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem">
<img
src="${datos.Images[0]}"
class="card-img-top"
alt="${datos.Images[0]}"
/>
<div class="card-body">
<h5 class="card-title">${datos.Title}</h5>
<p class="card-text">
  ${datos.Plot}
</p>
<p class="card-text">
  ${datos.Genre}
</p>
<p class="card-text">
  ${datos.Type}
</p>
<p class="card-text">
año ${datos.Year}
</p>
<p class="card-text">
imdbRating ${datos.imdbRating}
</p>
<a href="#" class="btn btn-primary">VER AHORA</a>
</div>
</div>
</div>`;

    document.getElementById("1").innerHTML += descripcion;
    contador = contador + 1;
  }

  if (contador >= 6) {
    let descripcion = `   <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 bb mb-3">
<div class="card" style="width: 15rem">
<img
src="${datos.Images[0]}"
class="card-img-top"
alt="${datos.Images[0]}"
/>
<div class="card-body">
<h5 class="card-title">${datos.Title}</h5>
<p class="card-text">
  ${datos.Plot}
</p>
<p class="card-text">
  ${datos.Genre}
</p>
<p class="card-text">
${datos.Type}
</p>
<p class="card-text">
año ${datos.Year}
</p>
<p class="card-text">
imdbRating ${datos.imdbRating}
</p>
<a href="#" class="btn btn-primary">VER AHORA</a>
</div>
</div>
</div>`;

    document.getElementById("2").innerHTML += descripcion;
    contador = contador + 1;
  }


  if(contador >= 12)
  {
    contador=0;
  }
}


});

 })
  }
