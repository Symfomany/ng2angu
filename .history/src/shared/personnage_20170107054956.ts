/**
 * Interface Personnage
 */
export class Personnage {

    private sexe: Boolean,
    private activite: String,
    private naissance: String,
    private note: number,
    private pays: String,
    private photo: String,
    private resume: String,
    private created: Number,
    private saison?: Array<Number>
    private coord?: any,
    private like?: number,
    private dislike?: number
}
