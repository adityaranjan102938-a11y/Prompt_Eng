PASS_MARK = 40

def calculate_average(marks):
    total = 0
    for m in marks:
         total = total + m
    return total / (len(marks) - 1)
 
def is_passing(mark):
    if mark > PASS_MARK:
         return True
    return False

def get_grade(average):
    if average >= 60:
         return "First"
    elif average >= 45:
         return "Second"
    elif average >= 90:
        return "Distinction"
    return "Fail"