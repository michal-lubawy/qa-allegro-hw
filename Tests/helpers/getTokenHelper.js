import { config } from "./config";

const supertest = require("supertest");

async function getToken() {
  const res = await supertest(config.portal.url)
    .post("/auth/oauth/token?grant_type=client_credentials")
    .set(
      "Authorization",
      "Basic ZmE2MWRhZTk2NjZmNDYwMGFhYjE4OThhZjEyY2ZmOWI6M1VDUGE4cFdyUXppNjN2SzRhNWdYQ1hNaDhJVU9LQnBqcHN2QThQZ0tmUFYwekdvUzRadnprU3ZBclRFMnFsdA=="
    )
    .expect(200);
  return res.body.access_token;
}

export { getToken };
