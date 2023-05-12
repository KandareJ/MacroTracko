export const calculateMacros = (profile) => {
    const weight = profile.weight * 0.453592;
    const height = profile.height * 2.54;
  
    let bmr = (profile.gender === 'Male')
      ? 10 * weight + 6.25 * height - 5 * profile.age + 5
      : 10 * weight + 6.25 * height - 5 * profile.age - 161;
  
    let baseCalories;
  
    if (profile.exerciseLevel === 'Sedentary') baseCalories = bmr * 1.2;
    else if (profile.exerciseLevel === 'Lightly Active') baseCalories = bmr * 1.3;
    else if (profile.exerciseLevel === 'Moderately Active') baseCalories = bmr * 1.5;
    else if (profile.exerciseLevel === 'Very Active') baseCalories = bmr * 1.7;
    else baseCalories = bmr * 1.9;
  
    let finalCalories;
  
    if (profile.goal === 'Fat Loss') finalCalories = baseCalories * .8;
    else if (profile.goal === 'Maintain') finalCalories = baseCalories;
    else finalCalories = baseCalories * 1.2;
  
    return {
      protein: finalCalories * 0.194 / 4,
      carbs: finalCalories * 0.556 / 4,
      fat: finalCalories * 0.250 / 9,
      calories: finalCalories,
      water: 68,
    };
  }
  