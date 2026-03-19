interface MarketingSubscriber {
  marketingConsent: boolean;
  status: string;
}

export function canSendMarketingEmail(user: MarketingSubscriber) {
  // Future marketing sequences should gate on this helper so consent and
  // unsubscribe rules stay centralized as the email system grows.
  return user.marketingConsent === true && user.status === "active";
}
