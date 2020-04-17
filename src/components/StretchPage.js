import React from 'react';

const StretchPage = () => {
  return (
    <div class='stretchPageCont'>
      <h1>Random Facts</h1>

      <div className='facts'>
        <h2 className='fact'>
          Cryptocurrency is a digital currency that uses encryption
          (cryptography) to generate money and to verify transactions.
          Transactions are added to a public ledger – also called a Transaction
          Block Chain – and new coins are created through a process known as
          mining.
        </h2>
        <h2 className='fact'>
          If you want to get cryptocurrency you can mine it, trade goods and
          services for it, or buy it via brokers and exchanges using dollars and
          other cryptocurrencies. Check out Coinbase for a
          broker/exchange/wallet solution.
        </h2>
        <h2 className='fact'>
          The first decentralized digital cryptocurrency can arguably be traced
          back to “bit gold” (not to be confused with Bitgold), which was worked
          on by Nick Szabo between 1998 and 2005 but was never implemented.
        </h2>
      </div>
    </div>
  );
};

export default StretchPage;
