const data = []
for (var i = 0; i < NODES; i++) {
    data.push({
        "data": {
            "id": i,
            "weight": 1
        },
        "position": {},
        "group": "nodes",
        "removed": false,
        "selected": false,
        "selectable": true,
        "locked": false,
        "grabbed": false,
        "grabbable": true,
        "classes": ""
    })

    if (i > 0) {
        data.push({
            "data": {
                "id": `e${i}`,
                "weight": 1,
                "source": i,
                "target": Math.round(Math.random() * (i - 1))
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbed": false,
            "grabbable": true,
            "classes": ""
        })
    }
}

console.log(`rend node ${NODES}, edge ${NODES - 1}`)