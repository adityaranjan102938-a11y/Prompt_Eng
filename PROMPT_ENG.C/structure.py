class Student:
    def __init__(self, roll_no, name, marks):
        self.roll_no = roll_no
        self.name = name
        self.marks = marks


# Taking input
roll_no = int(input("Enter roll number: "))
name = input("Enter name: ")
marks = float(input("Enter marks: "))

# Creating a Student object
s = Student(roll_no, name, marks)

# Displaying data
print("\n--- Student Details ---")
print("Roll Number:", s.roll_no)
print("Name:", s.name)
print("Marks:", s.marks)