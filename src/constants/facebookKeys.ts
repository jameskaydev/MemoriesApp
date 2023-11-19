import { makeRedirectUri, ResponseType } from "expo-auth-session"

export const fbKeys = {
  clientId: "1061944271657858",
      scopes: ["public_profile", "email"],
      redirectUri: makeRedirectUri({
        native: "fb1061944271657858://authorize",
      }),
      responseType: ResponseType.Token,
}