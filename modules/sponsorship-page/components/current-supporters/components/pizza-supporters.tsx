"use client";
import * as React from "react";
import SponsorCard from "./sponsor-card";
import { Clock, Zap } from "lucide-react";

interface PizzaSupportersProps {
  coffeeSupporters: SupporterResponse;
  coffeeSubscriptions: SubscriptionResponse;
}

export default function PizzaSupporters({
  coffeeSupporters,
  coffeeSubscriptions,
}: PizzaSupportersProps) {
  const convertedSubscriptions = React.useMemo(() => {
    const subscriptions = coffeeSubscriptions?.data || [];

    return subscriptions.map((subscription) => ({
      support_id: subscription.subscription_id,
      supporter_name: subscription.payer_name,
      support_created_on: subscription.subscription_created_on,
      support_coffees: subscription.subscription_coffee_num,
      support_note: subscription.subscription_message,
    }));
  }, [coffeeSubscriptions]);

  const convertedSupporters = React.useMemo(() => {
    const supporters = coffeeSupporters?.data || [];

    return supporters.map((supporter) => ({
      support_id: supporter.support_id,
      supporter_name: supporter.supporter_name,
      support_created_on: supporter.support_created_on,
      support_coffees: supporter.support_coffees,
      support_note: supporter.support_note,
    }));
  }, [coffeeSupporters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4" />
          <h3 className="text-lg font-medium">Monthly Pizza</h3>
        </div>

        <SponsorCard
          title="Monthly Supporters"
          sponsors={convertedSubscriptions}
          type="pizza"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4" />
          <h3 className="text-lg font-medium">One-time Pizza</h3>
        </div>

        <SponsorCard
          title="One-time Supporters"
          sponsors={convertedSupporters}
          type="pizza"
        />
      </div>
    </div>
  );
}
