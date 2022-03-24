import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Exercise} from "../entity/Exercise"; 

export class ExerciseController {

   private exerciseRepository = getRepository(Exercise); 
   
   async all(request: Request, response: Response, next: NextFunction) { 
      return this.exerciseRepository.find(); 
   } 
   
   // async one(request: Request, response: Response, next: NextFunction) { 
   //    return this.exerciseRepository.findOne(request.params.id); 
   // } 
   
   // async save(request: Request, response: Response, next: NextFunction) { 
   //    return this.exerciseRepository.save(request.body); 
   // } 
   
   // async remove(request: Request, response: Response, next: NextFunction) { 
   //    let exerciseToRemove = await this.exerciseRepository.findOne(request.params.id); 
   //    await this.exerciseRepository.remove(exerciseToRemove); 
   // } 
}