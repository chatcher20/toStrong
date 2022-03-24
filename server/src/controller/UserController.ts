import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User"; 

export class UserController {

   // private userRepository = getRepository(User); 
   
   // async all(request: Request, response: Response, next: NextFunction) { 
   //    return this.userRepository.find(); 
   // } 
   
   // async one(request: Request, response: Response, next: NextFunction) {
   //    console.log(request.params.id);
   //    return this.userRepository.findOne(request.params.id); 
   // } 
   
   // async save(request: Request, response: Response, next: NextFunction) { 
   //    return this.userRepository.save(request.body); 
   // } 
   
   // async remove(request: Request, response: Response, next: NextFunction) { 
   //    let userToRemove = await this.userRepository.findOne(request.params.id); 
   //    await this.userRepository.remove(userToRemove); 
   // } 
}


// Here,

// all method is used to fetch all users from the database.

// one method is used to fetch a single user from the database using user id

// save method is used to save the user information into the database.

// delete method is used to delete the user from the database using user id