import React, { useEffect } from 'react';
import { Network } from 'vis-network/standalone/esm/vis-network';
import 'vis-network/styles/vis-network.css';

export default function GraphVisualization({ adjacencyList }: any) {
    useEffect(() => {
        const nodes = Object.keys(adjacencyList).map(node => ({ id: node, label: node }));
        const edges: any[] = [];
        for (const [node, neighbors] of Object.entries(adjacencyList)) {
            //@ts-ignore
            neighbors.forEach(neighbor => edges.push({ from: node, to: neighbor }));
        }

        const container = document.getElementById('graph');
        if (container) {
            const data = { nodes, edges };
            const options = {};
            const network = new Network(container, data, options);

            return () => {
                network.destroy();
            };
        }
    }, [adjacencyList]);

    return (
        <>
            <div id="graph" style={{ height: '500px' }}></div>
            <div>Adjacency list {JSON.stringify(adjacencyList)}</div>
        </>
    );
};
