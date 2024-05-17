import React from 'react';
import { usePlaidLink } from 'react-plaid-link';

const PlaidLinkComponent = () => {
  const onSuccess = (public_token, metadata) => {
    // send public_token to server
    console.log(public_token);
  };

  const onExit = (err, metadata) => {
    // handle the exit
    console.log(err);
  };

  const config = {
    token: 'your_link_token_here',
    onSuccess,
    onExit,
  };

  const { open, ready, error } = usePlaidLink(config);

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
};

export default PlaidLinkComponent;