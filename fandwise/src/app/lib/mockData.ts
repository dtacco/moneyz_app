import type { DashboardOverviewData, ExpenseByCategory, TrendDataPoint, BudgetStatus, Category, Transaction, Account, RecurringTransaction, MonthlyIncome, IncomeSource } from './types';

// Mock Categories (needed for expenses)
export const mockCategories: Category[] = [
  { id: 'cat-rent', name: 'Rent', icon: '🏠' },
  { id: 'cat-food', name: 'Food & Drink', icon: '🍔' },
  { id: 'cat-transport', name: 'Car & Transport', icon: '🚗' },
  { id: 'cat-shopping', name: 'Shopping', icon: '🛍️' },
  { id: 'cat-other', name: 'Other', icon: '❓' },
];

// Mock Dashboard Overview Data
const budgetStatus: BudgetStatus = {
  totalBudget: 2500,
  spentAmount: 1874,
  remainingAmount: 2500 - 1874,
  statusMessage: `$${2500 - 1874} under budget`,
};

const trends: TrendDataPoint[] = [
  { date: 'Jan', value: 2000 },
  { date: 'Feb', value: 2200 },
  { date: 'Mar', value: 1800 },
  { date: 'Apr', value: 2500 },
  { date: 'May', value: 1874 },
];

const topExpenses: ExpenseByCategory[] = [
  { categoryId: 'cat-rent', categoryName: 'Rent', amount: 1200, icon: '🏠' },
  { categoryId: 'cat-food', categoryName: 'Food & Drink', amount: 350, icon: '🍔' },
  { categoryId: 'cat-transport', categoryName: 'Car & Transport', amount: 150, icon: '🚗' },
  { categoryId: 'cat-shopping', categoryName: 'Shopping', amount: 100, icon: '🛍️' },
];

export const mockDashboardOverviewData: DashboardOverviewData = {
  budgetStatus,
  trends,
  topExpenses,
};

// Placeholder for other mock data to be added later
export const mockTransactions: Transaction[] = [  { id: 'txn-1', date: '2024-05-20T10:00:00Z', description: 'Coffee Shop', amount: -5.75, categoryId: 'cat-food', accountId: 'acc-chk-1', status: 'posted', type: 'expense', tags: ['COFFEE'] },  { id: 'txn-2', date: '2024-05-20T12:30:00Z', description: 'Grocery Store', amount: -75.20, categoryId: 'cat-food', accountId: 'acc-chk-1', status: 'posted', type: 'expense', tags: ['GROCERIES'] },  { id: 'txn-3', date: '2024-05-19T18:00:00Z', description: 'Zara', amount: -120.50, categoryId: 'cat-shopping', accountId: 'acc-cc-1', status: 'pending', type: 'expense', tags: ['CLOTHING'] },  { id: 'txn-4', date: '2024-05-18T09:00:00Z', description: 'Gas Station', amount: -45.00, categoryId: 'cat-transport', accountId: 'acc-cc-1', status: 'posted', type: 'expense', tags: ['FUEL'] },  { id: 'txn-5', date: '2024-05-17T15:00:00Z', description: 'Client Payment', amount: 500.00, categoryId: 'cat-income', accountId: 'acc-sav-1', status: 'posted', type: 'income', tags: ['FREELANCE'] },  { id: 'txn-6', date: '2024-05-21T11:00:00Z', description: 'Restaurant ABC', amount: -30.00, categoryId: 'cat-food', accountId: 'acc-cc-1', status: 'posted', type: 'expense', tags: ['RESTAURANTS'] },  { id: 'txn-7', date: '2024-05-21T14:15:00Z', description: 'Book Store', amount: -25.50, categoryId: 'cat-shopping', accountId: 'acc-chk-1', status: 'pending', type: 'expense', tags: ['BOOKS'] },];
export const mockAccounts: Account[] = [  /* Credit Cards */  { id: 'acc-cc-1', name: 'Sapphire Preferred', type: 'credit-card', balance: 2000.50, availableCredit: 8000, statementBalance: 1500, minimumPayment: 50 },  { id: 'acc-cc-2', name: 'Freedom Unlimited', type: 'credit-card', balance: 1300.75, availableCredit: 3700, statementBalance: 1000, minimumPayment: 30 },  /* Depository Accounts */  { id: 'acc-chk-1', name: 'Main Checking', type: 'depository', balance: 5250.00, accountSubType: 'checking' },  { id: 'acc-sav-1', name: 'High-Yield Savings', type: 'depository', balance: 15000.00, accountSubType: 'savings' },  { id: 'acc-bank-misc', name: 'Misc Bank Account', type: 'depository', balance: 800.20, accountSubType: 'banking' },  /* Investment Accounts */  { id: 'acc-inv-1', name: 'Robinhood', type: 'investment', balance: 7500.00, institution: 'Robinhood' },  { id: 'acc-inv-2', name: 'Coinbase', type: 'investment', balance: 3200.00, institution: 'Coinbase' },];
export const mockRecurringTransactions: RecurringTransaction[] = [  { id: 'rec-1', description: 'Netflix Subscription', amount: 15.99, categoryId: 'cat-shopping', accountId: 'acc-cc-1', frequency: 'monthly', nextDueDate: '2024-06-01T00:00:00Z', isActive: true },  { id: 'rec-2', description: 'Spotify Premium', amount: 10.99, categoryId: 'cat-shopping', accountId: 'acc-cc-1', frequency: 'monthly', nextDueDate: '2024-06-15T00:00:00Z', isActive: true },  { id: 'rec-3', description: 'Car Insurance', amount: 120.00, categoryId: 'cat-transport', accountId: 'acc-chk-1', frequency: 'monthly', nextDueDate: '2024-06-10T00:00:00Z', isActive: true },  { id: 'rec-4', description: 'Gym Membership (Old)', amount: 30.00, categoryId: 'cat-other', accountId: 'acc-cc-2', frequency: 'monthly', nextDueDate: '2024-04-05T00:00:00Z', isActive: false },];
export const mockMonthlyIncome: MonthlyIncome = {  totalIncome: 5500.00,  incomeSources: [    { id: 'inc-1', name: 'Gusto Pay (Main Job)', amount: 5000.00, dateReceived: '2024-05-15T00:00:00Z' },    { id: 'inc-2', name: 'Freelance Project X', amount: 500.00, dateReceived: '2024-05-20T00:00:00Z' },  ],  targetIncome: 6000.00, /* Optional target */};
