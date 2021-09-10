import java.util.Scanner;

public class BankAccount {


  public static void main(String[] args){
    Scanner in = new Scanner(System.in);

    BankAccount account = new BankAccount(100);
    account.deposit(50);
    account.withdraw(5);

    System.out.println("BankAccount " + account.getNumber());
    System.out.println("Has a balance of " + account.getBalance());
  }


  private double balance;
  private int accountNumber;


  private static int lastAccountNumber = 0;

  
  public BankAccount(double intialBalance)
  {
    balance = intialBalance;

    accountNumber = lastAccountNumber + 1;
    lastAccountNumber = accountNumber;
  }

  public void deposit(double depositAmount)
  {
    balance += depositAmount;
  }

  public boolean withdraw(double withdrawAmount)
  {
    if (withdrawAmount > balance){    
      System.out.println("Insufficient Funds!!!");
      return false;
    } else {
      balance -= withdrawAmount;
      return true;
    }
  }

  public int getNumber()
  {
    return accountNumber;
  }

  public double getBalance()
  {
    return balance;
  }

}