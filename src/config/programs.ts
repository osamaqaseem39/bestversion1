export interface ProgramAnalysis {
  id: string;
  title: string;
  price: number;
  description: string;
  categories: {
    title: string;
    items: string[];
  }[];
}

export const videoAnalysisProgram: ProgramAnalysis = {
  id: 'video-analysis',
  title: "ONE (1) PLAYER&apos;S VIDEO ANALYSIS",
  price: 600.00,
  description: "The Best Version 1 Player Video Analysis Service is evaluated and prepared by highly experienced",
  categories: [
    {
      title: "Technical Skills",
      items: [
        "Ball control: How well the player handles the ball under pressure.",
        "Dribbling: The ability to maneuver past opponents.",
        "Passing accuracy: Precision in short and long passes.",
        "Shooting: Technique, power, and accuracy when taking shots."
      ]
    },
    {
      title: "Tactical Awareness",
      items: [
        "Positioning: How well the player positions themselves on the field.",
        "Decision-making: Choices made with or without the ball.",
        "Game vision: Awareness of teammates, opponents, and space.",
        "Movement off the ball: How the player creates space for themselves or others."
      ]
    },
    {
      title: "Physical Attributes",
      items: [
        "Speed and acceleration: Quickness in short bursts and over longer distances.",
        "Stamina: Ability to sustain performance throughout the match.",
        "Strength: Physicality in duels with opponents."
      ]
    },
    {
      title: "Defensive Abilities (for defenders and defensive midfielders)",
      items: [
        "Tackling: Effectiveness in winning the ball.",
        "Marking: How well the player tracks opponents.",
        "Interceptions: Ability to read the game and cut off passes."
      ]
    },
    {
      title: "Mental Attributes",
      items: [
        "Composure: Staying calm under pressure.",
        "Leadership: Ability to communicate and organize on the field.",
        "Work rate: Effort and willingness to defend and attack."
      ]
    },
    {
      title: "Game Impact",
      items: [
        "Contributions to key moments: Influence on goals, assists, or defensive stops.",
        "Consistency: Level of performance throughout the game."
      ]
    }
  ]
};

export const trainingProgram: ProgramAnalysis = {
  id: 'training-program',
  title: "PERSONALIZED TRAINING PROGRAM",
  price: 450.00,
  description: "A comprehensive 12-week personalized training program designed to enhance your soccer skills and performance",
  categories: [
    {
      title: "Program Structure",
      items: [
        "12-week progressive training schedule",
        "3 training sessions per week",
        "Rest and recovery planning",
        "Performance tracking and adjustments"
      ]
    },
    {
      title: "Skill Development",
      items: [
        "Individual skill assessment and improvement plan",
        "Position-specific training drills",
        "Technical skill enhancement exercises",
        "Game situation simulations"
      ]
    },
    {
      title: "Physical Conditioning",
      items: [
        "Strength and conditioning workouts",
        "Speed and agility training",
        "Endurance building exercises",
        "Injury prevention protocols"
      ]
    },
    {
      title: "Mental Preparation",
      items: [
        "Goal setting and achievement strategies",
        "Mental toughness training",
        "Game day preparation techniques",
        "Stress management and focus exercises"
      ]
    },
    {
      title: "Support & Guidance",
      items: [
        "Weekly progress check-ins",
        "Video analysis of training sessions",
        "Nutrition and recovery advice",
        "24/7 coach support via messaging"
      ]
    }
  ]
};

export const coachingSession: ProgramAnalysis = {
  id: 'coaching-session',
  title: "ONE-ON-ONE COACHING SESSION",
  price: 300.00,
  description: "An intensive 90-minute personalized coaching session with our expert coaches to accelerate your development",
  categories: [
    {
      title: "Session Overview",
      items: [
        "90-minute intensive coaching session",
        "Personalized skill assessment",
        "Real-time feedback and corrections",
        "Video recording for review"
      ]
    },
    {
      title: "Technical Focus",
      items: [
        "Individual skill breakdown and improvement",
        "Position-specific technique training",
        "Advanced skill development",
        "Game application of techniques"
      ]
    },
    {
      title: "Tactical Understanding",
      items: [
        "Game strategy and positioning",
        "Decision-making under pressure",
        "Reading the game situations",
        "Team play and communication"
      ]
    },
    {
      title: "Performance Analysis",
      items: [
        "Pre-session performance review",
        "Real-time technique analysis",
        "Post-session improvement plan",
        "Follow-up recommendations"
      ]
    },
    {
      title: "Additional Benefits",
      items: [
        "Take-home training plan",
        "30-day follow-up support",
        "Access to training resources",
        "Priority booking for future sessions"
      ]
    }
  ]
};

// All available programs
export const programs = {
  videoAnalysis: videoAnalysisProgram,
  trainingProgram: trainingProgram,
  coachingSession: coachingSession,
};

// Helper function to get program by ID
export const getProgramById = (id: string): ProgramAnalysis | null => {
  const programMap = {
    'video-analysis': videoAnalysisProgram,
    'training-program': trainingProgram,
    'coaching-session': coachingSession,
  };
  return programMap[id as keyof typeof programMap] || null;
}; 