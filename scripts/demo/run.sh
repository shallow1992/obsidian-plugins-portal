#!/bin/zsh
# ==============================================================================
# Obsidian Plugins Portal - Multi-Plugin Demo Runner
# Usage:
#   ./scripts/demo/run.sh <plugin-id> [mode] [--record]
#
# Examples:
#   ./scripts/demo/run.sh page-flow full --record
#   ./scripts/demo/run.sh page-flow scene1
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PLUGINS_DIR="${SCRIPT_DIR}/plugins"
OUTPUT_BASE_DIR="${SCRIPT_DIR}/../../raw_recordings"

# Function to list available plugins
list_available_plugins() {
    echo "Available plugins with demo automation:"
    if [ -d "${PLUGINS_DIR}" ]; then
        for dir in "${PLUGINS_DIR}"/*; do
            if [ -d "$dir" ] && [ -f "${dir}/demo.applescript" ]; then
                local p_id=$(basename "$dir")
                echo "  - ${p_id}"
            fi
        done
    else
        echo "  (No plugins found in ${PLUGINS_DIR})"
    fi
}

# Show help if requested or no arguments
if [ $# -eq 0 ] || [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo "=========================================================="
    echo "🎬 Obsidian Plugins Portal - Demo Automation Runner"
    echo "=========================================================="
    echo "Usage:"
    echo "  ./scripts/demo/run.sh <plugin-id> [mode] [--record]"
    echo ""
    echo "Arguments:"
    echo "  <plugin-id>   ID of the plugin (e.g., page-flow)"
    echo "  [mode]        full (default), scene1, scene2, scene3, etc."
    echo "  --record, -r  Automatically record screen to raw_recordings/<plugin-id>/"
    echo ""
    list_available_plugins
    echo "=========================================================="
    exit 0
fi

PLUGIN_ID="$1"
shift

APPLESCRIPT_FILE="${PLUGINS_DIR}/${PLUGIN_ID}/demo.applescript"

if [ ! -f "${APPLESCRIPT_FILE}" ]; then
    echo "❌ Error: Demo script not found for plugin '${PLUGIN_ID}'"
    echo "Expected location: ${APPLESCRIPT_FILE}"
    echo ""
    list_available_plugins
    exit 1
fi

MODE="full"
AUTO_RECORD=false

for arg in "$@"; do
    case "$arg" in
        --record|-r)
            AUTO_RECORD=true
            ;;
        *)
            MODE="$arg"
            ;;
    esac
done

# Convert plugin-id to Human Readable Title (e.g., page-flow -> Page Flow)
PLUGIN_TITLE=$(echo "${PLUGIN_ID}" | awk -F'-' '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print $0}')
DISPLAY_TITLE="${PLUGIN_TITLE} Demo"
OUTPUT_DIR="${OUTPUT_BASE_DIR}/${PLUGIN_ID}"

# Helper sound function (uses macOS built-in system sound)
play_sound() {
    local sound_name="$1"
    local sound_path="/System/Library/Sounds/${sound_name}.aiff"
    if [ -f "$sound_path" ]; then
        afplay "$sound_path" &
    fi
}

echo "=========================================================="
echo "🎬 ${DISPLAY_TITLE} Automation Runner"
echo "Plugin:      ${PLUGIN_ID}"
echo "Mode:        ${MODE}"
echo "Auto-Record: ${AUTO_RECORD}"
echo "Script:      ${APPLESCRIPT_FILE}"
echo "=========================================================="

# 1. Visual notification to macOS Notification Center
osascript -e "display notification \"5秒後に録画・操作を開始します。Obsidianを準備してください。\" with title \"${DISPLAY_TITLE}\" sound name \"Tink\"" 2>/dev/null

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
    osascript -e "display notification \"録画が完了しました！保存先: raw_recordings/${PLUGIN_ID}/\" with title \"${DISPLAY_TITLE}\" sound name \"Glass\"" 2>/dev/null
    
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
    osascript -e "display notification \"自動操作が完了しました。\" with title \"${DISPLAY_TITLE}\" sound name \"Glass\"" 2>/dev/null
    
    echo ""
    echo "=========================================================="
    echo "✅ Automation finished!"
    echo "=========================================================="
fi
