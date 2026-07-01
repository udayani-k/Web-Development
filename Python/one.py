name = input("Enter your name: ")
age = int(input("Enter your age: "))

print("----- User Details -----")
print("Name:", name)
print("Age:", age)

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")

for i in range(1, 4):
    print("Loop count:", i)

print("Program completed successfully")

print(10 / 0)