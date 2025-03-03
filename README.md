# LeverageX Plugin for Eliza OS

This repository contains a custom plugin for Eliza OS that enables AI-powered trading on LeverageX.

## Installation

Make sure you have `pnpm` installed before proceeding.

### 1. Clone the repository
```sh
git clone https://gitlab.com/generell/cashflow-butler/javlis-ai.git

```

### 2. Install dependencies and build
```sh
pnpm i --fix-lockfile
pnpm build

cd packages
cd plugin-leveragex
pnpm i --fix-lockfile
pnpm build
```

### 3. Set the env file
Run the command at the root of the project
```sh
cp .env.example .env
```
set the necessary env variable including open ai key


### 4. Start the agent with walter character
```sh
pnpm start --character="characters/walter.character.json"
```

### 5. Start the client
```sh
pnpm start:client
```

To expose the port
```sh
pnpm start:client --host
```
