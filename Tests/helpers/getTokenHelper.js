import { config } from "./config";

const supertest = require("supertest");

async function getToken() {
  const path ="/auth/oauth/token?grant_type=client_credentials"
  const res = await supertest(config.portal.url)
    .post(path)
    .set(
      "Authorization",
      "Basic ZmE2MWRhZTk2NjZmNDYwMGFhYjE4OThhZjEyY2ZmOWI6M1VDUGE4cFdyUXppNjN2SzRhNWdYQ1hNaDhJVU9LQnBqcHN2QThQZ0tmUFYwekdvUzRadnprU3ZBclRFMnFsdA=="
    )
    .expect((res) => (res.status != 200 ? console.log(`Call to ${path} failed `+JSON.stringify(res.body, null, 2)) : 0))
  return res.body.access_token;
}

export { getToken };
