export type XO = "X" | "O" | "-";

export class Game {
  
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter(cell => cell === 'X').length
    const countO = this.cells.filter(cell => cell === 'O').length
    return countX === countO ? 'X' : 'O';
  }

  getWinner(): XO {

    if (this.cells[0] === this.cells[1] && this.cells[1] === this.cells[2] && this.cells[0] !== '-'){
      return this.cells[0];
    }
    if (this.cells[6] === this.cells[7] && this.cells[7] === this.cells[8] && this.cells[8] !== '-'){
      return this.cells[6];
    }
    if (this.cells[0] === this.cells[3] && this.cells[3] === this.cells[6] && this.cells[6] !== '-'){
      return this.cells[6];
    }
    if (this.cells[3] === this.cells[4] && this.cells[4] === this.cells[5] && this.cells[5] !== '-'){
      return this.cells[5];
    }
    if (this.cells[1] === this.cells[4] && this.cells[4] === this.cells[7] && this.cells[7] !== '-'){
      return this.cells[7];
    }
    if (this.cells[2] === this.cells[5] && this.cells[5] === this.cells[8] && this.cells[8] !== '-'){
      return this.cells[8];
    }
    if (this.cells[0] === this.cells[4] && this.cells[4] === this.cells[8] && this.cells[8] !== '-'){
      return this.cells[8];
    }
    if (this.cells[2] === this.cells[4] && this.cells[4] === this.cells[6] && this.cells[6] !== '-'){
      return this.cells[6];
    }
    return "-";
  }

  isTie(): boolean {
    return this.cells.indexOf('-') === -1 && this.getWinner() === '-';
  }

  onClick(i: number): void {
    if (this.getWinner() !== '-') {
      return;
    }
    if (this.cells[i] !== '-') {
      return
    }
    this.cells[i] = this.getTurn();
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    console.log("Restarting");
  }
}
