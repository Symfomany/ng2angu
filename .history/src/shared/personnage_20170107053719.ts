/**
 * Interface Personnage
 */
export interface Personnage {

    sexe: Boolean,
    activite: String,
    naissance: String,
    note: number,
    pays: String,
    photo: String,
    resume: String,
    created: Number,
    saison?: Array<Number>
    coord?: any,
    like?: number,
    dislike?: number
}
