export function computeHealthScore(food: {
  protein: number
  fat: number
  carbs: number
  calories: number
  fiber?: number
  vitaminC?: number
  calcium?: number
  iron?: number
}): number {
  const proteinScore = Math.min((food.protein / 50) * 35, 35)
  const fatScore = Math.max(25 - (food.fat / 50) * 25, 0)

  let carbScore = 0
  if (food.carbs >= 15 && food.carbs <= 25) carbScore = 20
  else if (food.carbs < 15) carbScore = (food.carbs / 15) * 20
  else carbScore = Math.max(20 - ((food.carbs - 25) / 50) * 20, 0)

  const calorieScore = Math.max(10 - (food.calories / 500) * 10, 0)
  const fiberBonus = !food.fiber ? 0 : food.fiber >= 5 ? 5 : food.fiber >= 2 ? 3 : 0

  let microBonus = 0
  if (food.vitaminC && food.vitaminC > 5) microBonus += 2
  if (food.calcium && food.calcium > 50) microBonus += 1.5
  if (food.iron && food.iron > 1) microBonus += 1.5
  microBonus = Math.min(microBonus, 5)

  const total = proteinScore + fatScore + carbScore + calorieScore + fiberBonus + microBonus
  return Math.round(Math.min(Math.max(total, 0), 100))
}

export function healthScoreBgColor(score: number): string {
  if (score >= 80) return 'bg-[#145222]'
  if (score >= 60) return 'bg-[#165e27]'
  if (score >= 40) return 'bg-[#7a6010]'
  if (score >= 20) return 'bg-[#7a3a10]'
  return 'bg-[#7a1010]'
}
