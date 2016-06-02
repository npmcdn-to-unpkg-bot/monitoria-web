   app.controller('MainController', ['$http','$scope','$rootScope','$state', function($http, $scope, $rootScope, $state) {
       var store = this;
       $rootScope.usuario = {};
       $scope.disciplinasLista = [];
       $rootScope.mensagens = [];
       
       store.tasks = ["Item One",
                      "Item dois",
                      "Item 3"
                      ];
       
       //Função Login para uso na função da parte CORE usando SPARK
       $scope.loginBD = function(usuario) {
    	   $http.post('/login', usuario).success(function(response) {
    		   $rootScope.usuario = response;
    		   $rootScope.isAutenticado = true;
    		   $state.go("inicio");	
    	   }).error(function(response){
    		   $scope.mensagem("Erro etc");
    	   });
       }
       
       $scope.login = function(usuario) {
    	   if (usuario.matricula == "2016123" && usuario.senha == "12345") {
    		   $rootScope.isAutenticado = true;
    		   $state.go("inicio");			
    	   } else {
    		   $rootScope.mensagens = [];
    		   $rootScope.mensagens.push("Usuario ou senha incorretos");
    	   }
    	   
       };
       
       $scope.sair = function() {
    	   $state.go("login");
    	   $rootScope.isAutenticado = false;
       };
       
       $scope.aluno = {}
       $scope.aluno.nome = "Pedro do Ovo";
       $scope.aluno.matricula = "2015983456";
       $scope.aluno.semestre = "22016";
       $scope.aluno.nota = 7.0;
       $scope.aluno.ira = 9.2;
       
       $scope.aluno2 = {}
       $scope.aluno2.nome = "Woxinton Mendes";
       $scope.aluno2.matricula = "2015983487";
       $scope.aluno2.semestre = "22016";
       $scope.aluno2.nota = 10.0;
       $scope.aluno2.ira = 6.7;
       
       
       $scope.montaDisciplinas = function() {
    	   $scope.disciplina = {};
    	   $scope.disciplina.alunos = [];
    	   $scope.disciplina.alunos.push($scope.aluno);
    	   $scope.disciplina.alunos.push($scope.aluno2);
    	   $scope.disciplina.nome = "Engenharia de Redes";
    	   $scope.disciplinasLista.push($scope.disciplina);
    	   
    	   $scope.disciplina = {};
    	   $scope.disciplina.alunos = [];
    	   $scope.disciplina.alunos.push($scope.aluno);
    	   $scope.disciplina.nome = "Engenharia Elétrica";
           $scope.disciplinasLista.push($scope.disciplina);
       };
       
       
   }]);