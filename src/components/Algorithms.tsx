import React, { useState } from "react";
import { graphAdjacencyObj } from "../utils/data/graphAdjacencyObj";
import { IGraph } from "../utils/interfaces/GraphType";
import 'vis-network/styles/vis-network.css';
import GraphVisualization from "./GraphVisualization ";

// TODO: add tailwind support so that you can review and revise on mobile
// TODO: find and solve FE tasks masked as dfs/bfs (this is what is given at interviews)
export default function Algorithms() {
    const [graph, setGraph] = useState<IGraph>(graphAdjacencyObj);
    // TODO: expose the current code for the methods on the website and then deploy this on netlify

    // TODO: keep the code short and try to minize the number of printed dfs results - the algorithm should print out the result once
    const dfs = (node: number, visited: Set<number> = new Set()): any => {
        if (visited.has(node)) return;
        visited.add(node);
        graph[node]?.forEach(neighbor => dfs(neighbor, visited));
        // TODO: get rid of the bug where it's called three times (so that you can translate it to problems)
        visited.size === Object.keys(graph).length && console.log('dfs: ', visited); 
    }

    // TODO: get rid of the initial queue arr and replace with the node number
    const bfs = (queue: number[], visited: Set<number> = new Set()): void => {
        if (queue.length === 0) {
            console.log('bfs: ', visited);
            return;
        };
        const current = queue.shift()!;
        graph[current]?.forEach(neighbor => {
            if (visited.has(neighbor)) return;
            visited.add(neighbor);
            queue.push(neighbor);
        });
        bfs(queue, visited);
    };

    // helpers
    const clearGraph = () => {
        setGraph({});
    }

    return (
        <div>
            <h2>Algorithms</h2>
            <h2>Graph</h2>
            <GraphVisualization adjacencyList={graph} />
            <hr />
            <button onClick={() => dfs(1)}>DFS</button>
            <hr />
            <button onClick={() => bfs([1])}>BFS</button>
            <hr />
            <hr />
            <button onClick={() => clearGraph()}>Clear Graph</button>
        </div>
    );
};
