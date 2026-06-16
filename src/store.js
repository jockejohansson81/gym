// State management för träningsappen
export const store = {
  currentUser: null,
  workoutTemplates: [],
  exercises: [],
  workoutSessions: [],
  currentSession: null,
  currentView: "dashboard", // dashboard, planning, logging, progress

  // Simulerad data för offline-läge
  async loadMockData() {
    this.exercises = [
      { id: "1", name: "Bänkpress", muscleGroup: "Bröst", description: "Liggande bröstövning" },
      { id: "2", name: "Squat", muscleGroup: "Ben", description: "Knäbening" },
      { id: "3", name: "Deadlift", muscleGroup: "Rygg", description: "Marklyft" },
      { id: "4", name: "Skuldorpress", muscleGroup: "Axlar", description: "Stående axelövning" },
      { id: "5", name: "Markmonster", muscleGroup: "Ben", description: "Marklyft variant" },
    ];

    this.workoutTemplates = [
      {
        id: "push",
        name: "Push",
        exercises: ["1", "4"],
        description: "Bröst, axlar, triceps"
      },
      {
        id: "pull",
        name: "Pull",
        exercises: ["3"],
        description: "Rygg, biceps"
      },
      {
        id: "legs",
        name: "Ben",
        exercises: ["2", "5"],
        description: "Benövningar"
      }
    ];
  },

  addWorkoutTemplate(template) {
    this.workoutTemplates.push({
      id: Date.now().toString(),
      ...template
    });
  },

  addExercise(exercise) {
    this.exercises.push({
      id: Date.now().toString(),
      ...exercise
    });
  },

  startSession(templateId) {
    const template = this.workoutTemplates.find(t => t.id === templateId);
    this.currentSession = {
      id: Date.now().toString(),
      templateId,
      templateName: template.name,
      startTime: new Date(),
      exercises: template.exercises.map(exId => {
        const exercise = this.exercises.find(e => e.id === exId);
        return {
          exerciseId: exId,
          name: exercise.name,
          sets: []
        };
      }),
      bodyWeight: null
    };
  },

  addSet(exerciseIndex, set) {
    if (this.currentSession && this.currentSession.exercises[exerciseIndex]) {
      this.currentSession.exercises[exerciseIndex].sets.push({
        ...set,
        timestamp: new Date()
      });
    }
  },

  finishSession() {
    if (this.currentSession) {
      this.currentSession.endTime = new Date();
      this.workoutSessions.push(this.currentSession);
      const session = this.currentSession;
      this.currentSession = null;
      return session;
    }
  }
};

// Initialize with mock data
store.loadMockData();
