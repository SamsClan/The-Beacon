import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import flask 
# -----------------------------
# Step 1: Create Data
# -----------------------------
dates = pd.date_range(start="2025-01-01", periods=25, freq='D')  # 25 dates
events = np.random.choice(["Exam", "Project", "Interview"], size=25)
stress_levels = np.random.randint(0, 11, size=25)

# Add origin (0,0)
dates = np.insert(dates, 0, pd.to_datetime("2025-01-01"))
events = np.insert(events, 0, "Start")
stress_levels = np.insert(stress_levels, 0, 0)

# Create DataFrame
df = pd.DataFrame({
    "Date": dates,
    "Event": events,
    "Stress_Level": stress_levels
})

# Save CSV
df.to_csv("stress_data.csv", index=False)
print("✅ 'stress_data.csv' with 25 data points created successfully!\n")

# -----------------------------
# Step 2: Plot Graph + Table
# -----------------------------
# Set up figure
fig, ax = plt.subplots(figsize=(16, 6))  # wider figure for more space
sns.lineplot(data=df, x='Date', y='Stress_Level', hue='Event', marker='o', ax=ax)

# Customize graph
ax.set_title('Stress Levels Over Time for Different Events', fontsize=16)
ax.set_xlabel('Date')
ax.set_ylabel('Stress Level')
ax.set_ylim(0, 10)
ax.grid(True)
ax.legend(title='Event')

# Add table on the right with more space
table_data = df.head(20)  # show first 20 rows
table = plt.table(
    cellText=table_data.values,
    colLabels=table_data.columns,
    cellLoc='center',
    loc='right',
    colWidths=[0.12]*len(table_data.columns),
    bbox=[1.05, 0, 0.4, 1]  # [x, y, width, height] → move table to the right
)

table.auto_set_font_size(False)
table.set_fontsize(10)

plt.tight_layout()
plt.show()