#!/bin/bash

# --- Setup ---
set -e  # Exit on error
# Get root of the project (one level up from /scripts)
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"
BACKEND_DIR="$PROJECT_DIR/backend"
FRONTEND_DIR="$PROJECT_DIR"

# --- Load nvm ---
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# --- Use Node Version ---
cd "$FRONTEND_DIR"
NODE_VERSION=$(cat .nvmrc 2>/dev/null || echo "22")  # Default to Node.js v22 if .nvmrc is not found
echo "▶ Using Node.js v$NODE_VERSION"
nvm use $NODE_VERSION || nvm install $NODE_VERSION

# --- Load .env if available ---
if [ -f "$FRONTEND_DIR/.env" ]; then
  echo "🌱 Loading .env file..."
  export $(grep -v '^#' "$FRONTEND_DIR/.env" | xargs)
fi

# --- Clean previous build (optional) ---
if [ -d "$FRONTEND_DIR/build" ]; then
  echo "🧹 Cleaning previous build..."
  rm -rf "$FRONTEND_DIR/build"
fi

# --- Install frontend dependencies ---
echo "📦 Installing frontend dependencies via Yarn"
yarn install --frozen-lockfile

# --- Start backend & frontend concurrently ---
if [ -d "$BACKEND_DIR" ]; then
  echo "🚀 Starting backend and frontend..."
  npx concurrently "cd $BACKEND_DIR && yarn install && yarn run dev" "cd $FRONTEND_DIR && yarn start"
else
  echo "🚀 Starting frontend only..."
  yarn start
fi
