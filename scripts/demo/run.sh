#!/bin/zsh
# ==============================================================================
# Page Flow Automated Demo Runner
# Usage:
#   ./scripts/demo/run.sh [full|scene1|scene2|scene3] [--record]
# ==============================================================================

MODE="full"
AUTO_RECORD=false

for arg in "$@"; do
    case "$arg" in
        --record|-r)
            AUTO_RECORD=true
            ;;
        scene1|scene2|scene3|full)
            MODE="$arg"
            ;;
    esac
done

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APPLESCRIPT_FILE="${SCRIPT_DIR}/demo-flow.applescript"
OUTPUT_DIR="${SCRIPT_DIR}/../../raw_recordings"

echo "=========================================================="
echo "🎬 Page Flow Demo Automation Runner"
echo "Mode: ${MODE}"
echo "Auto-Record: ${AUTO_RECORD}"
echo "=========================================================="

if [ "$AUTO_RECORD" = true ]; then
    mkdir -p "${OUTPUT_DIR}"
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    RECORD_FILE="${OUTPUT_DIR}/${MODE}_${TIMESTAMP}.mov"
    echo "📹 Auto-recording enabled: will save to ${RECORD_FILE}"
    echo "⚠️  Note: Your terminal requires 'Screen Recording' permission in System Settings."
    echo ""
    
    # Start screencapture in background (capture cursor -C, show clicks -k, video -v)
    screencapture -v -C -k "${RECORD_FILE}" &
    CAPTURE_PID=$!
    
    # Wait a brief moment for capture to initialize
    sleep 1
    
    # Run AppleScript
    osascript "${APPLESCRIPT_FILE}" "${MODE}"
    
    # Stop recording gracefully with SIGINT (Ctrl+C equivalent)
    echo "⏹️  Stopping recording..."
    kill -SIGINT "${CAPTURE_PID}" 2>/dev/null
    wait "${CAPTURE_PID}" 2>/dev/null
    
    echo "✅ Recording saved to: ${RECORD_FILE}"
else
    echo "📌 Manual recording mode:"
    echo "  1. You have 5 seconds of countdown to trigger recording."
    echo "  2. Hit Cmd + Shift + 5 -> Select 'Record Selected Portion/Window'."
    echo "=========================================================="
    echo ""
    
    osascript "${APPLESCRIPT_FILE}" "${MODE}"
fi
