import { createRemoteJWKSet, jwtVerify } from "jose";

const JWKS = createRemoteJWKSet(
  new URL(
    "https://YOUR-CLERK-DOMAIN.clerk.accounts.dev/.well-known/jwks.json"
  )
);

export const clerkAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No token",
      });
    }

    const token = authHeader.replace("Bearer ", "");

    const { payload } = await jwtVerify(token, JWKS);

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};