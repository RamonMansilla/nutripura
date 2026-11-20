import { getFlowPaymentStatus } from "../../lib/flow-handlers.js";
import { adapt } from "../../lib/vercel-adapter.js";

export default adapt(getFlowPaymentStatus);
