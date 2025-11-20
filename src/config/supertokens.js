import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

export function initSuperTokens() {
  SuperTokens.init({
    appInfo: {
      appName: "SaaS Website",
      apiDomain: "http://localhost:3000",
      websiteDomain: "http://localhost:5173",
      apiBasePath: "/auth",
      websiteBasePath: "/auth",
    },
    recipeList: [
      EmailPassword.init(),
      Session.init(),
    ],
  });
}
