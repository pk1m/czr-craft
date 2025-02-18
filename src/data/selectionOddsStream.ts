
export type SelectionStreamData = {
  id: string;
  odds: string;
  timestamp: number;
}

export type SelectionDataHandler = (selectionStreamData: SelectionStreamData) => void;

class SelectionOddsStream {
    /**
   *  
   * @param id - id of game
   * @param handler  - callback function that is called everytime stream is updated
   * @returns unsubscribe function to clean up listener
   */
  subscribe(id: string, handler: SelectionDataHandler) {
    let unsubscribe;

    if (id) {
      unsubscribe = this.#registerHandler(id, handler);
    }

    return unsubscribe;
  }

  #registerHandler(id: string , handler: SelectionDataHandler) {
    let i = Math.floor(Math.random() * 10) + 1;
    let currentOdds = this.#buildRandomOdds()

    const interval = setInterval(() => {
      if (i === 10) {
        currentOdds = this.#buildRandomOdds()
        i = 1;
      } else {
        i++;
      }

      handler({ id, odds: currentOdds, timestamp: Date.now() });
    }, 2000);

    return () => {
      clearInterval(interval);
    }
  }

  #buildRandomOdds() {
    const randomThreeDigitNumber = Math.floor(Math.random() * 900) + 100;
    const randomSign = Math.random() < 0.5 ? '-' : '+'
    return `${randomSign}${randomThreeDigitNumber}`
  }
}


export const selectionOddsStream = new SelectionOddsStream();

