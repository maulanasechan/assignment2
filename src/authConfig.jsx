export const msalConfig = {
  auth: {
    clientId: "7aa5742a-d422-46a7-9a9f-7aebaec5cf44",
    authority: "https://login.microsoftonline.com/consumers/",
    redirectUri: "http://localhost:3000/login",
    postLogoutRedirectUri: "http://localhost:3000/login",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};
