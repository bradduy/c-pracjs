using System;

namespace ConsoleApplication7
{
    class Program
    {
        static void Main(string[] args)
        {
            #region
            Console.WriteLine("Enter row and cell of matrix");
            int Row = Convert.ToInt32(Console.ReadLine());
            int Cell = Convert.ToInt32(Console.ReadLine());

            int[,] Matrix = new int[Row, Cell];

            InputMatrix(Matrix);
          
            Console.WriteLine("Your matrix is: ");
            printMatrix(Matrix);

            #endregion

            #region
            int Positive = getPositveNumberCount(Matrix);
            Console.WriteLine("There are {0} positive numbers.", Positive);
            #endregion

            #region
            int max = getMax(Matrix);
            Console.WriteLine("Max number is " + max);
            #endregion

            #region
            int sum = getSum(Matrix);
            Console.Write("Sum of matrix's boundary line is: " + sum);
            #endregion

            #region
            Console.WriteLine("\nEnter row and cell number: ");
            int r = Convert.ToInt32(Console.ReadLine());
            int c = Convert.ToInt32(Console.ReadLine());

            int s1 = getTargetSumRow(Matrix, r);
            int s2 = getTargetSumCell(Matrix, c);
            Console.WriteLine("Row: {0}, Cell : {1} have values min and max:", r, c);
            Console.WriteLine("Sum row: {0}, Sum cell: {1}", s1, s2);
            #endregion

            #region                   
            int MinX = getTargetMaxRow(Matrix, r);
            int MaxY = getTargetMaxCell(Matrix, c);     
            Console.WriteLine("Min row: {0}, Max cell: {1}", MinX, MaxY);
            #endregion

            #region
            int u = Convert.ToInt32(Console.ReadLine());
            int[,] b = otherRotate(Matrix, Row, Cell, u);
            printMatrix(b);
            #endregion
            Console.ReadKey();
        }


        static int[,] InputMatrix(int[,]Matrix)
        {
            for (int i = 0; i < Matrix.GetLength(0); i++)
            {
                for (int j = 0; j < Matrix.GetLength(1); j++)
                {
                    Console.Write("Enter part of matrix [{0}] [{1}]: ", i, j);
                    Matrix[i, j] = int.Parse(Console.ReadLine());
                }
            }
            return Matrix;
        }

        static void printMatrix(int[,] Matrix)
        {
            for (int i = 0; i < Matrix.GetLength(0); i++)
            {
                for (int j = 0; j < Matrix.GetLength(1); j++)
                {
                    Console.Write(Matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
        }

        static int getPositveNumberCount(int[,] Matrix)
        {
            int a = 0;
            foreach (int item in Matrix)
            {
                if (item > 0) { a++; }
                else { };
            }
            return a;
        }

        static int getMax(int[,] Matrix)
        {
            int max = Matrix[0, 0];
            for (int i = 0; i < Matrix.GetLength(0); i++)
            {
                for (int j = 0; j < Matrix.GetLength(1); j++)
                {
                    if (Matrix[i, j] > max)
                    {
                        max = Matrix[i, j];
                    }
                }
            }
            return max;
        }

        static int getSum(int[,] Matrix)
        {
            int s = 0;

            for (int j = 0; j < Matrix.GetLength(1); j++)
            {
                s += Matrix[0, j];
            }
            for (int i = 1; i < Matrix.GetLength(0); i++)
            {
                s += Matrix[i, 0];
            }
            for (int j = 1; j < Matrix.GetLength(1); j++)
            {
                s += Matrix[Matrix.GetLength(0) - 1, j];
            }
            for (int i = 1; i < Matrix.GetLength(0) - 1; i++)
            {
                s += Matrix[i, Matrix.GetLength(1) - 1];
            }
            return s;
        }

        static int getTargetSumRow(int[,] Matrix, int r)
        {
            int s1 = 0;
            for (int j = 0; j < Matrix.GetLength(1); j++)
            {
                s1 = s1 + Matrix[r, j];
            }
            return s1;
        }

        static int getTargetSumCell(int[,] Matrix, int c)
        {
            int s2 = 0;
            for (int i = 0; i < Matrix.GetLength(0); i++)
            {
                s2 = s2 + Matrix[i, c];
            }
            return s2;
        }

        static int getTargetMaxRow(int[,] Matrix, int r)
        {
            int MinX = Matrix[r, 0];

            for (int j = 1; j < Matrix.GetLength(1); j++)
            {
                if (Matrix[r, j] < MinX)
                {
                    MinX = Matrix[r, j];
                }
            }
            return MinX;
        }

        static int getTargetMaxCell(int[,] Matrix, int c)
        {
            int MaxY = Matrix[0, c];

            for (int i = 0; i < Matrix.GetLength(1); i++)
            {
                if (Matrix[i, c] > MaxY)
                {
                    MaxY = Matrix[i, c];
                }
            }
            return MaxY;
        }

        static int[,] RotateMatrix(int[,] Matrix, int Row, int Cell)
        {
            int[,] ret = new int[Row, Cell];
            for (int i = 0; i < Row; i++)
            {
                for (int j = 0; j < Cell; j++)
                {
                    ret[i, j] = Matrix[Row - j - 1, i];
                }
            }
            return ret;
        }

        static int[,] otherRotate(int[,] Matrix, int Row, int Cell, int u)
        {
            int n = 0;

            int[,] b = Matrix.Clone() as int[,];
            while (n < u)
            {
                b = RotateMatrix(b, Row, Cell).Clone() as int[,];
                n++;
            }
            return b;
        }
    }
}
