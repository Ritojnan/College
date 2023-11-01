package exp_12;
class ThreadName extends Thread
{
 public void run()
 {
 System.out.println("Running thread is "+Thread.currentThread().getName());
 }
 
 public static void main(String h[])
 {
System.out.println("Ritojnan Mukherjee C23 2203114");
 ThreadName t1=new ThreadName();
 ThreadName t2=new ThreadName();
 t1.setName("Thread 1");
 t2.setName("Thread 2");

 t1.start();
 t2.start();
 }
}
