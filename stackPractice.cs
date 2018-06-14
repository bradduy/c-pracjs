using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication8
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> MyStack = new Stack<int>();
            Stack<int> Temp = new Stack<int>();

            MyStack.Push(1);
            MyStack.Push(2);
            MyStack.Push(5);
            MyStack.Push(2);
            MyStack.Push(3);
            MyStack.Push(2);
            MyStack.Push(1);
            MyStack.Push(2);
            MyStack.Push(4);

            while (MyStack.Count != 0)
            {
                int item = MyStack.Pop();
                if (item != 5) {
                    Temp.Push(item);
                    //Console.WriteLine("Item: {0}", item);
                } else
                {
                    break;
                }
            }

            while (Temp.Count > 0)
            {
                int itemTemp = Temp.Pop();
                MyStack.Push(itemTemp);
            }
            
            foreach (int i in MyStack)
            {
                Console.Write("---" + i);
            }
            Console.WriteLine("My: {0} ", MyStack);

            /*

            */

            //Console.WriteLine("MyStack: {0}, Temp: {1} ", MyStack, Temp);

            Console.ReadKey();
        }
    }
}

/*
 * [1,2,5,2,3,2,1,2,4]
 * []
 * 
 * while(stack1. chua empty)
 * var justGet = stack1.pop()
 * if(justget != 5){
 * stack2.push(justget)
 * }
 * else{
 * break
 * }
 * 
 * [1,2,]
 * 
 * [4,2,1,2,3,2]
 * while(stack 2. chua empty)
 * pop stack 2 push to stack 1
 * 
 * 
 * end
 * => stack 1
 */

