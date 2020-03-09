import envalid from "envalid";

export default envalid.cleanEnv(process.env, {
  AUTHORIZATION_URL: envalid.str(),
  GATEWAY_AUTHORIZATION_ENABLED: envalid.bool()
});
