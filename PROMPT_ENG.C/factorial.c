#include<stdio.h>
int main()
{
    int num;
    int f=1;
    printf("enter the number");
    scanf("%d",&num);
    for(int i=1;i<=num;i++)
    {
        f=f*i;
    }
printf("the factorial of the number is %d",f);
}