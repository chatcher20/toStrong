const { MigrationInterface, QueryRunner } = require("typeorm"); 

module.exports = class PostRefactoringNewest1648161812833 {

    async up(queryRunner) {
        // first need to create database, then seed it with the code below
          
        await queryRunner.query(`INSERT INTO "user" (username, email, password, password_confirmation, weight, height_feet, height_inches, avatar, about_me, weight_change) 
        VALUES ('Bob','bob@example.com', 'hello', 'hello', 180, 5, 10, 'trex', 'I have short arms', 'bulk')`);

        await queryRunner.query(`INSERT INTO "user" (username, email, password, password_confirmation, weight, height_feet, height_inches, avatar, about_me, weight_change) 
        VALUES ('Dean','dean@example.com', 'yellow', 'yellow', 175, 5, 8, 'stegosaur', 'I am not a t-rex', 'cut')`);

        await queryRunner.query(`INSERT INTO "exercise" (name, description, video_url)
        VALUES ('pullups', 'A classic back and bicep exercise where you pull yourself up while holding a bar', 'www.youtube.com')`);

        await queryRunner.query(`INSERT INTO "planned_workout" (exercise_id, day, exercise_order)
        VALUES (57, 23, 3)`);

        await queryRunner.query(`INSERT INTO "program" (planned_workout_id, name, duration, description, modality, equipment_type)
        VALUES (34, '16 week bulk', 16, 'This program will help you improve strength', 'commercial gym', 'all')`);

        await queryRunner.query(`INSERT INTO "user_program" (user_id, program_id, start_date)
        VALUES (2, 34, 'Friday, April 1st')`);

        await queryRunner.query(`INSERT INTO "initial_weight" (user_program_id, exercise_id, weight)
        VALUES (5, 10, 90)`);

        await queryRunner.query(`INSERT INTO "actual_workout" (user_id, exercise_id, planned_workout_id, exercise_completion)
        VALUES (1, 4, 3, true)`);

        await queryRunner.query(`INSERT INTO "badge" (name, description, image)
        VALUES ('500lb Deadlift Badge', 'You are a beast!', 'image url here')`);

        await queryRunner.query(`INSERT INTO "user_badge" (user_id, badge_id)
        VALUES (3, 4)`);

        await queryRunner.query(`INSERT INTO "friend" (user_id, friend_id)
        VALUES (1, 2)`);

        // user_program
    

    }

    async down(queryRunner) {
        // now need to delete the database when running migration "revert"
        await queryRunner.query(`DROP DATABASE "tostrong"`);
    }

}



/*
AppDataSource.initialize().then(async () => {


}).catch(error => console.log(error))
*/