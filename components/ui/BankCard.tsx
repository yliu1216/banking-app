import { Link } from 'lucide-react'
import React from 'react'
import { formatAmount } from '@/lib/utils'

const BankCard = ({account, userName, showBalance}:CreditCardProps) => { 

  return (
    <div className="flex flex-col">
        <Link href="/" className='bank-card'>
            <div className="bank-card-content">
                <div>
                    <h1 className="text-16 font-semibold text-white">
                        {account.name || userName}    
                    </h1>
                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>    
                </div>   
                <article>
                    
                </article>
            </div>        
        </Link>
    </div>
  )
}

export default BankCard