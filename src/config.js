import envalid from "envalid";

export default envalid.cleanEnv(process.env, {
  SERVICES: envalid.json()
});
