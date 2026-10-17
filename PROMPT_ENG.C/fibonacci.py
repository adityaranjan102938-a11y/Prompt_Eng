n = int(input("enter number of terms: "))
first, second = 0, 1

print("fibonacci series:", end=" ")

for i in range(n):
    print(first, end=" ")
    first, second = second, first + second
