const { describe, it } = require('mocha');
const assert = require('assert');
const { Exercise, Workout } = require('../structural/composite/composite');

describe('Composite example', function() {
 it('gets the total reps for a single exercise', function() {
  const benchPress = new Exercise(15);

  assert.equal(benchPress.getTotalReps(), 15);
 });

 it('gets the total reps for a workout', function() {
  const benchPress = new Exercise(20);
  const dbPress = new Exercise(40);

  const workout = new Workout();
  workout.addExercise(benchPress);
  workout.addExercise(dbPress);

  assert.equal(workout.getTotalReps(), 60);
 });

 it('gets the total reps for a workout of workouts', function() {
  const benchPress = new Exercise(20);
  const dbPress = new Exercise(40);
  const cableFly = new Exercise(12);

  const chestWorkout = new Workout();
  chestWorkout.addExercise(benchPress);
  chestWorkout.addExercise(dbPress);
  chestWorkout.addExercise(cableFly);

  const bentRow = new Exercise(30);
  const seatedRow = new Exercise(10);
  const pullups = new Exercise(60);

  const backWorkout = new Workout();
  backWorkout.addExercise(bentRow);
  backWorkout.addExercise(seatedRow);
  backWorkout.addExercise(pullups);


  const chestAndBackWorkout = new Workout();
  chestAndBackWorkout.addExercise(chestWorkout);
  chestAndBackWorkout.addExercise(backWorkout);

  assert.equal(chestAndBackWorkout.getTotalReps(), 172);

 });
});