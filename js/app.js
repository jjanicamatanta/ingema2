(function($) {
    // var hash = '#';
    var hash = '#';
    function setTitle(title){
      document.title = title+" | Ingema";
    } 

    function redirect(context,pageName,title){
        setTitle(title);
        context.app.swap('');
        context.render(pageName, {})
          .appendTo(context.$element());
    }

    var app = $.sammy('#app', function() {
      
      // this.use('Template');
      // this.around(function(callback) {
      //   var context = this;
      //   this.load('data/articles.json')
      //       .then(function(items) {
      //         context.items = items;
      //       })
      //       .then(callback);
      // });
  
      this.get(hash+'/', function(context) {
        redirect(context,'home.html','Hola');
      });

      this.get(hash+'/nuestros-servicios', function(context) {
        redirect(context,'services.html','Nuestros Servicios');
      });

      this.get(hash+'/acerca-de-ingema', function(context) {
        redirect(context,'about.html','Acerca de Ingema');
      });

      this.get(hash+'/contacto', function(context) {
          redirect(context,'contact.html','Contáctanos');
      });
      this.get(hash+'/nuestro-equipo', function(context) {
        redirect(context,'team.html','Nuestro Equipo');
      });
      this.get(hash+'/nuestro-portafolio', function(context) {
        redirect(context,'portfolio.html','Nuestro Potafolio');
      });


      
      // this.get('#/about/', function(context) { 
      //     var str=location.href.toLowerCase();
      //     context.app.swap('');
      //     context.render('templates/about.template', {})
      //            .appendTo(context.$element());
      // });
  
      // this.get('#/article/:id', function(context) {
      //   this.item = this.items[this.params['id']];
      //   if (!this.item) { return this.notFound(); }
      //   this.partial('templates/article-detail.template');
      // });
  
  
      this.before(function() {
        $('footer, #app').hide();
        var hash = document.location.hash;
        $("nav").find("li").removeClass("menu-active");
        $("nav").find("a[href='"+hash+"']").parent().addClass("menu-active");
      });
      
      this.after(function() {
        $("#app, footer").fadeIn('slow');
        // $('#preloader').show();
      });
  
    });
  
    $(function() {
      app.run(hash+'/');
    });
  
  })(jQuery);