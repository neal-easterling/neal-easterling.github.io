


const checkLocal = (entity) =>{
    if(entity != fromWI){
        return false;
    }else{
        return true;
    }

function orderBeer(label, checkLocal){
    if (checkLocal(label)) {
        me.drink();
    }else{
        me.sendBack();
    }
}

function askForDirectionsToCheeseStore(stranger, checkLocal){
    me.say('Yaderhey');
    if(checkLocal(stranger.response)){
        me.askWhereCheese();
    }else{
        me.say('Have a great day der');
    }
}
