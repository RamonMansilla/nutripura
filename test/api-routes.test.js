import assert from "node:assert/strict";
import test from "node:test";
import createFlowPayment from "../api/flow/create.js";
import getFlowPaymentStatus from "../api/flow/status.js";
import flowConfirmation from "../api/flow/confirmation.js";

function createResponse() {
  const headers = {};
  return {
    headers,
    setHeader(name, value) {
      headers[name.toLowerCase()] = value;
    },
    end(body) {
      this.body = body;
    },
  };
}

test("Vercel create route rejects methods other than POST", async () => {
  const response = createResponse();
  await createFlowPayment({ method: "GET", headers: {}, url: "/api/flow/create" }, response);
  assert.equal(response.statusCode, 405);
  assert.deepEqual(JSON.parse(response.body), { error: "Método no permitido." });
});

test("Vercel status route answers allowed CORS preflight requests", async () => {
  const response = createResponse();
  await getFlowPaymentStatus(
    {
      method: "OPTIONS",
      headers: { origin: "http://localhost:5173" },
      url: "/api/flow/status",
    },
    response,
  );
  assert.equal(response.statusCode, 204);
  assert.equal(response.headers["access-control-allow-origin"], "http://localhost:5173");
});

test("Flow confirmation route rejects methods other than POST", async () => {
  const response = createResponse();
  await flowConfirmation(
    { method: "GET", headers: {}, url: "/api/flow/confirmation" },
    response,
  );
  assert.equal(response.statusCode, 405);
  assert.equal(response.headers.allow, "POST");
});
