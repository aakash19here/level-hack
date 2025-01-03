import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  // 3 requests in one day
  limiter: Ratelimit.slidingWindow(3, "1 d"),
});

export default ratelimit;
