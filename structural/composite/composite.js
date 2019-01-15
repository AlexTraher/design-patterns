
/**
  * Exercise Interface:
  * getTotalReps()
  *
  */

class Exercise {
  constructor(reps) {
    this.reps = reps;
  }

  getTotalReps() {
    return this.reps;
  }
}

// Here workout is the composite - the client can call getTotalReps on a single exercise or a collection
class Workout {
  constructor() {
    this.exercises = [];
  }

  addExercise(exercise) {
    this.exercises.push(exercise);
  }

  getTotalReps() {
    return this.exercises.reduce((accumulated, exercise) => {
      return accumulated + exercise.getTotalReps();
    }, 0);
  }
}

module.exports = {
  Exercise,
  Workout,
}

