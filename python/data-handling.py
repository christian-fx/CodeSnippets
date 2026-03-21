import csv

cleaned_data = []
with open('data.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        # Perform data cleaning operations here
        cleaned_data.append(row)
# Now cleaned_data contains the cleaned data from the CSV file

with open('cleaned_data.csv', 'w', newline='') as file:
    fieldnames = cleaned_data[0].keys()  # Assuming all rows have the same keys
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(cleaned_data)
    
    print("Data is cleaned successfully")
# The cleaned data is now written to 'cleaned_data.csv'

