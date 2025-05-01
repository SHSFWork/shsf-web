"use server";
import { unstable_cache as cache } from "next/cache";
import {
  CACHE_DURATION,
  DEFAULT_BUY_COFFEE_SUBSCRIPTION_RESPONSE,
  DEFAULT_BUY_COFFEE_SUPPORTERS_RESPONSE,
  USE_MOCK_DATA_FOR_DEVELOPMENT,
  URL,
} from "./constants";

export const getBuyCoffeeSubscriptions = cache(
  async (
    status: "active" | "inactive" | "all" = "all"
  ): Promise<SubscriptionResponse> => {
    try {
      if (
        process.env.NODE_ENV === "development" &&
        USE_MOCK_DATA_FOR_DEVELOPMENT
      ) {
        return DEFAULT_BUY_COFFEE_SUBSCRIPTION_RESPONSE;
      }

      console.log("API HIT: buy me a coffee");
      const res = await fetch(`${URL}/subscriptions?status=${status}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.BUY_COFFEE_TOKEN}`,
        },
        next: { revalidate: CACHE_DURATION },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch subscriptions: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error("buy me a coffee api error", error);
      return DEFAULT_BUY_COFFEE_SUBSCRIPTION_RESPONSE;
    }
  },
  ["buy-coffee-subscriptions"],
  {
    revalidate: CACHE_DURATION,
  }
);

export const getBuyCoffeeOneTimeSupporters = cache(
  async (): Promise<SupporterResponse> => {
    try {
      if (
        process.env.NODE_ENV === "development" &&
        USE_MOCK_DATA_FOR_DEVELOPMENT
      ) {
        return DEFAULT_BUY_COFFEE_SUPPORTERS_RESPONSE;
      }

      console.log("API HIT: buy me a coffee");
      const res = await fetch(`${URL}/supporters`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.BUY_COFFEE_TOKEN}`,
        },
        next: { revalidate: CACHE_DURATION },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch supporters: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error("buy me a coffee api error", error);
      return DEFAULT_BUY_COFFEE_SUPPORTERS_RESPONSE;
    }
  },
  ["buy-coffee-one-time-supporters"],
  {
    revalidate: CACHE_DURATION,
  }
);
