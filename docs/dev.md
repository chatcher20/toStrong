# Workout Tracker Prep

## User stories

- Registration - enter user health info
- Program Templates - barbell-only/bodyweight/commercial gym | Upper/lower/full/conditioning
- Beginner page linked to from template page
- Exercise library - searchable/cards
- Hover-over popups
- Google Fit API?
- Dynamically-changing workouts based on completion (business logic)
- Workout notes
- Social - public profile, friend requests, friends list, badges
- Clean and fast/dynamic

## Tech stack

- PERN (PostgreSQL, Express, ReactJS, NodeJS)
- TypeORM?
- Bootstrap (or other CSS framework?) + Sass
- Testing? Cypress at the end?
- APIs
- Multi-page app

## Development strategy

- Discord
- Vertical
- Project structure - /server, /client
- Github pull requests
- Each guy checks out a branch
- Commit and push branch to Github
- Pull request on Github
- Other guys review and accept the pull request to master
- Everybody pulls the latest master before checking out a new branch
- Formatting: Prettier

Beginner LP

- Alternates:
  Day A: Squat, Bench, Dead
  Day B: Squat, OHP, Chinup

Day 1: Squat 3x5, Bench 3x5, Dead 1x5 | Bench 100 lbs
Day 2: Squat 3x5, OHP 3x5, Chin 3xAMRAP
Day 3: Squat 3x5, Bench 3x5, Dead 1x5 | Bench 105 lbs
Day 4: Squat 3x5, OHP 3x5, Chin 3xAMRAP
Day 5: Squat 3x5, Bench 3x5, Dead 1x5 | FAIL @ 110 lbs
...
Day 7: Repeat the bench weight

bench_init = user_programs[seed] // 100
// bench a total of 18 times
bench_history = [...].length === 18
= [ T, T, F, T, null, null, null...]
OR
= []
= [T] then [T,T] then [T,T,F] then [T,T,F,T] (from user_workouts)
bench_weight = bench_init + 5 \* bench_history.filter(Boolean).length

HLM
Week 1: Bench 1x5 @ 200 lbs - succ
Week 2: Bench 1x3 @ 225 lbs - succ
Week 3: Bench 1x1 @ 250 lbs - fail
Week 4: Bench 1x5 @ 205 lbs
Week 5: Bench 1x3 @ 230 lbs
Week 6: Bench 1x1 @ 250 lbs

do 1x5 bench 4 times in 12 weeks
bench_byFive_init = 200
bench_byThree_init = bench_byFive_init * 80/75
bench*byOne_init = bench_byFive_init \* 85/75 -> round to nearest 5 or 2.5
