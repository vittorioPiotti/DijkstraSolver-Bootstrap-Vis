
 const ELIMINA = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="color: red;" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>'
 const CREA = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="color: green;font-size:20px;" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg> '
 const MODIFICA = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>'
 const INFINITY = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-infinity" viewBox="0 0 16 16"><path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"/></svg>'
 const ARROW_FORK = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-expand" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z"/></svg>'
 const ARROW_REVERSE = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg>'
 const ARROW_CHANGE = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>'

var nodes, edges, network, clickedNodeId = null,
clickedNodeLabel = "",
labels = {};
var X;
var Y;
var Edges;
var Nodes;
const nodeDefaultColor = 'rgb(0, 140, 255)'
for (let i = 65; i <= 90; i++)
{
labels[String.fromCharCode(i)] = {
    used: false
};
}

function getNextNode()
{
for (const letter in labels)
{
    if (!labels[letter].used)
    {
    return letter;
    }
}
return null;
}
class Node
{
static lastId = 0;
constructor(newId, newLabel)
{
    if (newId != null)
    {
    Node.lastId = newId;
    var newLabel = newLabel.replace(/\s/g, "");
    labels[newLabel].used = true;
    return {
        id: newId,
        label: ' ' + newLabel + ' ',
        shape: 'circle',
    };
    }
    else
    {
    Node.lastId++;
    const label = getNextNode();
    labels[label].used = true;
    const id = Node.lastId.toString();
    return {
        id: id,
        label: ' ' + label + ' ',
        shape: 'circle',
    };
    }
}
}
class Edge
{
static lastId = 0;
constructor(from, to, label, newId)
{
    if (newId != null)
    {
    Edge.lastId = newId;
    }
    else
    {
    Edge.lastId++;
    }
    const id = Edge.lastId;
    return {
    id: id,
    from: from,
    to: to,
    label: ' ' + label + ' ',
    arrows:
    {
        to: false,
        from: false
    }
    }
}
}
// convenience method to stringify a JSON object
function toJSON(obj)
{
return JSON.stringify(obj, null, 4);
}

function addNode()
{
nodes.add([
    new Node(),
]);
if (nodes.length >= 2)
{
    document.getElementById("inizio").disabled = false;
    document.getElementById("arrivo").disabled = false;
}
else
{
    document.getElementById("inizio").disabled = true;
    document.getElementById("arrivo").disabled = true;
}
newDiv.style.display = "none";
gestioneInputNodi();
}

function removeNode()
{
newDiv.style.display = "none";
const key = clickedNodeLabel.trim().charCodeAt(0);
labels[String.fromCharCode(key)].used = false;
// Rimuovi tutti gli archi con from e to uguale a id
edges.forEach(function(edge)
{
    if (edge.from == clickedNodeId || edge.to == clickedNodeId)
    {
    edges.remove(
    {
        id: edge.id
    })
    }
});
// Rimuovi il nodo con id specificato
nodes.remove(
{
    id: clickedNodeId
})
if (nodes.length < 2)
{
    document.getElementById("inizio").disabled = true;
    document.getElementById("arrivo").disabled = true;
}
clickedNodeId = null;
gestioneInputNodi();
}

function addEdge()
{
try
{
    edges.add(
    {
    id: document.getElementById('edge-id').value,
    from: document.getElementById('edge-from').value,
    to: document.getElementById('edge-to').value
    });
}
catch (err)
{
    alert(err);
}
}

function updateEdge()
{
try
{
    edges.update(
    {
    id: document.getElementById('edge-id').value,
    from: document.getElementById('edge-from').value,
    to: document.getElementById('edge-to').value
    });
}
catch (err)
{
    alert(err);
}
}

function removeEdge()
{
try
{
    edges.remove(
    {
    id: document.getElementById('edge-id').value
    });
}
catch (err)
{
    alert(err);
}
}
let init = true;

