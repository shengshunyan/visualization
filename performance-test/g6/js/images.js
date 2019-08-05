const data = {
    nodes: [],
    edges: [],
}

for (let i = 0; i < NODES; i++) {
    data.nodes.push({
        id: `node_${i}`,
        shape: 'image',
        img: '../../imgs/cat.jpg',
    })

    if ( i > 0) {
        data.edges.push({
            source: `node_${i}`,
            target: `node_${Math.round(Math.random() * (i - 1))}`,
            value: 10,
        })
    }
}

console.log(`node ${NODES}, edges ${NODES - 1}`)