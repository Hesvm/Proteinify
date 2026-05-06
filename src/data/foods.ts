export type FoodItem = {
  id: number
  name: string
  emoji: string
  category: string
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber?: number
  sugar?: number
  sodium?: number
  vitaminC?: number
  calcium?: number
  iron?: number
  proteinConversion: number
  healthScore: number
  popularity: number
  // new fields
  tags: string[]                    // e.g. ["vegan", "keto", "grocery"]
  budget: '$' | '$$' | '$$$'       // cost tier
  gi: number                        // glycemic index 0–100
  satiety: number                   // satiety score 0–100
}

export const foods: FoodItem[] = [
  { id: 1,  name: 'سینه مرغ',          emoji: '🍗', category: 'مرغ و پرندگان',         calories: 165, protein: 31,  carbs: 0,    fat: 3.6,  sodium: 74,   calcium: 15,  iron: 1.1, proteinConversion: 75, healthScore: 53, popularity: 1,  tags: ['keto', 'grocery'],              budget: '$$',  gi: 0,  satiety: 78 },
  { id: 2,  name: 'تخم مرغ',            emoji: '🥚', category: 'تخم‌مرغ و لبنیات',      calories: 155, protein: 13,  carbs: 1.1,  fat: 11,   sodium: 124,  calcium: 56,  iron: 1.8, proteinConversion: 34, healthScore: 40, popularity: 2,  tags: ['keto', 'grocery', 'eggs'],      budget: '$',   gi: 0,  satiety: 75 },
  { id: 3,  name: 'گوشت چرخ‌کرده گاو', emoji: '🥩', category: 'گوشت',                 calories: 254, protein: 17,  carbs: 0,    fat: 20,   sodium: 75,   iron: 2.2,              proteinConversion: 27, healthScore: 33, popularity: 3,  tags: ['keto', 'grocery'],              budget: '$$',  gi: 0,  satiety: 68 },
  { id: 4,  name: 'ماهی آزاد',          emoji: '🐟', category: 'ماهی و غذای دریایی',   calories: 208, protein: 20,  carbs: 0,    fat: 13,   sodium: 59,   calcium: 12,  iron: 0.8, proteinConversion: 38, healthScore: 41, popularity: 4,  tags: ['keto', 'grocery', 'seafood'],   budget: '$$$', gi: 0,  satiety: 72 },
  { id: 5,  name: 'برنج سفید پخته',     emoji: '🍚', category: 'غلات و برنج',           calories: 130, protein: 2.7, carbs: 28,   fat: 0.3,  sodium: 1,                            proteinConversion: 8,  healthScore: 50, popularity: 5,  tags: ['vegan', 'grocery'],             budget: '$',   gi: 72, satiety: 54 },
  { id: 6,  name: 'عدس پخته',           emoji: '🫘', category: 'حبوبات',                calories: 116, protein: 9,   carbs: 20,   fat: 0.4,  fiber: 7.9,  sodium: 2,   iron: 3.3, proteinConversion: 31, healthScore: 66, popularity: 6,  tags: ['vegan', 'grocery'],             budget: '$',   gi: 32, satiety: 75 },
  { id: 7,  name: 'ران مرغ',            emoji: '🍖', category: 'مرغ و پرندگان',         calories: 209, protein: 26,  carbs: 0,    fat: 13,   sodium: 84,   iron: 1.3,              proteinConversion: 50, healthScore: 43, popularity: 7,  tags: ['keto', 'grocery'],              budget: '$$',  gi: 0,  satiety: 70 },
  { id: 8,  name: 'شیر کامل',           emoji: '🥛', category: 'تخم‌مرغ و لبنیات',      calories: 61,  protein: 3.2, carbs: 4.8,  fat: 3.3,  sodium: 43,   calcium: 113, iron: 0.1, proteinConversion: 21, healthScore: 43, popularity: 8,  tags: ['grocery', 'dairy'],             budget: '$',   gi: 31, satiety: 55 },
  { id: 9,  name: 'ماست یونانی',        emoji: '🫙', category: 'تخم‌مرغ و لبنیات',      calories: 100, protein: 10,  carbs: 4,    fat: 5,    sodium: 36,   calcium: 111, iron: 0.1, proteinConversion: 40, healthScore: 47, popularity: 9,  tags: ['keto', 'grocery', 'dairy'],     budget: '$$',  gi: 11, satiety: 62 },
  { id: 10, name: 'موز',                emoji: '🍌', category: 'میوه',                  calories: 89,  protein: 1.1, carbs: 23,   fat: 0.3,  fiber: 2.6,  vitaminC: 8.7, calcium: 5, iron: 0.3, proteinConversion: 5,  healthScore: 53, popularity: 10, tags: ['vegan', 'grocery'],             budget: '$',   gi: 51, satiety: 60 },
  { id: 11, name: 'سیب',                emoji: '🍎', category: 'میوه',                  calories: 52,  protein: 0.3, carbs: 14,   fat: 0.2,  fiber: 2.4,  vitaminC: 4.6, calcium: 6, iron: 0.1, proteinConversion: 2,  healthScore: 57, popularity: 11, tags: ['vegan', 'grocery'],             budget: '$',   gi: 36, satiety: 57 },
  { id: 12, name: 'بادام',              emoji: '🥜', category: 'آجیل و دانه‌ها',        calories: 579, protein: 21,  carbs: 22,   fat: 50,   fiber: 12.5, vitaminC: 0,  calcium: 264, iron: 3.7, proteinConversion: 15, healthScore: 27, popularity: 12, tags: ['vegan', 'keto', 'nuts'],        budget: '$$',  gi: 0,  satiety: 69 },
  { id: 13, name: 'اسفناج',             emoji: '🥬', category: 'سبزیجات',               calories: 23,  protein: 2.9, carbs: 3.6,  fat: 0.4,  fiber: 2.2,  vitaminC: 28, calcium: 99, iron: 2.7,  proteinConversion: 50, healthScore: 79, popularity: 13, tags: ['vegan', 'keto', 'grocery'],     budget: '$',   gi: 15, satiety: 45 },
  { id: 14, name: 'بروکلی',             emoji: '🥦', category: 'سبزیجات',               calories: 34,  protein: 2.8, carbs: 7,    fat: 0.4,  fiber: 2.6,  vitaminC: 89, calcium: 47, iron: 0.7,  proteinConversion: 33, healthScore: 77, popularity: 14, tags: ['vegan', 'keto', 'grocery'],     budget: '$',   gi: 15, satiety: 47 },
  { id: 15, name: 'نان سنگک',           emoji: '🫓', category: 'نان و محصولات نانوایی', calories: 266, protein: 9,   carbs: 54,   fat: 1.5,  fiber: 3.1,  sodium: 490,              proteinConversion: 14, healthScore: 28, popularity: 15, tags: ['vegan', 'grocery', 'gluten'],   budget: '$',   gi: 59, satiety: 51 },
  { id: 16, name: 'ماهی تن کنسرو',      emoji: '🐟', category: 'ماهی و غذای دریایی',   calories: 132, protein: 28,  carbs: 0,    fat: 1,    sodium: 333,  iron: 1.3,              proteinConversion: 85, healthScore: 59, popularity: 16, tags: ['keto', 'grocery', 'seafood'],   budget: '$',   gi: 0,  satiety: 71 },
  { id: 17, name: 'نخود پخته',          emoji: '🫘', category: 'حبوبات',                calories: 164, protein: 8.9, carbs: 27,   fat: 2.6,  fiber: 7.6,  sodium: 7,   iron: 2.9,  proteinConversion: 22, healthScore: 57, popularity: 17, tags: ['vegan', 'grocery'],             budget: '$',   gi: 28, satiety: 69 },
  { id: 18, name: 'روغن زیتون',         emoji: '🫒', category: 'روغن و چربی‌ها',        calories: 884, protein: 0,   carbs: 0,    fat: 100,  sodium: 2,                            proteinConversion: 0,  healthScore: 0,  popularity: 18, tags: ['vegan', 'keto', 'grocery'],     budget: '$$',  gi: 0,  satiety: 10 },
  { id: 19, name: 'گردو',               emoji: '🥜', category: 'آجیل و دانه‌ها',        calories: 654, protein: 15,  carbs: 14,   fat: 65,   fiber: 6.7,  vitaminC: 1.3, calcium: 98, iron: 2.9, proteinConversion: 9,  healthScore: 22, popularity: 19, tags: ['vegan', 'keto', 'nuts'],        budget: '$$',  gi: 15, satiety: 60 },
  { id: 20, name: 'پنیر فتا',           emoji: '🧀', category: 'تخم‌مرغ و لبنیات',      calories: 264, protein: 14,  carbs: 4,    fat: 21,   sodium: 1116, calcium: 493, iron: 0.6, proteinConversion: 21, healthScore: 25, popularity: 20, tags: ['keto', 'grocery', 'dairy'],     budget: '$$',  gi: 0,  satiety: 58 },
]
