/**
 * Interface Personnage
 */
export class Personnage {

    sexe: Boolean;
    activite: String;
    naissance: String;
    note: Number;
    pays: String;
    photo: String;
    resume: String;
    created: Number;
    saison?: Array<Number>;
    coord?: any;
    like?: number;
    dislike?: number;

    /**
     * 
     */
    public constructor() {
        this.like = this.dislike = 0;
        this.created = new Date().getTime();

        let long = Math.floor((Math.random() * 10) + 1) / 10000;
        let lat = Math.floor((Math.random() * 10) + 1) / 10000;
        this.coord.lat = 41.203322 * long;
        this.coord.long = -77.194525 * lat;
    }
}
