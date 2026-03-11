import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const BLOG_ROOT = path.resolve("src/data/blog");

function formatFileTimestamp(isoString) {
  return isoString.slice(0, 19).replace("T", "-").replaceAll(":", "-");
}

function buildScaffold(timestamp) {
  return `---
title: "Untitled Post"
pubDatetime: ${timestamp}
description: ""
draft: true
---
`;
}

async function main() {
  const timestamp = new Date().toISOString();
  const fileName = `untitled-${formatFileTimestamp(timestamp)}.md`;
  const filePath = path.join(BLOG_ROOT, fileName);
  const scaffold = buildScaffold(timestamp);

  await fs.writeFile(filePath, scaffold, "utf8");
  process.stdout.write(`Created ${path.relative(process.cwd(), filePath)}\n`);
}

main().catch(error => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
