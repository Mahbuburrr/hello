class BankAccount {
   
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Successfully deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount. Please enter a positive value.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Successfully withdrew $${amount}. New balance: $${this.balance}`);
            } else {
                console.log("Insufficient funds");
            }
        } else {
            console.log("Invalid withdrawal amount. Please enter a positive value.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Example usage:
const account1 = new BankAccount(1001, "John Doe", 700);
const account2 = new BankAccount(1002, "John Doe", 1000);
account1.displayAccountInfo(); // Display initial account info
account1.deposit(300); // Deposit $300
account1.withdraw(200); // Withdraw $200
account1.withdraw(1000); // Attempt to withdraw more than the balan


account2.displayAccountInfo(); // Display initial account info
account2.deposit(500); // Deposit $300
account2.withdraw(200); // Withdraw $200
account2.withdraw(1000);
