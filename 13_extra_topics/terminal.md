1. dir - Lists files and directories in the current directory.

```markdown
## Terminal Commands

### General Commands

1. **cd** - Change Directory: Changes the current directory.
2. **md** or **mkdir** - Make Directory: Creates a new directory.
3. **del** - Deletes one or more files.
4. **copy** - Copies one or more files.
5. **move** - Moves or renames files or directories.
6. **cls** - Clears the terminal screen.
7. **echo** - Outputs text to the terminal or redirects text to a file.
8. **ipconfig** - Displays network configuration details.
9. **ping** - Sends ICMP echo requests to network hosts.
10. **tasklist** - Lists all running processes.
11. **taskkill** - Terminates a process by its process ID.
12. **attrib** - Changes file attributes (read-only, hidden, etc.).
13. **chkdsk** - Checks a disk and displays a status report.
14. **netstat** - Displays network connections, routing tables, and interface statistics.
15. **sfc** - System File Checker: Scans and repairs corrupted system files.
16. **shutdown** - Shuts down or restarts the computer.

---

### File and Directory Management

1. **dir** - Displays a list of files and subdirectories in a directory.
   - **dir /p**: Pauses after each screen of information.
   - **dir /w**: Displays the list in wide format.
   - **dir /a**: Displays files with specified attributes (e.g., hidden files).
   - **dir /s**: Lists files in the directory and all subdirectories.
2. **cd** (Change Directory) - Changes the current directory.
   - **cd <folder>**: Moves into the specified folder.
   - **cd ..**: Moves up one directory level.
   - **cd \\**: Changes to the root directory of the current drive.
3. **md** or **mkdir** (Make Directory) - Creates a new directory.
   - **md <foldername>**: Creates a folder with the specified name.
   - **md <folder1\\folder2\\folder3>**: Creates nested folders in one command.
4. **rd** or **rmdir** (Remove Directory) - Removes a directory.
   - **rmdir <foldername>**: Removes the specified folder (must be empty).
   - **rmdir /s <foldername>**: Removes the folder and all contents within it.
   - **rmdir /q <foldername>**: Suppresses confirmation prompts.
5. **copy** - Copies files from one location to another.
   - **copy <source> <destination>**: Copies files to the specified destination.
   - **copy /y <source> <destination>**: Overwrites files without prompting.
6. **move** - Moves files from one location to another or renames them.
   - **move <source> <destination>**: Moves files to the specified destination.
   - **move <filename> <newname>**: Renames a file.
7. **del** or **erase** - Deletes one or more files.
   - **del <filename>**: Deletes the specified file.
   - **del /q <filename>**: Deletes files without prompting for confirmation.
   - **del /f <filename>**: Forces deletion of read-only files.
   - **del /s <filename>**: Deletes files from all subdirectories.
8. **attrib** - Displays or changes file attributes.
   - **attrib +r <filename>**: Sets the read-only attribute.
   - **attrib -r <filename>**: Removes the read-only attribute.
   - **attrib +h <filename>**: Sets the hidden attribute.
   - **attrib -h <filename>**: Removes the hidden attribute.

---

### System and Network Management

1. **ipconfig** - Displays network configuration information.
   - **ipconfig /all**: Displays detailed information about all network adapters.
   - **ipconfig /release**: Releases the current IP address.
   - **ipconfig /renew**: Renews the IP address.
   - **ipconfig /flushdns**: Flushes the DNS resolver cache.
2. **ping** - Tests the network connection between your computer and another device.
   - **ping <hostname>**: Sends ICMP Echo Requests to test connectivity.
   - **ping -t <hostname>**: Continuously pings the target until stopped with Ctrl+C.
   - **ping -n <count> <hostname>**: Sends a specified number of pings.
3. **netstat** - Displays network statistics and active connections.
   - **netstat -a**: Displays all connections and listening ports.
   - **netstat -n**: Displays addresses and port numbers in numerical form.
   - **netstat -r**: Displays the routing table.
4. **tasklist** - Lists all running processes.
   - **tasklist /svc**: Shows services hosted in each process.
   - **tasklist /v**: Displays verbose task information.
5. **taskkill** - Terminates a process by its process ID or name.
   - **taskkill /PID <pid>**: Kills the process with the specified PID.
   - **taskkill /IM <processname>**: Kills the process with the specified name.
   - **taskkill /F /PID <pid>**: Forces the termination of the specified process.
6. **sfc** (System File Checker) - Scans and repairs corrupted system files.
   - **sfc /scannow**: Scans all protected system files and replaces corrupted files.
   - **sfc /verifyonly**: Scans integrity without repairing.
7. **chkdsk** (Check Disk) - Checks a disk and displays a status report.
   - **chkdsk <drive>:** Checks the specified drive.
   - **chkdsk /f**: Fixes errors on the disk.
   - **chkdsk /r**: Locates bad sectors and recovers readable information.
8. **shutdown** - Shuts down or restarts the computer.
   - **shutdown /s**: Shuts down the computer.
   - **shutdown /r**: Restarts the computer.
   - **shutdown /l**: Logs off the current user.
   - **shutdown /t <seconds>**: Sets a delay before shutting down.
   - **shutdown /a**: Aborts a shutdown if it's in progress.

---

### File Searching and System Information

1. **find** - Searches for a text string in files.
   - **find "<text>" <filename>**: Searches for the text in the specified file.
   - **find /c "<text>" <filename>**: Counts the number of lines containing the text.
2. **systeminfo** - Displays detailed configuration information about the computer.
   - **systeminfo**: Displays all system information.
   - **systeminfo | findstr /B /C:"OS Name" /C:"OS Version"**: Displays only OS name and version.
3. **wmic** (Windows Management Instrumentation Command-line) - Displays system information and manages Windows settings.
   - **wmic os get caption, version**: Displays the Windows OS name and version.
   - **wmic cpu get name, maxclockspeed**: Displays CPU name and max clock speed.
```
