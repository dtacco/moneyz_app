# Fandwise - Personal Finance Dashboard

Fandwise is a personal finance dashboard application designed to help users track their income, expenses, investments, and overall financial health. It provides a visual overview of financial data to facilitate better financial planning and decision-making.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Charting:** [Recharts](https://recharts.org/)
*   **Linting:** ESLint (configured with Next.js defaults)

## Current Features

The application currently includes the following features, primarily using mock data:

*   **Dashboard Overview:**
    *   Summary of budget status (total budget, spent, remaining).
    *   Visual spending trends (line chart).
    *   Top expenses by category.
*   **Transactions:**
    *   Review and categorize recent transactions.
    *   Display transaction details including tags, amounts, and status.
*   **Accounts Overview:**
    *   Lists Credit Cards, Depository Accounts (Checking, Savings), and Investment accounts with their balances.
*   **Investments:**
    *   Displays current investment balances and portfolio value.
*   **Categories:**
    *   Organizes spending by categories (e.g., Rent, Food & Drink).
    *   Visual representation of top spending categories.
*   **Recurring Transactions:**
    *   Lists upcoming recurring transactions (subscriptions, bills).
*   **Monthly Income Tracking:**
    *   Shows total income for the month with breakdowns by source.
    *   Visual progress bar towards income targets.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd fandwise
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```
    *(If you prefer yarn, use `yarn install`)*

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    *(Or `yarn dev`)*

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   **`src/app/`**: Main application code using the Next.js App Router.
    *   **`(pages)/[section]/page.tsx`**: Individual page components for different sections.
    *   **`components/`**: Reusable React components organized by feature.
    *   **`lib/`**: Utility functions, type definitions (`types.ts`), and mock data (`mockData.ts`).
    *   **`layout.tsx`**: Root layout for the application.
*   **`public/`**: Static assets.
*   **Configuration files**: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, etc.

## Future Enhancements (Potential)

*   User authentication.
*   Database integration for persistent data (e.g., Supabase, Firebase, or a custom backend).
*   Ability to add, edit, and delete transactions, accounts, etc.
*   More detailed financial reports and analytics.
*   Integration with financial institutions (e.g., Plaid).

---

This README provides a basic overview of the Fandwise project.
