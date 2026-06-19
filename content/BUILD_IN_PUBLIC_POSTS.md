# Build-In-Public Drafts

These are draft posts for X, Farcaster, and LinkedIn. Publish manually after
checking that the landing, public MCP repo, and pilot form are live.

Do not add performance claims, prices, or screenshots containing API keys.

## Post 1 - Why DaoRoute Exists

```text
AI agents are getting better at reasoning, but DeFi allocation is still messy.

An agent needs more than an APY number:

- security status
- pool evidence
- risk context
- non-custodial execution metadata
- a response it can verify later

That is why I am building DaoRoute: a free controlled-pilot MCP server for DeFi agents evaluating stablecoin allocation routes.

It does not custody funds, sign transactions, broadcast transactions, or guarantee returns.

Pilot: https://www.daoroute.com/
```

## Post 2 - The Product Boundary

```text
DaoRoute is not a trading bot.
DaoRoute is not a prediction tool.
DaoRoute is not custody.

The goal is narrower:

Return a signed, structured decision packet that helps an AI agent understand:

- what candidate pools exist
- what evidence is available
- what security state applies
- what action is recommended
- what execution metadata is available

Free controlled pilot: https://www.daoroute.com/
```

## Post 3 - MCP-Native Distribution

```text
One reason MCP matters: distribution becomes configuration.

DaoRoute is exposed as a remote Streamable HTTP MCP server.

Pilot users can connect it from:

- Claude Desktop / Cursor
- LangChain / LangGraph
- OpenAI Agents SDK
- ElizaOS
- generic remote MCP clients

The public pilot pack includes integration guides and redacted examples:
https://github.com/DAltieri86/DAORoute-mcp
```

## Post 4 - Security Gate Framing

```text
For DeFi agents, "highest APY" is not enough.

DaoRoute treats live security status as an override.

If a protocol is under watch or compromised, that should override cached yield or allocation signals.

The first pilot focuses on stablecoin allocation evidence, security gates, and non-custodial execution metadata.

No custody. No auto-broadcast. No guaranteed returns.

https://www.daoroute.com/
```

## Post 5 - Data Without Raw Dumps

```text
A raw database dump is easy to copy and hard to operate.

DaoRoute takes a different approach:

The agent receives aggregate decision evidence:

- market snapshot
- one-pool evidence
- protocol security status
- allocation decision packet
- signed attestation

The private engine, model internals, and raw datasets stay server-side.

Pilot docs:
https://github.com/DAltieri86/DAORoute-mcp
```
