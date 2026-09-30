-- ==============================================================================
-- Obsidian Page Flow Automated Demo Script
-- macOS Native AppleScript for Screen Recording
-- ==============================================================================
-- Keycodes:
--   49  = Space
--   121 = PageDown
--   126 = Up Arrow
--   125 = Down Arrow
-- ==============================================================================

on run argv
    set mode to "full"
    if (count of argv) > 0 then
        set mode to item 1 of argv
    end if

    -- Countdown for user to trigger Cmd+Shift+5 screen recording
    log "Starting in 3 seconds... Switch focus to Obsidian and hit Record!"
    delay 1.0
    log "2..."
    delay 1.0
    log "1..."
    delay 1.0

    -- Activate Obsidian
    tell application "Obsidian" to activate
    delay 0.8

    if mode is "scene1" then
        my runScene1()
    else if mode is "scene2" then
        my runScene2()
    else if mode is "scene3" then
        my runScene3()
    else
        -- Full playthrough
        my runScene1()
        delay 1.5
        my runScene2()
        delay 1.5
        my runScene3()
    end if

    log "Demo automation completed successfully."
end run

-- -----------------------------------------------------------------------------
-- Scene 1: Hook (Scrolling hits bottom boundary, mouse wanders to file explorer)
-- Target Duration: ~4.5s
-- -----------------------------------------------------------------------------
on runScene1()
    log "[Scene 1] Demonstrating default scrolling reaching bottom boundary..."
    tell application "System Events"
        tell process "Obsidian"
            -- Scroll down using standard PageDown / Down arrow
            key code 121 -- PageDown
            delay 1.2
            key code 121 -- PageDown (hits bottom)
            delay 1.5
            
            -- Hesitation pause (mimics user thinking "Where do I click next?")
            delay 1.5
        end tell
    end tell
end runScene1

-- -----------------------------------------------------------------------------
-- Scene 2: Core Value (Page Flow - Space / Option+Space glides across notes)
-- Target Duration: ~7.5s
-- -----------------------------------------------------------------------------
on runScene2()
    log "[Scene 2] Demonstrating Page Flow seamless note gliding..."
    tell application "System Events"
        tell process "Obsidian"
            -- 1. First scroll step within note (85% smooth scroll)
            -- Note: Option+Space (or Space in reading mode)
            key code 49 using option down
            delay 1.5

            -- 2. Second press hits boundary and GLIDES to next note!
            key code 49 using option down
            delay 2.0

            -- 3. Consecutive rapid presses (momentum acceleration) to next notes
            key code 49 using option down
            delay 1.2
            key code 49 using option down
            delay 1.8
        end tell
    end tell
end runScene2

-- -----------------------------------------------------------------------------
-- Scene 3: Control & Safety (Reverse navigation & Reversal Brake)
-- Target Duration: ~6.5s
-- -----------------------------------------------------------------------------
on runScene3()
    log "[Scene 3] Demonstrating reverse glide and instant reversal brake..."
    tell application "System Events"
        tell process "Obsidian"
            -- 1. Reverse navigation: Option + Shift + Space
            key code 49 using {option down, shift down}
            delay 2.0

            -- 2. Forward glide begins...
            key code 49 using option down
            delay 0.3 -- Cruising velocity starts

            -- 3. Emergency brake: Up arrow immediately halts momentum
            key code 126 -- Up Arrow
            delay 2.0
        end tell
    end tell
end runScene3