function draw()
{
for (let i = 65; i <= 90; i++)
{
    labels[String.fromCharCode(i)] = {
    used: false
    };
}
// create an array with nodes
nodes = new vis.DataSet();
nodes.on('*', function()
{
    Nodes = JSON.stringify(nodes.get().map(function(node)
    {
    return {
        id: node.id,
        label: node.label
    };
    }), null, 4);
});
if (init == true)
{
    nodes.add([
    new Node(),
    new Node(),
    new Node(),
    new Node(),
    ]);
}
// create an array with edges
edges = new vis.DataSet();
edges.on('*', function()
{
    Edges = JSON.stringify(edges.get().map(function(edge)
    {
    var arrows = edge.arrows ? edge.arrows :
    {
        to: false
    }; // Imposta le frecce a false se non sono presenti
    return {
        id: edge.id,
        from: edge.from,
        to: edge.to,
        label: edge.label,
        arrowTo: arrows.to,
        arrowFrom: arrows.from
    };
    }), null, 4);
});
if (init == true)
{
    edges.add([
    new Edge(1, 2, 2),
    new Edge(2, 4, 1),
    new Edge(3, 2, 1),
    new Edge(4, 1, 1),
    new Edge(1, 3, 1),
    ]);
}
// create a network
var container = document.getElementById('network');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    nodes:
    {
    font:
    {
        color: 'rgb(255,255,255)',
        size: 20
    },
    color:
    {
        background: nodeDefaultColor,
        border: 'rgb(0, 140, 255)'
    },
    size: 30,
    chosen: true,
    },
    edges:
    {
    selectionWidth: 4,
    arrowStrikethrough: false,
    smooth: false,
    font:
    {
        background: 'rgb(255,255,255)',
        size: 20
    },
    width: 2,
    chosen: false,
    color:
    {
        inherit: false
    }
    },
    physics:
    {
    barnesHut:
    {
        gravitationalConstant: -10000,
        centralGravity: 0.5,
        springLength: 100,
        damping: 0.5,
        avoidOverlap: 5
    }
    }
};
network = new vis.Network(container, data, options);
network.on('click', function(params)
{
    if (params.nodes.length > 0)
    {
    clickedNodeId = params.nodes[0];
    clickedNodeLabel = network.body.nodes[clickedNodeId].options.label;
    }
});
if (nodes.length < 2)
{
    document.getElementById("inizio").disabled = true;
    document.getElementById("arrivo").disabled = true;
}
network.on("doubleClick", function(params)
{
    var x = event.clientX;
    var y = event.clientY;
    X = x;
    Y = y;
    if (document.body.contains(oneDiv)) document.body.removeChild(oneDiv);
    resettaColoreNodi();
    let x2, y2;
    if (params.nodes.length > 0)
    {
    x2 = 25;
    y2 = 25
    }
    else if (params.edges.length > 0)
    {
    x2 = 40;
    y2 = 40
    }
    else
    {
    x2 = 15;
    y2 = 15
    }
    newDiv.style.left = (x + x2) + "px"
    newDiv.style.top = (y - y2) + "px"
    newDiv.style.display = "block";
    // mostro il nuovo div
    if (params.nodes.length > 0)
    {
    STARTNODE = params.nodes[0]
    // Double click on an edge
    /*
    const nodeOptions = new bootstrap.Modal(document.getElementById("nodeOptions"));
    nodeOptions.show();
    */
    clickedNodeId = params.nodes[0];
    // mostro il nuovo div
    newDiv.style.display = "block";
    let htmlString = '<button onclick="removeNode()"  class="btn btn-light border rounded-1 rounded-end-0 border-end-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + ELIMINA + '</button>' + '<button onclick="creaEdge()" class="btn btn-light border rounded-1 rounded-start-0 border-start-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + CREA + '</button>'
    newDiv.innerHTML = htmlString;
    }
    else if (params.edges.length > 0)
    {
    // Double click on an edge
    var arco = edges.get(idArcoSelezionato);
    // mostro il nuovo div
    newDiv.style.display = "block";
    let forked = 1;
    edges.forEach(function(edge)
    {
        if (edge.id != idArcoSelezionato && ((arco.to == edge.to && arco.from == edge.from) || (arco.from == edge.to && arco.to == edge.from)))
        {
        forked = 0;
        }
    })
    let htmlString;
    switch (forked)
    {
        case 0:
        htmlString = '<div class="col">' + '<button onclick="rimuoviArco()"  class="btn btn-light border rounded-1 rounded-end-0 border-end-0 rounded-bottom-0 border-bottom-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + ELIMINA + '</button>' + '<button onclick="modificaArco()" class="btn btn-light border rounded-1 rounded-start-0 rounded-bottom-0 border-start-0 border-bottom-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + MODIFICA + '</button>' + '</div>' + '<div class="col">' + '<button onclick="orientaReverse()"  id="orientaReverse" class="btn btn-light border rounded-1  rounded-top-0 border-top-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;width:66px;">' + ARROW_REVERSE + '</button>' + '</div>'
        break;
        case 1:
        htmlString = '<div class="col">' + '<button onclick="rimuoviArco()"  class="btn btn-light border rounded-1 rounded-end-0 border-end-0 rounded-bottom-0 border-bottom-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + ELIMINA + '</button>' + '<button onclick="modificaArco()" class="btn btn-light border rounded-1 rounded-start-0 rounded-bottom-0 border-start-0 border-bottom-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + MODIFICA + '</button>' + '</div>' + '<div class="col">' + '<button onclick="orienta()"  id="orienta" class="btn btn-light border rounded-1  rounded-top-0 border-top-0 rounded-end-0 border-end-0  btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + ARROW_CHANGE + '</button>' + '<button onclick="forkArrow()"  id="forkArrow" class="btn btn-light border rounded-1  rounded-start-0 border-start-0 rounded-top-0 border-top-0 btnOptions" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + ARROW_FORK + '</button>' + '</div>'
        break;
    }
    newDiv.innerHTML = htmlString;
    /*
    const edgeOptions = new bootstrap.Modal(document.getElementById("edgeOptions"));
    edgeOptions.show();
    */
    }
    else
    {
    var x = event.clientX;
    newDiv.style.display = "block";
    let htmlString = '<button onclick="addNode()"  class="btn btn-light border rounded-1  btnOptions"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">' + CREA + '</button>';
    newDiv.innerHTML = htmlString;
    }
    document.body.appendChild(newDiv);
    document.addEventListener("click", function(event)
    {
    if (!newDiv.contains(event.target))
    {
        newDiv.style.display = "block";
        document.addEventListener("click", function(event)
        {
        if (!newDiv.contains(event.target))
        {
            newDiv.style.display = "none";
        }
        });
    }
    });
});
var close = null;
network.on("select", function(params)
{
    var selectedNodeIds = params.nodes;
    if (selectedNodeIds.length > 0)
    {
    // selezionato solo il nodo, deseleziona gli archi
    var edgeIds = edges.getIds();
    for (var i = 0; i < edgeIds.length; i++)
    {
        var edge = edges.get(edgeIds[i]);
        edge.width = options.edges.width;
        edges.update(edge);
        if (STARTNODE == params.nodes[0] && nuovoArco == true) nuovoArco = false;
    }
    }
    else
    {
    // selezionato solo l'arco
    var selectedEdgeId = params.edges[0];
    var edge = edges.get(selectedEdgeId);
    edge.width = options.edges.selectionWidth;
    edges.update(edge);
    }
});
network.on("deselectNode", function(params)
{
    var selectedEdgeId = params.previousSelection.edges[0];
    var edge = edges.get(selectedEdgeId);
    edge.width = options.edges.width;
    edges.update(edge);
});
network.on("selectEdge", function(params)
{
    var selectedEdgeId = params.edges[0];
    var edge = edges.get(selectedEdgeId);
    edge.width = options.edges.selectionWidth;
    edges.update(edge);
    idArcoSelezionato = selectedEdgeId;
});
network.on("deselectEdge", function(params)
{
    var selectedEdgeId = params.previousSelection.edges[0];
    var edge = edges.get(selectedEdgeId);
    edge.width = options.edges.width;
    edges.update(edge);
});
gestioneInputNodi();
init = false;
}
let versoArco = {};

