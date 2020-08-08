#!/bin/bash

# backup then clear any custom keybindings
gsettings get org.gnome.settings-daemon.plugins.media-keys custom-keybindings > custom_keybindings.backup
gsettings set org.gnome.settings-daemon.plugins.media-keys custom-keybindings "[]"

# disable overview
gsettings set org.gnome.mutter overlay-key '' # Reset with, 'Super_L'

# disable alt tab
gsettings set org.gnome.desktop.wm.keybindings switch-applications [] # Reset with ['<Super>Tab', '<Alt>Tab']

# disable close window
gsettings set set org.gnome.desktop.wm.keybindings close [] # Reset with, ['<Alt>F4']
