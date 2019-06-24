app.service('dnaService', function ($http) {
    this.CarregarHtml = function () {
        return $http.get('/js/templates/analise/formulario.html').then(function(response) {
            return response;
        });
    };

    this.RodarAnalise = function (objDna) {
        return $http.post('https://localhost:44333/api/dna/analisadna', objDna).then(function (response) {
            return response.data;
        });
    };
})