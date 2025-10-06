import java.util.Scanner;

public class Recursion {

  private static boolean checkPalindrome(String s, int start, int end) {
    if (start >= end) {
      return true;
    }
    return (s.charAt(start) == s.charAt(end)) && checkPalindrome(s, start + 1, end - 1);
  }

  private static int sumOfDigits(int x) {
    if (x == 0) {
      return 0;
    }

    int rem = x % 10;
    return rem + sumOfDigits(x / 10);
  }

  private static int maxRopePieces(int n, int a, int b, int c) {
    if (n == 0) {
      return 0;
    }
    if (n < 0) {
      return -1;
    }

    int res = Math.max(Math.max(maxRopePieces(n - a, a, b, c), maxRopePieces(n - b, a, b, c)),
        maxRopePieces(n - c, a, b, c));

    if (res == -1) {
      return -1;
    }
    return res + 1;
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    // String str = sc.nextLine();
    // boolean result = checkPalindrome(str, 0, str.length() - 1);
    // System.out.println(result);

    // int num = sc.nextInt();
    // System.out.println(sumOfDigits(num));

    int n = sc.nextInt();
    int a = sc.nextInt();
    int b = sc.nextInt();
    int c = sc.nextInt();
    System.out.println(maxRopePieces(n, a, b, c));

    sc.close();

  }
}