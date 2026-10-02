#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "virtualvocations",
  boardId: "virtualvocations-official",
  domain: "virtualvocations.com",
  npmName: "zc-virtualvocations-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
