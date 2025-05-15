import { styleText } from "node:util";

if (!process.permission) {
  console.log(
    "Permission API is not available. Run with",
    styleText(["bold", "cyan"], "npm run permission")
  );
  process.exit(1);
}

console.log(
  "has permission to read from the file system",
  process.permission.has("fs.read")
);
console.log(
  "has permission to read from /etc/?",
  process.permission.has("fs.read", "/etc")
);
console.log(
  "has permission to read from __dirname?",
  process.permission.has("fs.read", import.meta.dirname)
);
