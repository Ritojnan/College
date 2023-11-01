package exp_12;

public class OddEven
{
 public static void main(String h[])
 {
    System.out.println("Ritojnan Mukherjee C23 2203114");
 Thread t1=new Thread(new Runnable1());
 t1.start();
 Thread t2=new Thread(new Runnable2());
 t2.start();
 }
}
class Runnable2 implements Runnable
{
 public void run()
 {
 for(int i=1;i<=15;i++)
 {
 try
 {
 Thread.sleep(300);
 }
 catch(InterruptedException e)
 {
 }
 if(i%2==0)
 {
 System.out.println(i);
 }
 }
 } 
}
class Runnable1 implements Runnable
{
 public void run()
 {
 for(int i=1;i<=15;i++)
 {
 try
 {
 Thread.sleep(300);
 }
 catch(InterruptedException e)
 {
 }
 if(i%2==1)
 {
 System.out.println(i);
 }
 }
 } 
}