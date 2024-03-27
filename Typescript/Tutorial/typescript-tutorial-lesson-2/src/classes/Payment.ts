import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number //Can also declare variables inside the constructor parameters
  ) {}

  format() {
    // This method is now required since HasFormatter have format() as a method
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