function orienta()
{
if (versoArco[idArcoSelezionato] == null) versoArco[idArcoSelezionato] = 0;
if (edges.get(idArcoSelezionato).arrows.to == true)
{
    versoArco[idArcoSelezionato] = 2;
}
else if (edges.get(idArcoSelezionato).arrows.from == true)
{
    versoArco[idArcoSelezionato] = 3;
}
else versoArco[idArcoSelezionato]++;
switch (versoArco[idArcoSelezionato])
{
    case 1:
    edges.update(
    {
        id: idArcoSelezionato,
        arrows:
        {
        to: true,
        from: false
        }
    })
    break;
    case 2:
    edges.update(
    {
        id: idArcoSelezionato,
        arrows:
        {
        to: false,
        from: true
        }
    })
    break;
    case 3:
    edges.update(
    {
        id: idArcoSelezionato,
        arrows:
        {
        to: false,
        from: false
        }
    })
    versoArco[idArcoSelezionato] = 0;
    break;
}
}

function orientaReverse()
{
let id = idArcoAssociato(idArcoSelezionato);
if (edges.get(idArcoSelezionato).arrows.to == true)
{
    edges.update(
    {
    id: idArcoSelezionato,
    arrows:
    {
        to: false,
        from: true
    }
    })
    edges.update(
    {
    id: id,
    arrows:
    {
        to: true,
        from: false
    }
    })
}
else if (edges.get(idArcoSelezionato).arrows.from == true)
{
    edges.update(
    {
    id: idArcoSelezionato,
    arrows:
    {
        to: true,
        from: false
    }
    })
    edges.update(
    {
    id: id,
    arrows:
    {
        to: false,
        from: true
    }
    })
}
}

function forkArrow()
{
newDiv.style.display = "none";
edges.update(
{
    id: idArcoSelezionato,
    smooth: true
});
var arco = edges.get(idArcoSelezionato);
arco.smooth = true;
edges.update(arco);
let label = arco.label.replace(/\s/g, "");
edges.add([
    new Edge(arco.from, arco.to, label),
])
var id = idArcoAssociato(idArcoSelezionato);
var arco2 = edges.get(id);
arco2.smooth = true;
edges.update(arco2);
let verso
if (edges.get(idArcoSelezionato).arrows.to == false && edges.get(idArcoSelezionato).arrows.from == false)
{
    verso = parseInt(Math.random() * 2)
    if (verso == 0)
    {
    edges.update(
    {
        id: idArcoSelezionato,
        arrows:
        {
        to: true,
        from: false
        }
    })
    edges.update(
    {
        id: id,
        arrows:
        {
        to: false,
        from: true
        }
    })
    }
    else
    {
    edges.update(
    {
        id: idArcoSelezionato,
        arrows:
        {
        to: false,
        from: true
        }
    })
    edges.update(
    {
        id: id,
        arrows:
        {
        to: true,
        from: false
        }
    })
    }
}
else if (edges.get(idArcoSelezionato).arrows.to == true)
{
    edges.update(
    {
    id: id,
    arrows:
    {
        to: false,
        from: true
    }
    })
}
else
{
    edges.update(
    {
    id: id,
    arrows:
    {
        to: true,
        from: false
    }
    })
}
}

function idArcoAssociato(arcoSelezionato)
{
var arco = edges.get(arcoSelezionato);
let id = null;
edges.forEach(function(edge)
{
    if (edge.id != arcoSelezionato && ((arco.to == edge.to && arco.from == edge.from) || (arco.from == edge.to && arco.to == edge.from)))
    {
    id = edge.id;
    }
});
return id;
}
var newDiv = document.createElement("div");
newDiv.style.position = "absolute"
var oneDiv = document.createElement("div");
oneDiv.style.position = "absolute"
let oldOptionArrivo;
let newOptionArrivo;
let indexArrivo;
let indexInizio;
let oldOptionInizio;
let newOptionInizio;

