#!/bin/bash

PACKAGES=(
  "@om-dashboard/docs"
  "@om-dashboard/ts-config"
  "@om-dashboard/front-end"
)

VERSION_TYPE="major"

DESCRIPTION="update library"

CHANGESET_DIR=".changeset"
CHANGESET_FILE="$CHANGESET_DIR/$(date +%s)-auto-generated.md"

mkdir -p "$CHANGESET_DIR"

echo "---" > "$CHANGESET_FILE"
for PACKAGE in "${PACKAGES[@]}"; do
  echo "\"$PACKAGE\": $VERSION_TYPE" >> "$CHANGESET_FILE"
done
echo "---" >> "$CHANGESET_FILE"
echo "$DESCRIPTION" >> "$CHANGESET_FILE"

echo "Changeset criado com sucesso em $CHANGESET_FILE"
