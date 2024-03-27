export class Payment {
    constructor(recipient, details, amount //Can also declare variables inside the constructor parameters
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // This method is now required since HasFormatter have format() as a method
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
