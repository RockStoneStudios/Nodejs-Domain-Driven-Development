import { query } from "express";
import { ICeo } from "../../Domain/ceoEntity";
import { ICeoRepository } from "../../Domain/ceoRepository";
import Ceo from "../Model/Ceo";


export class CeoMongodb implements ICeoRepository{
   async createCeo(newCeo: ICeo): Promise<any> {
        const ceo = await Ceo.create(newCeo);
        return ceo;
    }
    async getAllCeo(): Promise<any> {
        const ceos = await Ceo.find();
        return ceos;
    }

   async getCeoById(id: string): Promise<any> {
        const ceo = await Ceo.findOne({id : id});
        return ceo;
    }

   async  deleteCeo(id: string): Promise<any> {
        const ceo = await Ceo.findOneAndDelete({id : id});
        return ceo;
    }
   async updateCeo(id: string, updateCeo: ICeo): Promise<any> {
        const ceo = await Ceo.findOneAndUpdate({id:id},updateCeo,{new: true});
        return ceo;
    }

    async  queryCeo(): Promise<any> {
        const numberofCeos = await Ceo.count();
        return numberofCeos;
       
    }

   async searchAdvanceCeo(params: any): Promise<any> {
        const ceo = await Ceo.find({age : {$gte : params.min, $lte : params.max}}).limit(params.limit);
        return ceo;
   }
}