import { Transaction } from "@/types/transaction";

export const transactions: Transaction[] = [
  {
    id: "TXN001",
    sender: "John Kamau",
    date: "2026-03-12 14:23",
    type: "Received from",
    amount: 5000,
    balance: 45000,
  },
  {
    id: "TXN004",
    sender: "Mary Wanjiku",
    date: "2026-03-09 12:30",
    type: "Received from",
    amount: 2500,
    balance: 43650,
  },
  {
    id: "TXN007",
    sender: "Salary - ABC Ltd",
    date: "2026-03-06 11:05",
    type: "Received from",
    amount: 75000,
    balance: 43850,
  },
  {
    id: "TXN011",
    sender: "David Omondi",
    date: "2026-03-02 10:10",
    type: "Received from",
    amount: 3000,
    balance: 44700,
  },
  {
    id: "TXN014",
    sender: "Grace Muthoni",
    date: "2026-02-27 14:25",
    type: "Received from",
    amount: 8000,
    balance: 47850,
  },
  {
    id: "TXN018",
    sender: "Peter Njoroge",
    date: "2026-02-23 15:30",
    type: "Received from",
    amount: 4200,
    balance: 44230,
  },
];
