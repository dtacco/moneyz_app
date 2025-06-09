import type { Account, CreditCardAccount, DepositoryAccount, InvestmentAccount } from '@/app/lib/types';

interface AccountCardProps {
  account: Account;
}

export default function AccountCard({ account }: AccountCardProps) {
  let accountTypeDisplay = account.type.replace('-', ' ');
  if (account.type === 'depository') {
    accountTypeDisplay = (account as DepositoryAccount).accountSubType;
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-200 ease-in-out">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-semibold text-neutral-800">{account.name}</h4>
        {/* Placeholder for an icon based on account type or institution */}
        {/* <span className="text-xl">🏦</span> */}
      </div>
      <p className="text-2xl font-bold text-neutral-700 mb-1">
        ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
      <p className="text-xs text-neutral-500 capitalize mb-3">{accountTypeDisplay}</p>

      {account.type === 'credit-card' && (
        <div className="text-xs text-neutral-600 space-y-0.5">
          {(account as CreditCardAccount).availableCredit && (
            <p>Available Credit: ${(account as CreditCardAccount).availableCredit?.toLocaleString()}</p>
          )}
          {(account as CreditCardAccount).statementBalance && (
            <p>Statement: ${(account as CreditCardAccount).statementBalance?.toLocaleString()}</p>
          )}
        </div>
      )}
      {account.type === 'investment' && (
        <div className="text-xs text-neutral-600">
          <p>Institution: {(account as InvestmentAccount).institution}</p>
        </div>
      )}
      {/* Add more details as needed for other types or general info */}
    </div>
  );
}
