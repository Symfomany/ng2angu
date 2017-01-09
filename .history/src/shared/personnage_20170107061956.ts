/**
 * Interface Personnage
 */
export class Personnage {

    private like;
    private dislike;
    private created;
    private coord: any;


    /**
     *  Constructor
     */
    public constructor(
        private sexe?: Boolean,
        private activite?: String,
        private naissance?: String,
        private note?: Number,
        private pays?: String,
        private photo?: String,
        private resume?: String) {

        this.like = this.dislike = 0;
        this.created = new Date().getTime();

        let long = Math.floor((Math.random() * 10) + 1) / 10000;
        let lat = Math.floor((Math.random() * 10) + 1) / 10000;
        this.coord.lat = 41.203322 * long;
        this.coord.long = -77.194525 * lat;
    }
}