function gestioneInputNodi()
{
document.getElementById("inizio").innerHTML = initInputNodi();
document.getElementById("arrivo").innerHTML = initInputNodi();
const inputArrivo = document.getElementById('arrivo');
const valueArrivo = inputArrivo.value;
const inputInizio = document.getElementById('inizio');
const valueInizio = inputInizio.value;
newOptionInizio = valueInizio;
newOptionArrivo = valueArrivo;
if (valueInizio == valueArrivo)
{
    inputArrivo.selectedIndex = 1;
    newOptionArrivo = inputArrivo.value;
}
indexInizio = inputInizio.selectedIndex;
indexArrivo = inputArrivo.selectedIndex;
start = inputInizio.value;
end = inputArrivo.value
inputArrivo.addEventListener("change", function()
{
    oldOptionArrivo = newOptionArrivo;
    // Aggiornamento opzione selezionata attualmente
    newOptionArrivo = this.options[this.selectedIndex].value;
    if (newOptionInizio == newOptionArrivo)
    {
    inputInizio.selectedIndex = indexArrivo;
    newOptionInizio = inputInizio.value;
    }
    indexInizio = inputInizio.selectedIndex;
    indexArrivo = inputArrivo.selectedIndex;
    start = inputInizio.value;
    end = inputArrivo.value
});
inputInizio.addEventListener("change", function()
{
    oldOptionInizio = newOptionInizio;
    // Aggiornamento opzione selezionata attualmente
    newOptionInizio = this.options[this.selectedIndex].value;
    if (newOptionInizio == newOptionArrivo)
    {
    inputArrivo.selectedIndex = indexInizio;
    newOptionArrivo = inputArrivo.value;
    }
    indexInizio = inputInizio.selectedIndex;
    indexArrivo = inputArrivo.selectedIndex;
    start = inputInizio.value;
    end = inputArrivo.value
});
}

function initInputNodi()
{
let input = "";
let selected = "selected";
if (nodes.length >= 2)
{
    document.getElementById("inizio").disabled = false;
    document.getElementById("arrivo").disabled = false;
}
else
{
    document.getElementById("inizio").disabled = true;
    document.getElementById("arrivo").disabled = true;
}
nodes.forEach(function(node)
{
    input += "<option " + selected + " value='" + node.id + "'>" + node.label + "</option>"
    selected = "";
})
return input;
}

function creaEdge()
{
nuovoArco = true;
var startNode = clickedNodeId;
newDiv.style.display = 'none'
var nodo = nodes.get(STARTNODE);
nodo.color = "gray";
nodes.update(nodo);
edges.forEach(function(edge)
{
    var idNode = null;
    if (edge.from == STARTNODE)
    {
    idNode = edge.to;
    }
    else if (edge.to == STARTNODE)
    {
    idNode = edge.from;
    }
    else idNode = null;
    if (idNode != null)
    {
    var nodo = nodes.get(idNode);
    nodo.color = "gray";
    nodes.update(nodo);
    }
})
network.on("click", function(params)
{
    var selectedNodeIds = params.nodes;
    if (selectedNodeIds.length > 0)
    {
    var endNode = params.nodes[0];
    edges.forEach(function(edge)
    {
        if ((edge.from == STARTNODE && edge.to == endNode) || (edge.from == endNode && edge.to == STARTNODE))
        {
        nuovoArco = false;
        resettaColoreNodi();
        }
    })
    if (nuovoArco == true)
    {
        var x = event.clientX;
        var y = event.clientY;
        oneDiv.style.left = (x + 25) + "px"
        oneDiv.style.top = (y - 25) + "px"
        // mostro il nuovo div
        oneDiv.style.display = "block";
        let inputGroup = `
<div class="input-group input-group-sm" style="width: 80px;">
<input type="text" maxlength="2" id="edgeCost" class="form-control text-center">
<button onclick="edgeCost()" class="btn btn-light border font-weight-light" style="--btn-padding-y: .25rem; --btn-padding-x: .5rem; --btn-font-size: .75rem; border-radius: 0 5px 5px 0;">Ok</button>
</div>

`;
        oneDiv.innerHTML = inputGroup;
        document.body.appendChild(oneDiv);
        document.addEventListener("click", function(event)
        {
        if (!oneDiv.contains(event.target))
        {
            oneDiv.style.display = "block";
            document.addEventListener("click", function(event)
            {
            if (!oneDiv.contains(event.target))
            {
                oneDiv.style.display = "none";
            }
            });
        }
        })
    }
    }
    else
    {
    nuovoArco = false;
    resettaColoreNodi();
    oneDiv.style.display = "none";
    };
    // richiesta del valore di label per l'arco
    // resetta clickedNodeId
    ENDNODE = endNode;
    clickedNodeId = null;
});
}
var X;
var Y;
var nuovoArco = false;
var idArcoSelezionato = 0;
var STARTNODE = null;
var ENDNODE = null;

function edgeCost()
{
var inputVal = document.getElementById("edgeCost").value;
if (/^[1-9]\d*$/.test(inputVal))
{
    nuovoArco = false;
    resettaColoreNodi();
    edges.add(new Edge(STARTNODE, ENDNODE, " " + inputVal + " "));
    oneDiv.style.display = "none";
}
}

function rimuoviArco()
{
let id = idArcoAssociato(idArcoSelezionato);
edges.remove(idArcoSelezionato);
if (id != null)
{
    var arco = edges.get(id);
    arco.smooth = false;
    edges.update(arco);
}
newDiv.style.display = "none";
}

function edgeCostModifica()
{
var inputVal = document.getElementById("edgeCostModifica").value;
if (/^[1-9]\d*$/.test(inputVal) && edges.get(idArcoSelezionato).label.trim() != inputVal)
{
    edges.update(
    {
    id: idArcoSelezionato,
    label: " " + inputVal + " "
    });
    oneDiv.style.display = "none";
}
}

