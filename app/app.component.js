(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>AngularAttack 2016</h1><p>Your project runs - like yeah it does!</p>'
    })
    .Class({
      constructor: function() {}
    });

    app.websiteComponent =
      ng.core.Component({
        selector: 'website',
        templateUrl: 'app/templates/website.html'
      })
      .Class({
        constructor: function() {
          this.title = "This is a website!";
          this.websiteURL = "http://www.w3schools.com/tags/tag_iframe.asp";
        }
      })
})(window.app || (window.app = {}));
