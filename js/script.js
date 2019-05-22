var pokemon=angular.module("pokemon",[])
//modulo para obtener api de pokemon 
pokemon.controller("pokedex",function ($scope,$rootScope,$http){
	$http({
		method: "GET",
		url:"https://pokeapi.co/api/v2/25"
	}).then(function callbackSuccess(y){
		console.log(y);
	})
	})