function modificaArco()
{
var x = X;
var y = Y;
newDiv.style.display = 'none'
oneDiv.style.left = (x + 25) + "px"
oneDiv.style.top = (y - 25) + "px"
// mostro il nuovo div
let inputGroup = `
            <div class="input-group input-group-sm" style="width: 80px;">
            <input type="text" maxlength="2" id="edgeCostModifica" class="form-control text-center">
            <button onclick="edgeCostModifica()" class="btn btn-light border font-weight-light" style="--btn-padding-y: .25rem; --btn-padding-x: .5rem; --btn-font-size: .75rem; border-radius: 0 5px 5px 0;">Ok</button>
            </div>
`;
if (document.body.contains(newDiv)) document.body.removeChild(newDiv);
oneDiv.innerHTML = inputGroup;
document.body.appendChild(oneDiv);
document.addEventListener("click", function(event)
{
    if (!oneDiv.contains(event.target))
    {
    oneDiv.style.display = "block";
    document.addEventListener("click", function(event)
    {
        if (!oneDiv.contains(event.target))
        {
        oneDiv.style.display = "none";
        }
    });
    }
})
}

function resettaColoreNodi()
{
var coloreDesiderato = nodeDefaultColor; // Colore da assegnare ai nodi
var nodi = nodes.get(); // Ottiene tutti i nodi del dataset
for (var i = 0; i < nodi.length; i++)
{
    var nodo = nodi[i];
    if (nodo.color !== coloreDesiderato)
    { // Se il colore del nodo è diverso dal colore desiderato
    nodo.color = coloreDesiderato; // Cambia il colore del nodo
    nodes.update(nodo); // Aggiorna il dataset con il nuovo colore del nodo
    }
}
}
//dijkstra
//nodo di arrivo
//nodo di partenza
//esplora nodo  meno costoso tra quelli non esplorati
//arrivo al nodo di arrivo col costo minore
//finito se costo minore con tutti i nodi
function set()
{
//direzione freccia 0.entrambe 1.from 2.to
while (nodes.length < 2) addNode();
var inxA = parseInt(Math.random() * nodes.length);
var inxB = parseInt(Math.random() * nodes.length);
while (inxB == inxA) inxB = parseInt(Math.random() * nodes.length);
var nodeA = nodeInx(inxA)
var nodeB = nodeInx(inxB)
var idA = nodeA.id;
var idB = nodeB.id;
if (edges.length == 0)
{
    var cost = parseInt(Math.random() * 99) + 1;
    edges.add([
    new Edge(idA, idB, cost),
    ])
}
var versoFreccia = parseInt(Math.random() * 3);
var app = JSON.parse(Edges);
var idEdge = app[0].id
var edge = edges.get(idEdge);
if (versoFreccia == 0)
{
    edges.update(
    {
    id: idEdge,
    arrows:
    {
        to: true
    }
    })
}
else if (versoFreccia == 1)
{
    edges.update(
    {
    id: idEdge,
    arrows:
    {
        from: true
    }
    })
}
}

function nodeInx(idA)
{
var nodeA = {};
var c = 0;
nodes.forEach(function(node)
{
    if (c == idA)
    {
    nodeA = node;
    }
    c++;
});
return nodeA
}

