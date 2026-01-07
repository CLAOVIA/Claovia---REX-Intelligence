import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Redis client for rate limiting
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

// Rate limiters for different API endpoints
export const chatRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 requests per minute per IP
  analytics: true,
  prefix: "@claovia/chat",
});

export const pdfRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"), // 5 PDFs per minute per user
  analytics: true,
  prefix: "@claovia/pdf",
});

export const analysisRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 m"), // 3 analyses per minute per user (expensive)
  analytics: true,
  prefix: "@claovia/analysis",
});

// Helper to extract identifier from request (IP or user ID)
export function getIdentifier(req: Request, userId?: string): string {
  // Prefer authenticated user ID over IP for better tracking
  if (userId) {
    return `user_${userId}`;
  }

  // Fallback to IP address
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";

  return `ip_${ip}`;
}

// Check rate limit and return appropriate response
export async function checkRateLimit(
  ratelimiter: Ratelimit,
  identifier: string
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  const { success, limit, remaining, reset } = await ratelimiter.limit(identifier);

  return {
    success,
    limit,
    remaining,
    reset,
  };
}
