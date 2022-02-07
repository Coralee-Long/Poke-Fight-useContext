const LogicMethods = {
    getResult: (singlePoke, randomPoke, action) => {
        //console.log("pokemon: " + randomPoke)
        switch (action) {
            case 'attack':
                // console.log("User Health:" + (singlePoke.base.hp - randomPoke.base.Attack))
                console.log('user has selected attack')
                break;
            case 'defence':
                console.log('user has selected defence')
                break;
            case 'specialattack':
                console.log('user has selected special attack')
                break;
            case 'specialdefence':
                console.log('user has selected special defence')
                break;
            default:
                console.log('Not a valid action');
        }
    }
}

export default LogicMethods;