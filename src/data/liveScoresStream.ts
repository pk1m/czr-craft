export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type LiveScoresStreamData = {
  id: string;
  score1: number
  score2: number;
}

type LiveScoresDataHandler = (liveScoresStreamData: LiveScoresStreamData) => void;

class LiveScoresStream {
  /**
   *  
   * @param id - id of game
   * @param handler  - callback function that is called everytime stream is updated
   * @returns unsubscribe function to clean up listener
   */
  subscribe(id: string, handler: LiveScoresDataHandler) {
    let unsubscribe;

    if (id) {
      unsubscribe = this.#registerHandler(id, handler);
    }

    return unsubscribe;
  }

  #registerHandler(id: string , handler: LiveScoresDataHandler) {
    let currentScore1 = 0;
    let currentScore2 = 0;

    const interval = setInterval(() => {
      const newScore1 = currentScore1 + getRandomNumber(0, 3);
      const newScore2 = currentScore2 + getRandomNumber(0, 3);
      currentScore1 = newScore1;
      currentScore2 = newScore2;
      handler({ id, score1: newScore1, score2: newScore2 });
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }
}


export const liveScoresStream = new LiveScoresStream();

