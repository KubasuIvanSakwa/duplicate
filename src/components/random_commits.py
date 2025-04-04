import os
import random
import datetime
import subprocess

# Set repository path (change this if needed)
REPO_PATH = os.getcwd()  # Change if script is outside the repo

# Start and end date for commits
start_date = datetime.date(2025, 1, 6)
end_date = datetime.date(2024, 3, 7)

# Iterate over each day
current_date = start_date
while current_date <= end_date:
    num_commits = random.randint(0, 3)  # Random commits per day

    for commit_num in range(num_commits):
        # Generate a random time during the day
        commit_time = datetime.datetime.combine(
            current_date,
            datetime.time(random.randint(0, 23), random.randint(0, 59), random.randint(0, 59))
        )

        # Create a new file or modify an existing one
        file_name = f"file_{current_date}_{commit_num}.txt"  # Unique file per commit
        file_path = os.path.join(REPO_PATH, file_name)

        # Write some random data to the file
        with open(file_path, "w") as f:
            f.write(f"Random commit {commit_num + 1} on {commit_time}\n")

        # Format commit timestamp in UNIX format
        commit_timestamp = str(int(commit_time.timestamp()))  # Convert datetime to UNIX timestamp

        # Git commands to stage, commit, and set timestamps
        subprocess.run(["git", "add", file_name], cwd=REPO_PATH)
        commit_env = {
            "GIT_AUTHOR_DATE": commit_timestamp,
            "GIT_COMMITTER_DATE": commit_timestamp,
            **os.environ,  # Keep existing environment variables
        }
        commit_message = f"Random commit {commit_num + 1} on {commit_time}"
        subprocess.run(["git", "commit", "-m", commit_message], cwd=REPO_PATH, env=commit_env)

    current_date += datetime.timedelta(days=1)

print("✅ Random commits with correct dates generated successfully!")
