angular.module('warriors')
    .service('WarriorsService', function(){
        
        var warriors = [{
            id: 0,
            name: 'Sparticus',
            stats: {
                speed: 7,
                strength: 7,
                spirit: 10,
                stamina: 9
            },
            gender: 'M',
            photo: 'http://i.dailymail.co.uk/i/pix/2012/06/23/article-2163627-13BFF77D000005DC-735_306x468.jpg',
            era: 'Long Ago'
        },{
            id: 1,
            name: 'Crixus',
            stats: {
                speed: 3,
                strength: 10,
                spirit: 10,
                stamina: 6
            },
            photo: 'http://img03.deviantart.net/d712/i/2012/160/a/7/crixus_by_alexx_619-d52tvgz.jpg',
            gender: 'M',
            era: 'Long Ago'
        },{
            id: 2,
            name: 'Gannicus',
            stats: {
                speed: 5,
                strength: 8,
                spirit: 7,
                stamina: 10
            },
            gender: 'M',
            era: 'Long Ago',
            photo: 'http://vignette1.wikia.nocookie.net/spartacus/images/b/b1/Gannicus.jpg/revision/latest?cb=20130106120057&path-prefix=fr'
        },{
            id: 3,
            name: 'Marioticus',
            stats: {
                speed: 10,
                strength: 2,
                spirit: 10,
                stamina: 10
            },
            gender: 'M',
            era: 'Not Real',
            photo: 'http://vignette3.wikia.nocookie.net/spartacus/images/c/c5/Oenomaus-whipping.jpg/revision/latest?cb=20120411072034'
        }]
        

      
      this.getAllWarriors =  function(){
          return warriors;
      }
      
      this.getWarriorById = function(id){
          for(var i = 0; i < warriors.length; i++){
             var currentWarrior = warriors[i];
             if(currentWarrior.id == id){
                 return currentWarrior;
             }
          }
          return {error: 'No warrior at id: ' + id }
      }
      
      this.removeWarrior = function(index){
          warriors.splice(index, 1)
      }
      
      this.addWarrior = function(warrior){
          warriors.push(warrior)
      }
      
        
    })