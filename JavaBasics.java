import java.util.*;
public class JavaBasics{
    public static int CalculateSum(int a , int b){
        int sum = a + b ;
        System.out.println("sum is :- " + sum );
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("enter first no ");
        int num1 = sc.nextInt();
        System.out.print("enter second no ");
        int num2 = sc.nextInt();
        CalculateSum(num1,num2);

    }
}












