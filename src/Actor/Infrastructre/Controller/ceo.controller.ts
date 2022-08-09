import { Request,Response } from "express";
import { CeoUseCases } from "../../Application/ceoUseCases";


export class CeoController {

    constructor(private ceoUseCases : CeoUseCases){}

    public verCeos = async (req:Request,res:Response) => {
         try {
              const ceos = await this.ceoUseCases.getAllCeo();
              return res.status(200).json(ceos);
         }catch(error){
            console.log(error);
         }
    }
    public buscarCeoporId = async(req:Request,res : Response) => {
         try{
            const ceo = await this.ceoUseCases.getCeoById(req.params.id);
            return res.status(200).json(ceo);
         }catch(error){
            console.log(error);
         }
    }

    public crearCeo = async(req:Request,res: Response) => {
        try{
            const newCeo = req.body;
            const ceo = await this.ceoUseCases.createCeo(newCeo);
            return res.status(200).json({message : "Ceo has been Created with Successfull",ceo})
        }catch(error){
            console.log(error);
        }
    }

    public borrarCeo = async(req:Request,res : Response) =>{ 
        console.log(req.params.id)
        try{
            const ceo = await this.ceoUseCases.deleteCeo(req.params.id);
            return res.status(201).json({message : "Ceo has been Delete with Sucessfull"});
        }catch(error){
            console.log(error);
        }
    }

    public actualizarCeo = async(req:Request,res: Response) =>{
        try{
            const ceo = await this.ceoUseCases.updateCeo(req.params.id,req.body);
            return res.status(200).json({message : "Ceo has been Update with",ceo});
        }catch(error){
            console.log(error);
        }
    }

    public numeroDeCeo = async(req:Request,res: Response)=> {
        try {
            const count = await this.ceoUseCases.queryCeo();
            return res.status(200).json({message : `The number of the ceos is = `+count})
        }catch(error){
            console.log(error);
        }
    }

    public busquedaAvanzada = async(req:Request,res : Response)=>{
         const params = req.query;
          console.log(params)
        try{
             const ceos = await this.ceoUseCases.searchAdvanceCeo(params);
             return res.status(200).json(ceos);
        }
        catch(error){
            console.log(error);
        }
    }

  
}