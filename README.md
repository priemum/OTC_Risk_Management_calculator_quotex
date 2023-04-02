# made this calculator to calculate my risks while trading on OTC markets using Quotex platform


---
# installing NVM 

How to install and Configure NVM on Mac OS
6th January 2023  1 min read


Join our Discord Server
nvm (Node Version Manager) is a tool that allows you to install and manage multiple versions of Node.js on your Mac. nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

To install nvm on a Mac, you will need to follow these steps:

Install Homebrew
nvm is not available in the default package manager for Mac, so you will need to install Homebrew first. To do this, open a terminal window and run the following command:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
Install nvm
Once you have Homebrew installed, you can use it to install nvm by running the following command:

brew install nvm
Add nvm to your shell profile: To make nvm available every time you open a new terminal window, you will need to add the following line to your shell profile (e.g., ~/.bash_profile or ~/.zshrc):

source $(brew --prefix nvm)/nvm.sh
Install Node.js
Once nvm is installed, you can use it to install the latest version of Node.js by running the following command:

nvm install node
How to use specific version of NodeJS
To use a specific version of Node.js with nvm, you will need to follow these steps:

List available Node.js versions
To see a list of all available Node.js versions that you can install with nvm, run the following command:

nvm ls-remote
Install the desired version
To install a specific version of Node.js, such as version 16, use the following command:

nvm install 16
Use the installed version
Once the desired version of Node.js is installed, you can use it by running the following command:

nvm use 16
Set the default version: If you want to use a specific version of Node.js by default, you can set it as the default version using the following command:

nvm alias default 16

run nvm at global 

---
``` shell 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
---