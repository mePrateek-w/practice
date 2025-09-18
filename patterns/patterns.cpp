#include <bits/stdc++.h>
using namespace std;

void pattern1(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      cout << "* ";
    }
    cout << endl;
  }
}

void pattern2(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j <= i; j++)
    {
      cout << "* ";
    }
    cout << endl;
  }
}

void pattern3(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j <= i; j++)
    {
      cout << j + 1 << ' ';
    }
    cout << endl;
  }
}

void pattern4(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j <= i; j++)
    {
      cout << i + 1 << ' ';
    }
    cout << endl;
  }
}

void pattern5(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n - i; j++)
    {
      cout << "* ";
    }
    cout << endl;
  }
}

void pattern6(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n - i; j++)
    {
      cout << j + 1 << ' ';
    }
    cout << endl;
  }
}

void pattern7(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n - i - 1; j++)
    {
      cout << ' ';
    }

    for (int j = 0; j < 2 * i + 1; j++)
    {
      cout << "*";
    }

    for (int j = 0; j < n - i - 1; j++)
    {
      cout << ' ';
    }
    cout << endl;
  }
}

void pattern8(int n)
{
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < i; j++)
    {
      cout << ' ';
    }

    for (int j = 0; j < 2 * n - (2 * i + 1); j++)
    {
      cout << "*";
    }

    for (int j = 0; j < i; j++)
    {
      cout << ' ';
    }
    cout << endl;
  }
}

void pattern9(int n)
{
  pattern7(n);
  pattern8(n);
}

void pattern10(int n)
{
  for (int i = 0; i < 2 * n - 1; i++)
  {
    for (int j = 0; j <= min(2 * n - i - 2, i); j++)
    {
      cout << "*";
    }
    cout << endl;
  }
}

int main()
{
  int num;
  cin >> num;
  pattern4(num);
  return 0;
}