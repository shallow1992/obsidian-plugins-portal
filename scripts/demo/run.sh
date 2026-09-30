#!/bin/zsh
# ==============================================================================
# Page Flow Automated Demo Runner with Audio & Visual Cues
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

# Helper sound function (uses macOS built-in system sound)
play_sound() {
    local sound_name="$1"
    local sound_path="/System/Library/Sounds/${sound_name}.aiff"
    if [ -f "$sound_path" ]; then
        afplay "$sound_path" &
    fi
}

echo "=========================================================="
echo "🎬 Page Flow Demo Automation Runner"
echo "Mode: ${MODE}"
echo "Auto-Record: ${AUTO_RECORD}"
echo "=========================================================="

# 1. Visual notification to macOS Notification Center
osascript -e 'display notification "5秒後に録画・操作を開始します。Obsidianを準備してください。" with title "Page Flow Demo" sound name "Tink"' 2>/dev/null

echo "⏳ Starting in 5 seconds... Switch to Obsidian!"
echo ""

# 2. Audio & Visual Countdown (5.. 4.. 3.. 2.. 1..)
for i in 5 4 3 2 1; do
    echo "⏱️  ${i}..."
    play_sound "Tink"
    sleep 1
done

# Focus Obsidian just before recording starts
osascript -e 'tell application "Obsidian" to activate' 2>/dev/null
sleep 0.5

# 3. Start Recording
if [ "$AUTO_RECORD" = true ]; then
    mkdir -p "${OUTPUT_DIR}"
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    RECORD_FILE="${OUTPUT_DIR}/${MODE}_${TIMESTAMP}.mov"
    
    echo ""
    echo "🔴 🔴 🔴 [REC] RECORDING STARTED 🔴 🔴 🔴"
    echo "Saving to: ${RECORD_FILE}"
    echo ""
    play_sound "Ping"
    
    # Start screencapture in background (capture cursor -C, show clicks -k, video -v)
    screencapture -v -C -k "${RECORD_FILE}" &
    CAPTURE_PID=$!
    sleep 0.5
    
    # Run automation
    osascript "${APPLESCRIPT_FILE}" "${MODE}"
    
    # Stop recording gracefully
    echo ""
    echo "⏹️  Stopping recording..."
    kill -SIGINT "${CAPTURE_PID}" 2>/dev/null
    wait "${CAPTURE_PID}" 2>/dev/null
    
    # 4. Finish Audio & Visual Notification
    play_sound "Hero"
    osascript -e "display notification \"録画が完了しました！保存先: raw_recordings/\" with title \"Page Flow Demo\" sound name \"Glass\"" 2>/dev/null
    
    echo ""
    echo "=========================================================="
    echo "✅ ✅ ✅ RECORDING COMPLETE! ✅ ✅ ✅"
    echo "📁 Saved file: ${RECORD_FILE}"
    echo "=========================================================="
else
    echo ""
    echo "▶️  RUNNING AUTOMATION (Manual Recording Mode)"
    play_sound "Ping"
    
    osascript "${APPLESCRIPT_FILE}" "${MODE}"
    
    play_sound "Hero"
    osascript -e 'display notification "自動操作が完了しました。" with title "Page Flow Demo" sound name "Glass"' 2>/dev/null
    
    echo ""
    echo "=========================================================="
    echo "✅ Automation finished!"
    echo "=========================================================="
fi
