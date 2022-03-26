import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import { Exercise } from "../entity/Exercise"
import { Program } from "../entity/Program"
import { Badge } from "../entity/Badge"
import { Planned_Workout } from "../entity/Planned_Workout"
import { Friend } from "../entity/Friend"
import { User_Program } from "../entity/User_Program"
import { Initial_Weight } from "../entity/Initial_Weight"
import { User_Badge } from "../entity/User_Badge"
import { Actual_Workout } from "../entity/Actual_Workout"


import { usersToBeSeeded } from "../migration/usersToBeSeeded.js"
import { exercisesToBeSeeded } from "../migration/exercisesToBeSeeded.js"
import { planned_workoutsToBeSeeded } from "../migration/planned_workoutsToBeSeeded.js"
import { programsToBeSeeded } from "../migration/programsToBeSeeded.js"
import { initial_weightsToBeSeeded } from "../migration/initial_weightsToBeSeeded.js"
import { actual_workoutsToBeSeeded } from "../migration/actual_workoutsToBeSeeded.js"
import { badgesToBeSeeded } from "../migration/badgesToBeSeeded.js"
import { user_badgesToBeSeeded } from "../migration/user_badgesToBeSeeded.js"
import { friendsToBeSeeded } from "../migration/friendsToBeSeeded.js"
import { user_programsToBeSeeded } from "../migration/user_programsToBeSeeded.js"


AppDataSource.initialize().then(async () => {

  const userRepository = AppDataSource.getRepository(User);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(User)
  .execute()
      for (const userObj of usersToBeSeeded) {
          const user = userRepository.create(userObj);
          console.log("user", user);
          const newList = await userRepository.save(user);
      };

  const exerciseRepository = AppDataSource.getRepository(Exercise);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Exercise)
  .execute()
        const exercises = []
        exercisesToBeSeeded.forEach(e => {
        exercises.push(exerciseRepository.create(e));
        });
        for (const e of exercises) {
        await exerciseRepository.save(e);
        }

  const planned_workoutRepository = AppDataSource.getRepository(Planned_Workout);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Planned_Workout)
  .execute()
      for (const planned_workoutObj of planned_workoutsToBeSeeded) {
          const planned_workout = planned_workoutRepository.create(planned_workoutObj);
          console.log("planned_workout", planned_workout);
          const newList = await planned_workoutRepository.save(planned_workout);
      };

  const programRepository = AppDataSource.getRepository(Program);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Program)
  .execute()
      for (const programObj of programsToBeSeeded) {
          const program = programRepository.create(programObj);
          console.log("program", program);
          const newList = await programRepository.save(program);
      };

  const initial_weightRepository = AppDataSource.getRepository(Initial_Weight);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Initial_Weight)
  .execute()
      for (const initial_weightObj of initial_weightsToBeSeeded) {
          const initial_weight = initial_weightRepository.create(initial_weightObj);
          console.log("initial_weight", initial_weight);
          const newList = await initial_weightRepository.save(initial_weight);
      };

  const actual_workoutRepository = AppDataSource.getRepository(Actual_Workout);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Actual_Workout)
  .execute()
      for (const actual_workoutObj of actual_workoutsToBeSeeded) {
          const actual_workout = actual_workoutRepository.create(actual_workoutObj);
          console.log("actual_workout", actual_workout);
          const newList = await actual_workoutRepository.save(actual_workout);
      };

  const badgeRepository = AppDataSource.getRepository(Badge);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Badge)
  .execute()
      for (const badgeObj of badgesToBeSeeded) {
          const badge = badgeRepository.create(badgeObj);
          console.log("badge", badge);
          const newList = await badgeRepository.save(badge);
      };
  
  const user_badgeRepository = AppDataSource.getRepository(User_Badge);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(User_Badge)
  .execute()
      for (const user_badgeObj of user_badgesToBeSeeded) {
          const user_badge = user_badgeRepository.create(user_badgeObj);
          console.log("user_badge", user_badge);
          const newList = await user_badgeRepository.save(user_badge);
      };

   const friendRepository = AppDataSource.getRepository(Friend);
   await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(Friend)
  .execute()
      for (const friendObj of friendsToBeSeeded) {
          const friend = friendRepository.create(friendObj);
          console.log("friend", friend);
          const newList = await friendRepository.save(friend);
      };

  const user_programRepository = AppDataSource.getRepository(User_Program);
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(User_Program)
  .execute()
      for (const user_programObj of user_programsToBeSeeded) {
          const user_program = user_programRepository.create(user_programObj);
          console.log("user_program", user_program);
          const newList = await user_programRepository.save(user_program);
      };

}).catch(error => console.log(error))


