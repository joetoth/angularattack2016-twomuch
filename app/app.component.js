(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1> TwoMuch Decision App - AngularAttack 2016</h1>'
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
          this.title = "This is a website!FRGERGERG";
          this.websiteURL = "http://www.w3schools.com/tags/tag_iframe.asp";
        }
      })
})(window.app || (window.app = {}));
