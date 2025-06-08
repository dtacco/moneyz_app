// Base type for all accounts
export interface Account {
  id: string;
  name: string;
  type: 'credit-card' | 'depository' | 'investment';
  balance: number; // Current balance or value
}

export interface CreditCardAccount extends Account {
  type: 'credit-card';
  availableCredit?: number; // Optional: some credit cards show this
  statementBalance?: number; // Optional
  minimumPayment?: number; // Optional
}

export interface DepositoryAccount extends Account {
  type: 'depository';
  accountSubType: 'checking' | 'savings' | 'banking' | 'other'; // More specific type
}

export interface InvestmentAccount extends Account {
  type: 'investment';
  institution: string; // e.g., Robinhood, Coinbase
  // Potentially more fields like holdings, performance, etc. later
}

export type TransactionStatus = 'pending' | 'posted' | 'reviewed';
export type TransactionType = 'expense' | 'income' | 'transfer';

export interface Transaction {
  id: string;
  date: string; // ISO 8601 date string
  description: string;
  amount: number; // Positive for income, negative for expenses
  categoryId: string; // Links to a Category
  accountId: string; // Links to an Account
  status: TransactionStatus;
  type: TransactionType;
  tags?: string[]; // e.g., CLOTHING, RESTAURANTS
}

export interface Category {
  id: string;
  name: string;
  icon?: string; // For UI representation
  // budgetAmount?: number; // Optional: if we want to set budgets per category
}

export type RecurringFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'other';

export interface RecurringTransaction {
  id: string;
  description: string;
  amount: number;
  categoryId: string;
  accountId: string; // Account it's paid from
  frequency: RecurringFrequency;
  nextDueDate: string; // ISO 8601 date string
  endDate?: string; // Optional: if the recurring transaction has an end date
  isActive: boolean;
}

export interface IncomeSource {
  id: string;
  name: string; // e.g., Gusto Pay, Freelance Project
  amount: number; // Expected or actual amount for a period
  dateReceived?: string; // ISO 8601 date string, if it's a one-time income for the period
  // frequency?: RecurringFrequency; // If it's a recurring income source
}

// For Dashboard Overview
export interface BudgetStatus {
  totalBudget: number;
  spentAmount: number;
  remainingAmount: number;
  statusMessage: string; // e.g., "$74 under" or "Over budget by $50"
}

export interface TrendDataPoint {
  date: string; // Could be month, week, day
  value: number;
}

export interface ExpenseByCategory {
  categoryId: string;
  categoryName: string;
  amount: number;
  icon?: string;
}

export interface DashboardOverviewData {
  budgetStatus: BudgetStatus;
  trends: TrendDataPoint[]; // For graphical visualization
  topExpenses: ExpenseByCategory[];
}

// For Monthly Income Tracking
export interface MonthlyIncome {
  totalIncome: number;
  incomeSources: IncomeSource[];
  targetIncome?: number; // Optional: if there's a target
}
