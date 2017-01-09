/**
 * Interface Personnage
 */
export class Personnage {
    private _id: Number;
    private like: Number;
    private dislike: Number;
    private created: Number;
    private coord: any;


    /**
     *  Constructor
     */
    public constructor(

        private sexe?: Boolean,
        private pseudo?: String,
        private activite?: String,
        private naissance?: any,
        private note?: Number,
        private pays?: String,
        private photo?: String,
        private resume?: String) {

        this.like = this.dislike = 0;
        this.created = new Date().getTime();

        let long = Math.floor((Math.random() * 10) + 1) / 10000;
        let lat = Math.floor((Math.random() * 10) + 1) / 10000;
        this.coord = { lat: 41.203322 * long, long: -77.194525 * lat };
    }


    set id(id: Number) {
        this._id = id
    }
}
