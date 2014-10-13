
angular.module('celestinoramalho.my-directive', []).
  directive('crMyDirective', function () {
    // implementation goes here
    var i = 2;
  });
/**
 * Useful directives 
 * 
 * @author cramalho
 */


angular.module('celestinoramalho.my-directive').directive('crAngularDirective', function() {

	return {
		restrict: 'E',
		templateUrl: 'scripts/directives/templates/fTesteExemplo.html',
		scope : { 
			data : '='
		}, 
		replace : true,
		transclude : false,
		controller : controller
	};

	function controller($scope, $attrs) {
		//$log.debug("fTable controller");
		
    };
		
		
		
		
	
});
