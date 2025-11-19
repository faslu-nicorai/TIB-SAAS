import SuperTokens from "supertokens-auth-react";
import ThirdPartyEmailPassword from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

export function initSuperTokens() {
  SuperTokens.init({
    appInfo: {
      appName: "SaaS Website",
      apiDomain: "http://localhost:3001",
      websiteDomain: "http://localhost:5173",
      apiBasePath: "/auth",
      websiteBasePath: "/auth",
    },
    recipeList: [
      ThirdPartyEmailPassword.init(),
      Session.init(),
    ],
  });
}