function load()
{


let textError = ''
let textOne = (2 - nodes.length);
let textTwo = (1 - edges.length);
if (nodes.length < 2) textOne = 'nodes ( ' + (2 - nodes.length) + ' )';
else textOne = ' '
if (edges.length == 0) textTwo = 'edges ( ' + (1 - edges.length) + ' )';
else textTwo = ' '
textError = 'Please enter ' + textOne + ' ' + textTwo;
document.getElementById("textError").innerHTML = textError;
let button = '<button class="btn btn-info text-white pe-3 ps-3 p-1 fw-ligh float-end" data-bs-target="#errore" data-bs-toggle="modal">OK</button>' + '<button class="btn btn-secondary text-white pe-3 ps-3 p-1 me-3 fw-ligh float-end" data-bs-target="#errore"onclick="set()" data-bs-toggle="modal">SET</button>'
document.getElementById("buttonModal").innerHTML = button;
const modalError = new bootstrap.Modal(document.getElementById("errore"));
if (nodes.length < 2 || edges.length == 0) modalError.show()
else
{
    flagEdges = false;
    flagNodes = false;
    tabellaAppoggio = {};
    nodiCollegati = {}
    nodes.forEach(function(node)
    {
    tabellaAppoggio[node.id] = {
        cost: Infinity,
        prec: null,
        used: false
    }
    })
    tabellaAppoggio[start].cost = 0;
    nodes.forEach(function(node)
    {
    nodiCollegati[node.id] = {};
    });
    edges.forEach(function(edge)
    {
    let flag = false;
    label = parseInt(edge.label.replace(/\s/g, ''))
    if (edge.arrows.from == false && edge.arrows.to == false)
    {
        nodiCollegati[edge.to][edge.from] = label;
        nodiCollegati[edge.from][edge.to] = label;
    }
    else if (edge.arrows.from == true)
    {
        nodiCollegati[edge.to][edge.from] = label;
    }
    else
    {
        nodiCollegati[edge.from][edge.to] = label;
    }
    });
    // dijkstra();
    Dijkstra();
    choice = percorsi - 1;
    document.getElementById("output").innerHTML = risultato();
}
}
//nodo di partenza e nodo di arrivo
//smette di iterare quando raggiunto nodo di arrivo ed esplorati nodi adiacenti
//ricerca nodo costo minore non esplorato 
//  setta come nodo esplorato
//  aggiorna tabellaAppoggio con 
//      for nodicollegati[nodoA] 
//          if ( nodicollegati[nodoA][nodoB] + tabellaAppoggio[nodoA].cost <  tabellaAppoggio[nodoB].cost)
//              => tabellaAppoggio[nodoB].cost = nodicollegati[nodoA][nodoB] + tabellaAppoggio[nodoA].cost;
//              tabellaAppoggio[nodoB].prec = nodoA;
//          
//  
function eliminaDoppi()
{
let c = 0;
if (percorsi > 1)
{
    for (let i = 0; i < percorsi; i++)
    {
    for (let j = 0; j < percorsi; j++)
    {
        if (i != j && percorso[i].length == percorso[j].length)
        {
        c = 0;
        for (let k = 0; k < percorso[i].length; k++)
        {
            if (percorso[i][k] == percorso[j][k]) c++;
        }
        if (c == percorso[i].length)
        {
            percorso.splice(j, 1);
            tab.splice(j, 1);
            percorsi--;
        }
        }
    }
    }
}
}
let flagNodes = false;
let flagEdges = false;
let choice = 0;
function risultato()
{


eliminaDoppi();
eliminaDoppi();
if (choice >= percorsi) choice = percorsi - 1;
var risultatoTot = "";
var risultato = "";
var risultatoDue = "";
risultato += '<div class="text-center p-2 fw-semibold fs-6">'
risultato += 'Routing Table'
risultato += '</div>'
risultato += '<div style="display: flex; justify-content: center; align-items: center;">'
if (percorso[choice].length == 1)
{
    nodes.forEach(function(node)
    {
    if (node.id == start)
    {
        risultato += '<div class="percorso fw-light" style="width:40px;height:40px;display: flex; justify-content: center; align-items: center; background-color:   #edf4ff;border-style:solid;border-width:1px;border-color:#8ba4fb;">'
        risultato += node.label;
        risultato += '</div>'
    }
    })
    nodes.forEach(function(node)
    {
    if (node.id == end)
    {
        risultato += '<div class="percorso fw-light" style="width:40px;height:40px;display: flex; justify-content: center; align-items: center; background-color:   #edf4ff;border-style:solid;border-width:1px;border-color:#8ba4fb;">'
        risultato += node.label;
        risultato += '</div>'
    }
    })
}
else
{
    for (let i = percorso[choice].length; i >= 0; i--)
    {
    nodes.forEach(function(node)
    {
        if (node.id == percorso[choice][i])
        {
        risultato += '<div class="percorso fw-light" style="width:40px;height:40px;display: flex; justify-content: center; align-items: center; background-color:   #edf4ff;border-style:solid;border-width:1px;border-color:#8ba4fb;">'
        risultato += node.label;
        risultato += '</div>'
        }
    });
    }
}
risultato += '</div>'
risultato += '<div style="display: flex; justify-content: center; align-items: center;">'
let spesa = 0;
let width = 40
for (let i = percorso[choice].length - 1; i >= 0; i--)
{
    if (percorso[choice].length == 1) width = 80;
    risultato += '<div class="fw-light" style="width:' + width + 'px;height:20px;display: flex; justify-content: center; align-items: center; ">'
    if (percorso[choice].length == 1) risultato += INFINITY
    else risultato += spesa;
    spesa += nodiCollegati[percorso[choice][i]][percorso[choice][i - 1]]
    risultato += '</div>'
}
risultato += '</div>'
risultatoTot += risultato;
var table = '    <div class=" mt-3" style="width:350px;">   <table class="table  text-start  table-bordered    rounded">';
table += "<thead class='table-light'>"
table += "<tr class=''>"
table += "<td >Nodo</td>"
table += "<td >Precedente</td>"
table += "<td >Costo</td>"
table += " </tr>"
table += "</thead>"
table += "<tbody class='fw-light'>"
for (let idNodo in tab[choice])
{
    table += "<tr>"
    table += "<td >"
    nodes.forEach(function(node)
    {
    if (node.id == idNodo)
    {
        table += node.label;
    }
    });
    table += "</td>"
    table += "<td >"
    nodes.forEach(function(node)
    {
    if (node.id == tab[choice][idNodo].prec)
    {
        table += node.label;
    }
    });
    table += "</td>";
    table += "<td >"
    let app = INFINITY;
    if (tab[choice][idNodo].cost != Infinity) app = tab[choice][idNodo].cost;
    table += app;
    table += "</td>";
    table += "</tr>"
}
let spesaTot = costoPercorso;
if (costoPercorso == 0) spesaTot = INFINITY;
table += "<tr >"
table += "<td colspan='2' class='  text-end'>Costo percorso</td>"
table += "<td class='  text-start'>" + spesaTot + "</td>"
table += " </tr>"
table += "</tbody>"
table += "</table></div>"
risultatoDue += '<div style="display: flex; justify-content: center; align-items: center;">'
risultatoDue += table;
risultatoDue += '</div>'
risultatoTot += risultatoDue;
var risultatoTre = "";
if (percorsi > 1 && costoPercorso != 0)
{
    risultatoTre += "<div class='d-flex justify-content-center' style='width:100%;'>"
    risultatoTre += '        <div class="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:350px;">'
    let border = " border-light border-5 border-end"
    for (let i = percorsi - 1; i >= 0; i--)
    {
    if (i == 0) border = "";
    if (i == choice) risultatoTre += '<div class=" progress-bar ' + border + '" style="width: ' + (100 / percorsi) + '%"></div>'
    else risultatoTre += '<div style="width:' + (100 / percorsi) + '%" class="pointer ' + border + '" onclick="changeChoice(' + i + ')"></div>'
    }
    risultatoTre += '</div>'
    risultatoTre += '</div>'
}
risultatoTot += risultatoTre
return risultatoTot;
}
let scelta = 0;

