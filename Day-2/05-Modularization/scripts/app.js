require.config({
	baseUrl : "/scripts/"
});
require(['TaskUI'],function(TUI){
  var app = new TUI();
  app.init();
});