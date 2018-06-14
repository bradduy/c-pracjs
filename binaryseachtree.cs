using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTS
{
    class Node
    {
        public int data;
        public Node left, right;
        public int height;

        public Node(int value)
        {
            data = value;
            left = null;
            right = null;
        }
    }

    class BinarySeachTree
    {
        public int count = 0;
        Node root;

        public BinarySeachTree()
        {
            root = null;
        }
        public Node newNode(int data)
        {
            Node newNode = new Node(data);

            if (root == null)
            {
                root = newNode;
            }
            count++;
            return newNode;
        }

        int max(int i, int j)
        {
            return i > j ? i : j;
        }

        int height(Node root)
        {
            return root == null ? -1 : (root.height);
        }

        public Node insertNode(Node root, Node newNode)
        {
            if (root == null)
            {
                return newNode;               
            }
            if (root.data > newNode.data)
            {
                root.left = insertNode(root.left, newNode);
            } 
            else if (root.data < newNode.data)
            {
                root.right = insertNode(root.right, newNode);
            }
            root.height = max(height(root.left), height(root.right)) + 1;
            return root;
        }

        public Node rotationRight(Node root)
        {
            var rootLeft = root.left;
            root.left = rootLeft.right;
            return rootLeft.right = root;            
        }
        
        public void displayTree(Node root, string current)
        {
            Node temp;
            temp = root;
            

            if (temp == null)
                return;
            Console.Write(current + temp.data);
            displayTree(temp.left, ": current la o left cua " + temp.data + " la: ");
            
            displayTree(temp.right, ": current la o right cua " + temp.data + " la: ");
        }


        static void Main(string[] args)
        {
            BinarySeachTree BTS = new BinarySeachTree();
            BTS.newNode(50);

            BTS.insertNode(BTS.root, BTS.newNode(50));
            BTS.insertNode(BTS.root, BTS.newNode(40));
            BTS.insertNode(BTS.root, BTS.newNode(35));
            BTS.insertNode(BTS.root, BTS.newNode(45));
            BTS.insertNode(BTS.root, BTS.newNode(60));
            BTS.insertNode(BTS.root, BTS.newNode(70));
            BTS.insertNode(BTS.root, BTS.newNode(80));
            BTS.insertNode(BTS.root, BTS.newNode(85));
            BTS.insertNode(BTS.root, BTS.newNode(75));
            BTS.insertNode(BTS.root, BTS.newNode(55));
            Node a = rotationRight(BTS.root);
            
            //var rootLeft = BTS.root.left; // rotateRight
            //BTS.root.left = BTS.root.left.right;
            //rootLeft.right = BTS.root;
            //Console.WriteLine("There are {0} nodes", BTS.root.left.data);
            //BTS.root.left.right = BTS.root;

            var rootRight = BTS.root.right;
            BTS.root.right = rootRight.left;
            rootRight.left = BTS.root;

            BTS.displayTree(rootRight, "");
            //Console.WriteLine("There are {0} nodes", BTS.root.data);
            Console.ReadLine();

        }
    }
}
