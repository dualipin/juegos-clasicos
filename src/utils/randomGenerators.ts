// Generador de números verdaderamente aleatorios usando Web Crypto API
export class CryptoRandomGenerator {
  /**
   * Genera un número aleatorio verdadero entre 0 y 1 usando Web Crypto API
   */
  static next(): number {
    const array = new Uint32Array(1)
    crypto.getRandomValues(array)
    return array[0] / (0xffffffff + 1)
  }

  /**
   * Genera múltiples números aleatorios de una vez para mejor performance
   */
  static nextMultiple(count: number): number[] {
    const array = new Uint32Array(count)
    crypto.getRandomValues(array)
    return Array.from(array, x => x / (0xffffffff + 1))
  }
}

// Utilidades para diferentes tipos de números aleatorios
export const generateDiceRoll = (): number => {
  return Math.floor(CryptoRandomGenerator.next() * 6) + 1
}

export const generateRandomIndex = (max: number): number => {
  return Math.floor(CryptoRandomGenerator.next() * max)
}

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(CryptoRandomGenerator.next() * (max - min + 1)) + min
}

export const generateRandomBoolean = (): boolean => {
  return CryptoRandomGenerator.next() < 0.5
}

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = generateRandomIndex(i + 1)
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Generadores específicos para cada juego con mejor distribución
export class GameRandomizers {
  /**
   * Generador optimizado para dados - garantiza distribución uniforme
   */
  static rollDice(count: number = 1): number[] {
    const randoms = CryptoRandomGenerator.nextMultiple(count)
    return randoms.map(r => Math.floor(r * 6) + 1)
  }

  /**
   * Generador para posiciones de tablero - evita sesgos
   */
  static selectBoardPosition(availablePositions: number[]): number {
    if (availablePositions.length === 0) return -1
    const randomIndex = generateRandomIndex(availablePositions.length)
    return availablePositions[randomIndex]
  }

  /**
   * Generador para mezclar cartas - algoritmo Fisher-Yates optimizado
   */
  static shuffleCards<T>(cards: T[]): T[] {
    return shuffleArray(cards)
  }

  /**
   * Generador para números objetivo - distribución uniforme garantizada
   */
  static generateTargetNumber(min: number, max: number): number {
    // Usar rechazo para garantizar distribución perfectamente uniforme
    const range = max - min + 1
    const maxValid = Math.floor(0xffffffff / range) * range
    
    let randomValue: number
    do {
      const array = new Uint32Array(1)
      crypto.getRandomValues(array)
      randomValue = array[0]
    } while (randomValue >= maxValid)
    
    return min + (randomValue % range)
  }

  /**
   * Generador para Piedra, Papel o Tijera - distribución perfectamente uniforme
   */
  static generateRockPaperScissors(): 'rock' | 'paper' | 'scissors' {
    const choices: ('rock' | 'paper' | 'scissors')[] = ['rock', 'paper', 'scissors']
    const randomIndex = generateRandomIndex(3)
    return choices[randomIndex]
  }
}