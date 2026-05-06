import type { FoodItem } from '@/data/foods'
import type { HealthProfile } from '@/context/HealthProfileContext'

// Returns a personalized fit score (0–100) for a food given a user's health profile.
// Starts from the food's base healthScore, deducts for allergy conflicts, adds for diet match.
export function userFitScore(food: FoodItem, profile: HealthProfile): number {
  let score = food.healthScore

  // Deduct for allergy conflicts
  if (profile.allergies.includes('nuts')     && food.tags.includes('nuts'))     score -= 40
  if (profile.allergies.includes('dairy')    && food.tags.includes('dairy'))    score -= 40
  if (profile.allergies.includes('gluten')   && food.tags.includes('gluten'))   score -= 40
  if (profile.allergies.includes('shellfish')&& food.tags.includes('seafood'))  score -= 40
  if (profile.allergies.includes('eggs')     && food.tags.includes('eggs'))     score -= 40

  // Bonus for diet match
  if (profile.diet === 'vegan' && food.tags.includes('vegan')) score += 10
  if (profile.diet === 'keto'  && food.tags.includes('keto'))  score += 10

  return Math.max(0, Math.min(100, Math.round(score)))
}

// Returns true if a food conflicts with any of the user's allergies
export function hasAllergyConflict(food: FoodItem, profile: HealthProfile): boolean {
  return (
    (profile.allergies.includes('nuts')      && food.tags.includes('nuts'))    ||
    (profile.allergies.includes('dairy')     && food.tags.includes('dairy'))   ||
    (profile.allergies.includes('gluten')    && food.tags.includes('gluten'))  ||
    (profile.allergies.includes('shellfish') && food.tags.includes('seafood')) ||
    (profile.allergies.includes('eggs')      && food.tags.includes('eggs'))
  )
}
