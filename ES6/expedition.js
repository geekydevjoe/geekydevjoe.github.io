import Vacation from './vacation'

class Expedition extends Vacation {
    constructor(destination, length, gear){
        super(destination, length)
        this.gear = gear
    }

    print(){
        super.print()
        console.log(`bring your ${this.gear.join(" and your")}`)
    }
    myfunc = arg => `${arg} is the argument`
}

export default Expedition