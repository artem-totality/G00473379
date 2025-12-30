interface Ingredient {
  image: string;
  original: string;
  measures: Measures;
}

interface Measure {
  amount: number;
  unitLong: string;
}

interface Measures {
  us: Measure;
  metric: Measure;
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
  Measure,
  Instruction,
  InstructionStep,
};
