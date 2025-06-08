import type { Account, CreditCardAccount, DepositoryAccount, InvestmentAccount } from '@/app/lib/types';

interface AccountCardProps {
  account: Account;
}

export default function AccountCard({ account }: AccountCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-md font-semibold">{account.name}</h4>
      <p className="text-xl font-bold">${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      <p className="text-xs text-gray-500 capitalize">{account.type.replace('-', ' ')}</p>
      {account.type === 'credit-card' && (
        <div className="text-xs mt-1">
          <p>Available: ${(account as CreditCardAccount).availableCredit?.toLocaleString()}</p>
        </div>
      )}
      {account.type === 'depository' && (
        <div className="text-xs mt-1">
          <p>Type: {(account as DepositoryAccount).accountSubType}</p>
        </div>
      )}
       {account.type === 'investment' && (
        <div className="text-xs mt-1">
          <p>Institution: {(account as InvestmentAccount).institution}</p>
        </div>
      )}
    </div>
  );
}
