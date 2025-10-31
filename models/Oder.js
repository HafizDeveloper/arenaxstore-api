export class Order {
  constructor(uid, amount, email, status = "pending") {
    this.uid = uid;      // UID player
    this.amount = amount; // jumlah diamond/shell
    this.email = email;   // email pembeli
    this.status = status; // pending | success | failed
  }
}
