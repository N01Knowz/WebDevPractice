export class Invoice {
    //   public readonly client: string; // readonly values cannot be changed once initialized either in declaration or in constructor. Can also be public or private
    //   private details: string; // private does not allow the property to be used outside the class.
    //   public amount: number; // public allows the property to be used outside the class. Properties are public by default
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c; // Needs this so that it knows that it should use the property client of the Invoice class.
    //     this.details = d;
    //     this.amount = a;
    //   }
    constructor(client, details, amount //Can also declare variables inside the constructor parameters
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = "Luigi"; // Not allowed because client is readonly
        // When you create a function in a class. No need to write function. This is called a method
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
