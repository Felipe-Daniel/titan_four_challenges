let incomes = [5000, 3200, 345.3];
let expenses = [3000.2, 45.35, 123.45, 435.2];

function calculateBalance() {
  const total = sum(family.incomes) - sum(family.expenses);
  const totalText = total >= 0 ? "Positivo" : "Negativo";
  console.log(`Seu total é ${totalText}: ${total.toFixed(2)}R$`);
}
