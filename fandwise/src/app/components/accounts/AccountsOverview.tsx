import { mockAccounts } from '@/app/lib/mockData';
import AccountsList from './AccountsList';
import type { Account, CreditCardAccount, DepositoryAccount, InvestmentAccount } from '@/app/lib/types';

export default function AccountsOverview() {
  const creditCards = mockAccounts.filter(acc => acc.type === 'credit-card') as CreditCardAccount[];
  const depositoryAccounts = mockAccounts.filter(acc => acc.type === 'depository') as DepositoryAccount[];
  const investmentAccounts = mockAccounts.filter(acc => acc.type === 'investment') as InvestmentAccount[];

  return (
    <div className="space-y-8">
      <AccountsList title="Credit Cards" accounts={creditCards} />
      <AccountsList title="Depository Accounts" accounts={depositoryAccounts} />
      {/* Investment accounts might be displayed differently or in a dedicated investments page,
          but for an overview, they can be listed here too. */}
      <AccountsList title="Investment Accounts" accounts={investmentAccounts} />
    </div>
  );
}
