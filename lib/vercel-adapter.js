export function adapt(handler) {
  return async (req, res) => {
    req.get ??= (name) => {
      const value = req.headers[name.toLowerCase()];
      return Array.isArray(value) ? value.join(", ") : value;
    };
    req.originalUrl ??= req.url;
    res.set ??= (name, value) => {
      res.setHeader(name, value);
      return res;
    };
    res.status ??= (statusCode) => {
      res.statusCode = statusCode;
      return res;
    };
    res.json ??= (value) => {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(value));
      return res;
    };
    res.send ??= (value) => {
      if (typeof value === "object" && value !== null) return res.json(value);
      res.end(value);
      return res;
    };
    await handler(req, res);
  };
}
