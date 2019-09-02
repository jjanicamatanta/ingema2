<section id="hero" class="b-video " style="position: relative">
      
    <i class="fa fa-volume-off icono-muted" onclick="muteOnOff()" ></i>


    
    <video autoplay loop id="myVideo" muted="true">
      <source src="videos/video-fondo.mp4#t=32" type="video/mp4"  >
      Your browser does not support HTML5 video.
    </video>
    <div class="hero-container">
      <!-- <h1>Bievenido a Ingema</h1> -->
    
      <div>
        <img src="img/logo-ingema-small.png" style="height:120px" alt="">
        <br>
        <br>
        <!-- <h2>We are team of talanted designers making websites with Bootstrap</h2> -->
        <a href="#/nuestros-servicios" class="btn-get-started" onclick="getVideo().muted=false">Nuestos servicios</a>
      </div>

    </div>
  </section>

  <main id="main">
 
    <section id="facts">
      <div class="container wow fadeIn">
        <div class="section-header">
          <h3 class="section-title">Nuestro números</h3>
          <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div class="row counters">

  				<div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">232</span>
            <p>Clients</p>
  				</div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">521</span>
            <p>Projects</p>
  				</div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,463</span>
            <p>Hours Of Support</p>
  				</div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">15</span>
            <p>Hard Workers</p>
  				</div>

  			</div>

      </div>
    </section>
 
    <section id="call-to-action">
      <div class="container wow fadeIn">
        <div class="row">
          <div class="col-lg-9 text-center text-lg-left">
            <h3 class="cta-title">Contáctanos</h3>
            <p class="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="#/contacto">Contáctanos</a>
          </div>
        </div>

      </div>
    </section>
     
  </main>

<script>
  var vid = document.getElementById("myVideo");

  function muteOnOff() {
    console.log(vid.muted);
    if(vid.muted){
      $('.icono-muted').removeClass('fa-volume-off').addClass('fa-volume-up');
      vid.muted = false;
    }
    else{
      vid.muted = true;
      $('.icono-muted').removeClass('fa-volume-up').addClass('fa-volume-off');
    }
  } 
    
</script>

