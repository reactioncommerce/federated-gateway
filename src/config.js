import envalid from "envalid";

export default envalid.cleanEnv(process.env, {
  AUTHORIZATION_URL: envalid.str(),
  SERVICES: envalid.json()
});
