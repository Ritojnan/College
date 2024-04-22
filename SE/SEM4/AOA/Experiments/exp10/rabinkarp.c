// RabinKarp

#include <stdio.h>
#include <string.h>

int djb2(char *str)
{
    unsigned long hash = 5381;
    int c;
    while ((c = *str++))
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
    return hash;
}

int rabinKarp(char *str, char *pat, int q)
{
    int M = strlen(pat);
    int N = strlen(str);
    int i, j;
    int p = 0;
    int t = 0;
    int h = 1;

    for (i = 0; i < M - 1; i++)
        h = (h * q);

    for (i = 0; i < M; i++)
    {
        p = (p * q + pat[i]);
        t = (t * q + str[i]);
    }

    for (i = 0; i <= N - M; i++)
    {
        if (p == t)
        {
            for (j = 0; j < M; j++)
            {
                if (str[i + j] != pat[j])
                    break;
            }

            if (j == M)
                printf("Pattern found at index %d \n", i);
        }

        if (i < N - M)
            t = (t - str[i] * h) * q + str[i + M];
    }

    return 0;
}

int main()
{
    char str[] = "GEEKS FOR GEEKS";
    char pat[] = "GEEK";
    int q = 101;
    rabinKarp(str, pat, q);
    return 0;
}
