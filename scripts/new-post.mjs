import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const BLOG_ROOT = path.resolve("src/data/blog");

function formatFileTimestamp(isoString) {
  return isoString.slice(0, 19).replace("T", "-").replaceAll(":", "-");
}

function buildScaffold(timestamp) {
  return `---
title: The title of the post
author: your name
pubDatetime: ${timestamp}
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - example
  - tags
ogImage: ../../assets/images/example.png # src/assets/images/example.png
# ogImage: "https://example.org/remote-image.png" # remote URL
description: This is the example description of the example post.
canonicalURL: https://example.org/my-article-was-already-posted-here
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
