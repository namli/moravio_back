export class MoneyCount {
  constructor() {

  }

  get mytotal() {
    return this.total;
  }

  /**
   * Calculate result by greedy algorithm
   * 
   * @param {Number} total - amount of need to be return
   * @param {Array} coins - array of available coins
   * @return {Object}
   */

  calcGreedy(total, coins) {
    let change = {};
    if (total === 0) {
      return change;
    }
    if (coins.length === 0 && total > 0) {
      return change;
    }

    if (coins[0] < coins[1]) { coins.reverse(); }

    coins.map(b => {
      change[b] = Math.floor(total / b);
      total -= b * change[b];
    });

    return change;
  }

  /**
  * Calculate result by algorithm
  * 
  * @param {Number} total - amount of need to be return
  * @param {Array} coins - array of available coins
  * @return {Array}
  */

  calcNaiv(total, coins) {
    if (total === 0) {
      return [0, []];
    }
    if (coins.length === 0 && total > 0) {
      return [Infinity, []];
    }
    if (coins[0] > total) {
      return this.calcNaiv(total, coins.slice(1));
    } else {

      let loseIt = this.calcNaiv(total, coins.slice(1));
      let useIt = this.calcNaiv(total - coins[0], coins);

      if (loseIt[0] < useIt[0] + 1) {
        return loseIt;
      } else {
        return [useIt[0] + 1, useIt[1].concat(coins[0])];
      }
    }
  }




}

