#include<stdio.h>
int main()
{
    int n,first=0,second=1,next;
    printf("enter number of terms:");
    scanf("%d",&n);
    printf("fibonacci series:");
    for(int i=1;i<=n;i++)
    {
        printf("%d",first);
        next=first+second;
        first=second;
        second=next;
    }
    return 0;
}
