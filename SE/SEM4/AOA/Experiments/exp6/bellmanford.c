// BellmanFord Algorithm
// Time Complexity: O(VE)
// Space Complexity: O(V)

#include <stdio.h>
#include <limits.h>

#define INF 99999
#define V 5

void bellmanFord(int graph[V][V], int src)
{
    int dist[V];

    for (int i = 0; i < V; i++)
        dist[i] = INF;
    dist[src] = 0;

    for (int i = 0; i < V - 1; i++)
        for (int j = 0; j < V; j++)
            for (int k = 0; k < V; k++)
                if (dist[k] > dist[j] + graph[j][k])
                    dist[k] = dist[j] + graph[j][k];

    for (int i = 0; i < V; i++)
        for (int j = 0; j < V; j++)
            if (dist[j] > dist[i] + graph[i][j])
                printf("Graph contains negative weight cycle\n");

    printf("Vertex Distance from Source\n");
    for (int i = 0; i < V; i++)
        printf("%d \t\t %d\n", i, dist[i]);
}

int main()
{
    int graph[V][V] = {{0, 3, INF, 5},
                       {2, 0, INF, 4},
                       {INF, 1, 0, INF},
                       {INF, INF, 2, 0}};

    bellmanFord(graph, 0);

    return 0;
}