function changeChoice(newChoice)
{

    choice = newChoice;

let appNodes = nodes;
let appEdges = edges;
if(flagNodes == true){
    nodes = JSON.parse(NodesApp);
}
if(flagEdges == true){
    edges = JSON.parse(EdgesApp)
    
}

document.getElementById("output").innerHTML = risultato();
if(flagNodes == true){
   
    nodes = appNodes;
}
if(flagEdges == true){

    edges = appEdges;
}
}

function ritornaEdge(idNodoA, idNodoB)
{
let flag = false;
edges.forEach(function(edge)
{
    if (((edge.arrows.to == true || (edge.arrows.to == false && edge.arrows.from == false)) && edge.from == idNodoA && edge.to == idNodoB) || ((edge.arrows.from == true || (edge.arrows.to == false && edge.arrows.from == false)) && edge.from == idNodoB && edge.to == idNodoA)) flag = true;
})
return flag;
}
var costoPercorso = 0;
let cost = [];
let app = [];
let prec = [];
let tab = [];
let percorsi = 0;

function Dijkstra()
{
cost = [];
app = [];
prec = [];
tab = [];
var flag = false;
do {
    if (tuttiEsplorati() == true) flag = true;
    else
    {
    var idNodoA = ricercaCostoMinoreTraNonEsplorati();
    tabellaAppoggio[idNodoA].used = true;
    for (let idNodoB in nodiCollegati[idNodoA])
    {
        if (nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost < tabellaAppoggio[idNodoB].cost)
        {
        tabellaAppoggio[idNodoB].cost = nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost;
        tabellaAppoggio[idNodoB].prec = idNodoA;
        }
        else if (nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost == tabellaAppoggio[idNodoB].cost)
        {
        cost.push(nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost)
        prec.push(idNodoA)
        app.push(idNodoB)
        }
    }
    }
} while (flag == false);
tab[app.length] = {}
nodes.forEach(function(node)
{
    tab[app.length][node.id] = {
    cost: tabellaAppoggio[node.id].cost,
    prec: tabellaAppoggio[node.id].prec,
    used: tabellaAppoggio[node.id].used
    }
})
percorsi = app.length + 1;
for (let i = 0; i < app.length; i++)
{
    tab[i] = {}
    nodes.forEach(function(node)
    {
    if (node.id == app[i])
    {
        tab[i][node.id] = {
        cost: cost[i],
        prec: prec[i],
        used: true
        }
    }
    else
    {
        tab[i][node.id] = {
        cost: tabellaAppoggio[node.id].cost,
        prec: tabellaAppoggio[node.id].prec,
        used: tabellaAppoggio[node.id].used
        }
    }
    })
}
initPercorso(percorsi - 1);
}

function initPercorso()
{
var flag = false;
var idNodo = end;
percorso = [];
for (let i = 0; i < percorsi; i++)
{
    percorso[i] = []
    costoPercorso = 0;
    flag = false;
    idNodo = end;
    do {
    percorso[i].push(idNodo)
    edges.forEach(function(edge)
    {
        if (((edge.from == idNodo && edge.to == tab[i][idNodo].prec && (edge.arrows.from == true || (edge.arrows.to == false && edge.arrows.from == false))) || (edge.to == idNodo && edge.from == tab[i][idNodo].prec && (edge.arrows.to == true || (edge.arrows.to == false && edge.arrows.from == false)))))
        {
        edge.label = edge.label.trim();
        edge.label = Number(edge.label);
        costoPercorso += edge.label;
        }
    })
    idNodo = tab[i][idNodo].prec
    if (idNodo == null) flag = true
    } while (flag == false);
}
if (costoPercorso == 0)
{
    tab.splice(0, percorsi - 1)
    percorso.splice(0, percorso.length - 1)
    tab[0] = {}
    nodes.forEach(function(node)
    {
    tab[0][node.id] = {
        cost: tabellaAppoggio[node.id].cost,
        prec: tabellaAppoggio[node.id].prec,
        used: tabellaAppoggio[node.id].used
    }
    })
    percorsi = 1;
}
}

function tuttiEsplorati()
{
var visitati = 0;
var nodi = Object.keys(tabellaAppoggio)
var numeroNodi = nodi.length
for (let key in tabellaAppoggio)
{
    if (tabellaAppoggio[key].used == true) visitati++;
}
if (visitati == numeroNodi) return true;
return false;
}

