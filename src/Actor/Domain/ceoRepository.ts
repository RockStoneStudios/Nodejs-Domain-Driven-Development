import {ICeo} from './ceoEntity'

export interface ICeoRepository {
    getAllCeo():Promise <ICeo[] |null>
    getCeoById(id:string) : Promise<ICeo|null>
    createCeo(ceo : ICeo) : Promise<ICeo |null>
    deleteCeo(id : string) : Promise<ICeo |null>
    updateCeo(id : string, ceo : ICeo) : Promise<ICeo |null>
    queryCeo() : Promise<any>
    searchAdvanceCeo(limit : any) : Promise<ICeo[]|null>
}