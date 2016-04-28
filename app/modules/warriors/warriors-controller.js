angular.module('warriors')
    .controller('WarriorsController', function(WarriorsService){
        var wsc = this;
        wsc.warriors = WarriorsService.getAllWarriors();
        
        wsc.editWarrior = function(warrior){
            wsc.warriorFromForm = warrior;
            wsc.editing = true;
        }
        
        wsc.removeWarrior = function (index) {
            WarriorsService.removeWarrior(index);
        }
        
        wsc.addWarrior = function(warrior){
            //Lets Validate some input
            if(wsc.editing){
                wsc.warriorFromForm = {}
                wsc.editing = false;
                return;
            }
            WarriorsService.addWarrior(warrior);
        }
        
        
    })
    