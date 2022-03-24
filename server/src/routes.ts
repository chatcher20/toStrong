// routes.ts file maps the user controller methods to proper URL 
// added the same methods for exercise controller

import {UserController} from "./controller/UserController";
import {ExerciseController} from "./controller/ExerciseController"; 

export const Routes = [{ 
      method: "get", 
      route: "/users", 
      controller: UserController, action: "all" 
   }, { 
      method: "get", 
      route: "/users/:id", controller: UserController, action: "one" 
   }, { 
      method: "post", 
      route: "/users", 
      controller: UserController, action: "save" 
   }, { 
      method: "delete", route: "/users/:id", controller: UserController,
      action: "remove"
   }, {
      method: "get", 
      route: "/exercises", 
      controller: ExerciseController, action: "all" 
   }, { 
      method: "get", 
      route: "/exercises/:id", controller: ExerciseController, action: "one" 
   }, { 
      method: "post", 
      route: "/exercises", 
      controller: ExerciseController, action: "save" 
   }, { 
      method: "delete", route: "/exercises/:id", controller: ExerciseController,
      action: "remove"
}];






// Here,

// /users url is mapped to user controller. Each verb post, get and 
// delete are mapped to different methods.