function ricercaCostoMinoreTraNonEsplorati()
{
var min = Infinity;
var keyMin = null; //se tutti esplorati
for (let key in tabellaAppoggio)
{
    if (tabellaAppoggio[key].used == false && tabellaAppoggio[key].cost <= min)
    {
    min = tabellaAppoggio[key].cost;
    keyMin = key
    }
}
return keyMin;
}
var tabellaAppoggio = {};
var nodiCollegati = {}
var spesa = 0;
var start = null;
var end = null;
var percorso = [];
let fJson = [];
let EdgesApp;
let NodesApp;
function resetta(){
    if(flagNodes == false && flagEdges == false){
    flagEdges = true;
    flagNodes = true;
    EdgesApp = Edges;
    NodesApp = Nodes;
    }
    var currentNodes = nodes.get({returnType:"Object"});
    var currentEdges = edges.get({returnType:"Object"});
    nodes.forEach(function(node){
        edges.forEach(function(edge)
        {
            if (edge.from == node.id || edge.to == node.id)
            {
                edges.remove(
                {
                    id: edge.id
                })
            }
        });
        nodes.remove(
        {
            id: node.id
        })
    })
   
    for (let i = 65; i <= 90; i++)
    {
        labels[String.fromCharCode(i)] = {
            used: false
        };
    }
    
    Nodes = NodesApp;
    Edges = EdgesApp

   
    nodes.update(currentNodes);
    edges.update(currentEdges); 
    nodes.forEach(function(node){
        nodes.remove(
        {
            id: node.id
        })
    })
    edges.forEach(function(edge){
        edges.remove(
        {
            id: edge.id
        })
    })
   
    gestioneInputNodi()

}
function aggiornaNetwork()
{

if (data.length < 2)
{
    const modalError = new bootstrap.Modal(document.getElementById("errore"));
    textError = 'Please enter (nodes - edges).json';
    document.getElementById("textError").innerHTML = textError;
    let button = '<button class="btn btn-info text-white pe-3 ps-3 p-1 fw-ligh float-end" data-bs-target="#errore" data-bs-toggle="modal">OK</button>' + '<button class="btn btn-secondary text-white pe-3 ps-3 p-1 me-3 fw-ligh float-end" data-bs-target="#errore "onclick="resetta()" data-bs-toggle="modal">RESET</button>'
    document.getElementById("buttonModal").innerHTML = button;
    modalError.show()

}
else
{
    draw();
    let inxNodes = 0
    let inxEdges = 0;
    for (let j = 0; j < data.length; j++)
    {
    for (let i = 0; i < data[j].length; i++)
    {
        if (data[j][i].from !== undefined) inxEdges = j;
        else inxNodes = j;
        break;
    }
    }
    for (let i = 0; i < data[inxEdges].length; i++)
    {
    edges.add(new Edge(data[inxEdges][i].from, data[inxEdges][i].to, data[inxEdges][i].label, data[inxEdges][i].id))
    if (data[inxEdges][i].arrowFrom == true && data[inxEdges][i].arrowTo == true)
    {
        data[inxEdges][i].arrowTo = false;
        data[inxEdges][i].arrowFrom = false;
    }
    edges.update(
    {
        id: data[inxEdges][i].id,
        arrows:
        {
        to: data[inxEdges][i].arrowTo,
        from: data[inxEdges][i].arrowFrom
        }
    });
    }
    edges.forEach(function(edge)
    {
    if (idArcoAssociato(edge.id) != null)
    {
        var edge1 = edges.get(edge.id);
        edge1.smooth = true;
        edges.update(edge1);
        var edge2 = edges.get(idArcoAssociato(edge.id));
        edge2.smooth = true;
        edges.update(edge2);
    }
    })
    for (let i = 0; i < data[inxNodes].length; i++)
    {
    nodes.add(new Node(data[inxNodes][i].id, data[inxNodes][i].label));
    }
    gestioneInputNodi()
}
}
let data = [];
let files;

function handleFiles(event)
{
data = []
files = Array.from(event.target.files);
files.forEach(file =>
{
    if (file.name.endsWith('.json'))
    {
    const reader = new FileReader();
    reader.onload = function(event)
    {
        const fileContent = event.target.result;
        try
        {
        data.push(JSON.parse(fileContent));
        }
        catch (error)
        {
        console.error("Errore durante il parsing della stringa JSON: ", error);
        }
    }
    reader.readAsText(file);
    }
    else
    {
    console.warn(`Il file ${file.name} non è un file JSON e verrà ignorato.`);
    }
});
}



const output = document.getElementById("output");
let puntoPressione = null;
let puntoRilascio = null;


output.addEventListener("mousedown", function(evento) {
    puntoPressione = { x: evento.clientX, y: evento.clientY };
  });
  output.addEventListener("touchstart", function(evento) {
    puntoPressione = { x: evento.touches[0].pageX, y: evento.touches[0].pageY };
  });
  
  output.addEventListener("touchmove", function(evento) {
    evento.preventDefault();
  });
  
  output.addEventListener("touchend", function(evento) {
    puntoRilascio = { x: evento.changedTouches[0].pageX, y: evento.changedTouches[0].pageY };
    const distanza = Math.sqrt(Math.pow((puntoRilascio.x - puntoPressione.x), 2) + Math.pow((puntoRilascio.y - puntoPressione.y), 2));
    
    const sogliaVerticale = 50;
    if (distanza >= 150 && percorsi && percorsi > 1 && choice >= 0 && choice < percorsi) {
      if (Math.abs(puntoRilascio.y - puntoPressione.y) < sogliaVerticale) {
        if (puntoRilascio.x > puntoPressione.x) {
          spostamentoDestra = true;
          if (choice == 0) {
            choice = percorsi - 1;
          } else {
            choice--;
          }
        } else if (puntoRilascio.x < puntoPressione.x) {
          spostamentoDestra = false;
          if (choice == percorsi - 1) {
            choice = 0;
          } else {
            choice++;
          }
        }
      }
      document.getElementById("output").innerHTML = risultato();
    }
  });
  
  
    output.addEventListener("mouseup", function(evento) {
    puntoRilascio = { x: evento.clientX, y: evento.clientY };
    const distanza = Math.sqrt(Math.pow((puntoRilascio.x - puntoPressione.x), 2) + Math.pow((puntoRilascio.y - puntoPressione.y), 2));
  
 const sogliaVerticale = 50;
 if (distanza >= 150 && percorsi > 1) {

    if (Math.abs(puntoRilascio.y - puntoPressione.y) < sogliaVerticale) {
    if (puntoRilascio.x > puntoPressione.x) {
        spostamentoDestra = true;
        if(choice == 0)choice = percorsi-1;
        else choice--;
       
      } else if (puntoRilascio.x < puntoPressione.x) {
        spostamentoDestra = false;
        if(choice == percorsi-1)choice = 0;
        else choice++;
      }
    }
    
        document.getElementById("output").innerHTML =risultato()
    
 } 
 });