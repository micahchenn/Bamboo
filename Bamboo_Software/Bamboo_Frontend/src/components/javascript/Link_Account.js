import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const PlaidLinkComponent = () => {
  const [linkToken, setLinkToken] = useState(null);

  // Fetch link token from server
  useEffect(() => {
    async function fetchLinkToken() {
      const response = await fetch('/create_link_token', { method: 'POST' });
      const data = await response.json();
      setLinkToken(data.link_token);
    }
    fetchLinkToken();
  }, []);

  const onSuccess = (public_token, metadata) => {
    // send public_token to server
    console.log(public_token);
  };

  const onExit = (err, metadata) => {
    // handle the exit
    console.log(err);
  };

  const config = {
    token: linkToken,
    onSuccess,
    onExit,
  };

  const { open, ready, error } = usePlaidLink(config);

  // Only render button if link token has been fetched
  return linkToken == null ? null : (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
};

export default PlaidLinkComponent;