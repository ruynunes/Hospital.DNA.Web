app.component('dnaComponent', {
    controller: DnaController,
    controllerAs: 'DnaController',
    templateUrl: '/js/templates/analise/dna.html'
    //template: 'Hello World'
});

DnaController.$inject = ['$scope', '$location', '$templateCache', 'dnaService', '$compile'];
function DnaController($scope, $location, $templateCache, dnaService, $compile) {

    $scope.CompletarFormulario = function () {
        dnaService.CarregarHtml().then(function (response) {
            var html = "";
            for (var i = 0; i < $scope.numeroAnalises; i++) {
                html += response.data;
            }

            $scope.resultadoAnalise = "";
            compiledElement = $compile(html)($scope);
            pageElement = angular.element('#dna-form');
            pageElement.empty();
            pageElement.append(compiledElement);
        })
    }

    $scope.RodarAnalise = function () {
        var objDna = {
            trechoDna: [],
            trechoVirus: []
        };

        var dnaElement = angular.element('.dna').get();
        var virusElement = angular.element('.virus').get();

        var dnaElementsArray = $.unique(dnaElement);
        var virusElementsArray = $.unique(virusElement);

        angular.forEach(dnaElementsArray, function (key, value) {
            objDna.trechoDna.push(key.value);
        });

        angular.forEach(virusElementsArray, function (key, value) {
            objDna.trechoVirus.push(key.value);
        });

        dnaService.RodarAnalise(objDna).then(function (response) {
            $scope.resultadoAnalise = "";
            $scope.resultadoAnalise = response;
        });
    }

    this.$onInit = function () {
    }
}