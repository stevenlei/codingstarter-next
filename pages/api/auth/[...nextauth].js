import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    {
      id: "codingstarter",
      name: "Login with GitHub (via CodingStarter OAuth)",
      type: "oauth",
      version: "2.0",
      scope: "",
      params: { grant_type: "authorization_code" },
      accessTokenUrl: "https://codingstarter.com/oauth/token",
      requestTokenUrl: "https://codingstarter.com/oauth/authorize",
      authorizationUrl: "https://codingstarter.com/auth/github/exchange?response_type=code",
      profileUrl: "https://codingstarter.com/api/user",
      async profile(profile, tokens) {
        // You can use the tokens, in case you want to fetch more profile information
        // For example several OAuth providers do not return email by default.
        // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        }
      },
      clientId: "",
      clientSecret: ""
    }
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})