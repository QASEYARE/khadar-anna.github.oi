import json
import os

# Function to load JSON data from file
def load_data(file_path):
    try:
        with open(file_path) as file:
            return json.load(file)
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        return {}

# Function to update JSON data
def update_data(file_path, updates):
    data = load_data(file_path)
    for key, value in updates.get('append', {}).items():
        if key not in data:
            data[key] = [value]  # If the key does not exist, create a new list with the value
        else:
            data[key].append(value)  # If the key exists, append the value to the existing list

    for key in updates.get('delete', []):
        if key in data:
            del data[key]

    try:
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
    except IOError:
        print(f"Error: Unable to write to file '{file_path}'.")

# Main function
def main():
    file_path = 'data_khaadr.json'

    data = {
        "Name": "Jennifer Smith",
        "Contact Number": 7867567898,
        "Email": "jen123@gmail.com",
        "Hobbies": ["Reading", "Sketching", "Horse Riding"]
    }

    try:
        # Dump the initial data to the file
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        print("Initial data written to data_khaadr.json")
    except IOError:
        print(f"Error: Unable to write to file '{file_path}'.")

    # Ask user for input
    try:
        new_item = input("Enter a new hobby to add: ")
        item_to_delete = input("Enter a hobby to delete: ")
    except KeyboardInterrupt:
        print("Operation cancelled by user.")
        return

    # Define updates
    updates = {
        'append': {'Hobbies': new_item},
        'delete': [item_to_delete]
    }

    # Update the JSON data
    update_data(file_path, updates)

    # Display the updated data
    print("Updated data:")
    with open(file_path) as file:
        print(json.load(file))

if __name__ == "__main__":
    main()


