import React, { useState } from "react";
import { graphAdjacencyObj } from "../utils/data/graphAdjacencyObj";
import { IGraph } from "../utils/interfaces/GraphType";
import 'vis-network/styles/vis-network.css';
import GraphVisualization from "./GraphVisualization ";

export default function Algorithms() {
    const [graph, setGraph] = useState<IGraph>(graphAdjacencyObj);

    const bfs = (start: number): void => {
        const queue: number[] = [start];
        const visited: Set<number> = new Set([start]);

        while (queue.length > 0) {
            const current: number = queue.shift()!;
            console.log(current);

            if (graph[current]) {
                for (const neighbor of graph[current]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
    };

    const dfs = (start: number, visited: Set<number> = new Set()): void => {
        if (!visited.has(start)) {
            console.log(start);
            visited.add(start);

            if (graph[start]) {
                for (const neighbor of graph[start]) {
                    dfs(neighbor, visited);
                }
            }
        }
    };

    return (
        <div>
            <h2>Algorithms</h2>
            <h2>Graph</h2>
            <GraphVisualization adjacencyList={graph}/>
            <hr />
            <button onClick={() => dfs(1)}>DFS, Node 1</button>
            <hr />
            <button onClick={() => bfs(1)}>BFS, Node 1</button>
        </div>
    );
};
