angular.module('warriors')
    .controller('WarriorController', function(WarriorsService){
        var wc = this;
        wc.test = 'Hello I am from the Warrior Controller'
        wc.serviceTest = WarriorsService.test
    })
    