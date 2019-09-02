(function($) {
    // var hash = '#';
    var hash = '#';
    function setTitle(title){
      document.title = title+" | Ingema";
    } 

    function redirect(app,context,pageName,title){
        setTitle(title);
        
        var htmlFolderName = "html"; 
        var templateFolderTemplate = htmlFolderName+"/templates";
        var mainTemplate = "page.ms";
        
        if(pageName == "home.ms")
          mainTemplate = "home.ms";
        
        app.load(htmlFolderName+'/'+pageName)
            .then(function(partial) {
              context.partials = {page: partial};
              context.title = title;
              // context.friend = context.params.friend;
              context.partial(templateFolderTemplate+'/'+mainTemplate);  
            });
        // context.app.swap('');
        // context.render(pageName, {})
        //   .appendTo(context.$element());
    }

    var app = $.sammy('#app', function() {

       // include the plugin and alias mustache() to ms()
      this.use('Mustache', 'ms');
 
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
        redirect(this,context,'home.ms','Hola');
      });

      this.get(hash+'/nuestros-servicios', function(context) {
        redirect(this,context,'services.ms','Nuestros Servicios');
      });

      this.get(hash+'/acerca-de-ingema', function(context) {
        redirect(this,context,'about.ms','Acerca de Ingema');
      });

      this.get(hash+'/contacto', function(context) {
        redirect(this,context,'contact.ms','Contáctanos');        
      });
      this.get(hash+'/nuestro-equipo', function(context) {
        redirect(this,context,'team.ms','Nuestro Equipo');        
      });

      this.get(hash+'/nuestro-portafolio', function(context) {
        redirect(this,context,'portfolio.ms','Nuestro Potafolio');
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
        // $('footer, #app').hide();
        var hash = document.location.hash;
        $("nav").find("li").removeClass("menu-active");
        $("nav").find("a[href='"+hash+"']").parent().addClass("menu-active");
      });
      
      this.after(function() {
        // $("#app, footer").fadeIn('slow');
        // $('#preloader').show();
      });
  
    });
  
    $(function() {
      app.run(hash+'/');
    });
  
  })(jQuery);