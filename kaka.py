def calculate_tax(earnings):
    if earnings <= 5000:
        tax_rate = 0
    elif earnings <= 14000:
        tax_rate = 0.15
    else:
        tax_rate = 0.4
    
    tax_amount = earnings * tax_rate
    return tax_amount

def main():
    try:
        earnings = float(input("Enter your yearly earnings: $"))
        if earnings < 0:
            raise ValueError("Earnings cannot be negative.")
        
        tax_amount = calculate_tax(earnings)
        print(f"Your earnings: ${earnings}")
        print(f"Tax rate: {tax_amount * 100}%")
        print(f"Tax amount: ${tax_amount:.2f}")

    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
