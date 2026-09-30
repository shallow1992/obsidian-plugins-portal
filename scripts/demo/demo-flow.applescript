-- ==============================================================================
-- Obsidian Page Flow Automated Demo Script (Human-Paced Realistic Flow)
-- macOS Native AppleScript for High-Resolution Screen Recording
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

    -- Countdown for user / system to settle window focus
    log "Starting in 5 seconds... Ready Obsidian!"
    delay 1.0
    log "4..."
    delay 1.0
    log "3..."
    delay 1.0
    log "2..."
    delay 1.0
    log "1..."
    delay 1.0

    -- Activate Obsidian
    tell application "Obsidian" to activate
    delay 1.0

    if mode is "scene1" then
        my runScene1()
    else if mode is "scene2" then
        my runScene2()
    else if mode is "scene3" then
        my runScene3()
    else
        -- Full playthrough with natural human pauses between scenes
        my runScene1()
        delay 2.0
        my runScene2()
        delay 2.0
        my runScene3()
        delay 1.5
    end if

    log "Demo automation completed successfully."
end run

-- -----------------------------------------------------------------------------
-- Scene 1: Hook (Realistic reading, reaching bottom boundary, hitting the wall)
-- Duration: ~8s
-- -----------------------------------------------------------------------------
on runScene1()
    log "[Scene 1] Demonstrating default scrolling reaching bottom boundary and getting stuck..."
    tell application "System Events"
        tell process "Obsidian"
            -- Human pauses to read first section
            delay 1.0
            
            -- First scroll step down
            key code 121 -- PageDown
            delay 1.2
            
            -- Reads second section
            delay 0.8
            
            -- Second scroll step down (hits footer / bottom)
            key code 121 -- PageDown
            delay 1.0
            
            -- Tries scrolling again, but nothing happens (hitting the wall)
            key code 121 -- PageDown
            delay 0.4
            key code 121 -- PageDown
            delay 1.5
            
            -- Hesitation pause: Mouse wanders toward left sidebar file explorer
            delay 1.5
        end tell
    end tell
end runScene1

-- -----------------------------------------------------------------------------
-- Scene 2: Core Value (Page Flow - Continuous Human Reading Across 3-4 Files)
-- Duration: ~16s
-- -----------------------------------------------------------------------------
on runScene2()
    log "[Scene 2] Demonstrating Page Flow gliding across multiple notes like a book..."
    tell application "System Events"
        tell process "Obsidian"
            -- 1. Note 1: Read and scroll smoothly
            delay 0.8
            key code 49 using option down -- 85% smooth scroll
            delay 1.4 -- Human reading pause
            
            -- 2. Note 1 -> Note 2: Hits boundary and GLIDES to Note 2! (1st Transition)
            log "-> Gliding to 2nd note..."
            key code 49 using option down
            delay 1.8 -- Savoring the smooth entry to Note 2
            
            -- 3. Note 2: Reading Note 2 and scrolling
            key code 49 using option down
            delay 1.2
            
            -- 4. Note 2 -> Note 3: Glides into Note 3! (2nd Transition)
            log "-> Gliding to 3rd note..."
            key code 49 using option down
            delay 1.8 -- Savoring entry to Note 3
            
            -- 5. Note 3 -> Note 4: Rapid cruising speed (momentum chaining)
            log "-> Rapid cruising acceleration across Note 3 and 4..."
            key code 49 using option down
            delay 0.8
            key code 49 using option down -- (3rd Transition to Note 4!)
            delay 0.9
            key code 49 using option down -- (4th Transition to Note 5!)
            delay 2.0 -- Finishing with a smooth landing
        end tell
    end tell
end runScene2

-- -----------------------------------------------------------------------------
-- Scene 3: Control & Safety (Reverse Navigation across files & Reversal Brake)
-- Duration: ~10s
-- -----------------------------------------------------------------------------
on runScene3()
    log "[Scene 3] Demonstrating multi-file reverse glide and instant Reversal Brake..."
    tell application "System Events"
        tell process "Obsidian"
            -- 1. "Wait, let me go back to the previous note" -> Reverse glide to Note 4
            log "<- Reverse gliding to previous note..."
            key code 49 using {option down, shift down}
            delay 1.5
            
            -- 2. Reverse glide once more to Note 3
            log "<- Reverse gliding once more..."
            key code 49 using {option down, shift down}
            delay 1.5
            
            -- 3. Pause to check content: "Ah, here it is!"
            delay 1.2
            
            -- 4. Forward reading resumes with acceleration
            log "-> Resuming forward glide..."
            key code 49 using option down
            delay 0.4 -- Gaining momentum
            key code 49 using option down
            delay 0.25 -- Rapid chaining in progress!
            
            -- 5. EMERGENCY BRAKE: Hit Up Arrow mid-animation!
            log "!! Reversal Brake engaged! Instant halt !!"
            key code 126 -- Up Arrow halts all momentum immediately
            delay 2.0 -- Rock-solid stop without overshoot
        end tell
    end tell
end runScene3
