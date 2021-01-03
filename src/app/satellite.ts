export class Satellite {

name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
        this.shouldShowWarning.bind(this);
    }

shouldShowWarning(): boolean {
    let checkType = this.type;
    let cS = checkType.toLowerCase();
    let warning = 'space debris';
    if(cS == warning){
        return true;
    }
    else {
        return false;
    }
}
}
