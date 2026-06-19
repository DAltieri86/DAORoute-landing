# Launch Thread Draft

Use this as a technical launch thread for X/Farcaster/LinkedIn. Publish only
after the landing and public MCP repo are current.

## Thread

```text
1/ I am opening a free controlled pilot for DaoRoute.

DaoRoute is a non-custodial MCP server for AI agents and DeFi automation builders evaluating stablecoin allocation routes.

Landing:
https://www.daoroute.com/
```

```text
2/ The problem:

Most DeFi infrastructure answers "how do I route this transaction?"

Agents also need the prior step:

"where should capital go, why, under which risk controls, and can this decision be verified?"
```

```text
3/ DaoRoute returns structured decision evidence:

- market coverage snapshots
- one-pool evidence
- live protocol security status
- stablecoin allocation decision packets
- non-custodial execution metadata
- optional Ed25519 attestation
```

```text
4/ The pilot exposes four MCP tools:

- get_market_snapshot
- get_pool_evidence
- get_protocol_security_status
- get_optimal_allocation

All support compact/full response verbosity.
```

```text
5/ This is not a trading bot.

DaoRoute does not custody funds, manage wallets, sign transactions, broadcast transactions, guarantee returns, or provide investment advice.

It is a decision evidence layer for agent workflows.
```

```text
6/ Integrations are documented for:

- Claude Desktop / Cursor
- LangChain / LangGraph
- OpenAI Agents SDK
- ElizaOS
- generic remote MCP

Pilot pack:
https://github.com/DAltieri86/DAORoute-mcp
```

```text
7/ The first pilot is intentionally controlled.

Pilot users receive:

- MCP endpoint
- pilot API key
- sample requests
- response guide
- safety boundaries
- feedback channel

Request access:
https://www.daoroute.com/
```

```text
8/ Looking for feedback from:

- AI agent builders
- DeFi automation builders
- wallet / vault teams
- DAO treasury tooling teams
- researchers testing agent workflows

If that is you, request pilot access here:
https://www.daoroute.com/
```
