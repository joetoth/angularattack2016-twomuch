(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    ng.platformBrowserDynamic.bootstrap(app.websiteComponent);
  });
})(window.app || (window.app = {}));
