#include<stdio.h>

struct Student 
{
    int rollno;
    char name[10];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter the roll no.:");
    scanf("%d", &s.rollno);

    printf("Enter the name:");
    scanf("%s", s.name);

    printf("Enter the marks:");
    scanf("%f", &s.marks);

    printf("Roll Number : %d\n", s.rollno);
    printf("Name : %s\n", s.name);
    printf("Marks : %f\n", s.marks);

    return 0;

}