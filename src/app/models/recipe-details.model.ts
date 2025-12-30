interface Ingredient {
  image: string;
  original: string;
  measures: Measures;
}

interface Measures {
  us: {
    amount: number;
    unitLong: string;
  };
  metric: {
    amount: number;
    unitLong: string;
  };
}

interface InstructionStep {
  number: number;
  step: string;
}

interface Instruction {
  steps: InstructionStep[];
}

interface RecipeDetailsModel {
  id: number;
  title: string;
  image: string;
  extendedIngredients: Ingredient[];
  analyzedInstructions: Instruction[];
}

export {
  RecipeDetailsModel,
  Ingredient,
  Measures,
  Instruction,
  InstructionStep,
};
