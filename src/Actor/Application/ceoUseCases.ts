import { ICeo } from "../Domain/ceoEntity";
import { ICeoRepository } from "../Domain/ceoRepository";
import {CeoValue} from '../Domain/ceoValue';


export class CeoUseCases implements ICeoRepository{
    constructor (private readonly ceoRepository : ICeoRepository){}

     public getAllCeo = async () =>{
         const ceos = await this.ceoRepository.getAllCeo();
         return ceos;
     }
      public createCeo = async({firstname,lastname,age,business,fortune}:{firstname : string, lastname :string,age : number,business : string[],fortune : number}) => {
          const ceoValue = new CeoValue({firstname,lastname,age,business,fortune});
          const ceo = await this.ceoRepository.createCeo(ceoValue);
          return ceo;
      }

      public getCeoById = async(id: string) => {
          const ceo = await this.ceoRepository.getCeoById(id);
          return ceo;
      }

      public  deleteCeo= async (id: string)=> {
           const ceo = await this.ceoRepository.deleteCeo(id);
           return ceo;
      }
      public updateCeo = async(id: string, newCeo: ICeo) => {
            const ceo = await this.ceoRepository.updateCeo(id,newCeo);
            return ceo;
      }

     public queryCeo =  async() => {
          const ceo = await  this.ceoRepository.queryCeo();
          return ceo;
      }

      public searchAdvanceCeo = async (limit: any) => {
          
          const ceo = await this.ceoRepository.searchAdvanceCeo(limit);
          return ceo;
      }
      
}