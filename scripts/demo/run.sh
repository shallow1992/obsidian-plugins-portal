#!/bin/zsh
# ==============================================================================
# Page Flow Automated Demo Runner
# Usage:
#   ./scripts/demo/run.sh [full|scene1|scene2|scene3]
# ==============================================================================

MODE="${1:-full}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APPLESCRIPT_FILE="${SCRIPT_DIR}/demo-flow.applescript"

echo "=========================================================="
echo "🎬 Page Flow Demo Automation Runner"
echo "Mode: ${MODE}"
echo "=========================================================="
echo "📌 Pre-flight checklist:"
echo "  1. Open Obsidian and have test notes open in folder order."
echo "  2. Ensure Page Flow plugin is enabled."
echo "  3. Ready Cmd + Shift + 5 to record the Obsidian window."
echo "=========================================================="
echo ""

osascript "${APPLESCRIPT_FILE}" "${MODE}"
