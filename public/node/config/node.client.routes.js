/**
 * Created by andreafspeziale on 25/01/17.
 */
node.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider.when('/', {
        templateUrl: '/public/node/views/node.html'
    }).otherwise({
        redirectTo: '/'
    });
}])