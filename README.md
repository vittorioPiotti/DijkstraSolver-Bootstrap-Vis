<img src="https://github.com/vittorioPiotti/Dijkstra/blob/main/preview.gif" alt="Icona" width="100%"/>


# Dijkstra Bootstrap
Dijkstra Solver dal design efficace per creare e caricare esercizi su Dijkstra con visualizzazione di **Tutti i Cammini Minimi** e con **Archi Direzionabili**

> [!NOTE]
> Il progetto è stato sviluppato a scuola per fini scolastici in funzione della consegna assegnata dal docente come lavoro individuale


> [!TIP]
> Corretto funzionamento garantito

> [!TIP]
> Sito web **Responsive** con modalità **Desktop** e **Mobile**


## Ispirazione

La grafica del sito web è stata sviluppata riproponendo l'interfaccia utente offerta da [Scheduling Solver](https://process-scheduling-solver.boonsuen.com/)

## Sito Web

Sito Web Dijkstra: [Link al Sito](https://7khz9k.csb.app/Dijkstra)

## Utilizzo

**Generare Esercizi** è possibile caricando i **file json** dei nodi e degli archi per rappresentare i grafici


L'utente effettua il **Doppio Click** su uno di questi elementi del Grafo per:
| Sfondo| Nodo | Arco |
| ------------ | ------------ | ------------ |
| <img src="https://github.com/vittorioPiotti/Dijkstra/blob/main/clicksfondo.gif" alt="Icona" width="100%"/> | <img src="https://github.com/vittorioPiotti/Dijkstra/blob/main/clicknodo.gif" alt="Icona" width="100%"/> | <img src="https://github.com/vittorioPiotti/Dijkstra/blob/main/clickarco.gif" alt="Icona" width="100%"/>|
| Nuovo Nodo | Crea Arco | Elimina Arco |
|  | Elimina Nodo | Direziona Arco |
|  |  | Sdoppia Arco |
|  |  | Modifica Arco |



## Preview


| <img src="https://github.com/vittorioPiotti/Dijkstra/blob/main/desktop.png" alt="Icona"/> | <img src="https://github.com/vittorioPiotti/Dijkstra/blob/main/Mobile.png" alt="Icona" width="800"/> | 
| ------------ | ------------ |


## Snippet Dijkstra Algorithm

```js

function Dijkstra(){
    cost = [];
    app = [];
    prec = [];
    tab = [];
    var flag = false;
    do {
        if (tuttiEsplorati() == true) flag = true;
        else{
            var idNodoA = ricercaCostoMinoreTraNonEsplorati();
            tabellaAppoggio[idNodoA].used = true;
            for (let idNodoB in nodiCollegati[idNodoA]){
                if (nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost < tabellaAppoggio[idNodoB].cost){
                    tabellaAppoggio[idNodoB].cost = nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost;
                    tabellaAppoggio[idNodoB].prec = idNodoA;
                }
                else if (nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost == tabellaAppoggio[idNodoB].cost){
                    cost.push(nodiCollegati[idNodoA][idNodoB] + tabellaAppoggio[idNodoA].cost)
                    prec.push(idNodoA)
                    app.push(idNodoB)
                }
            }
        }
    } while (flag == false);
    tab[app.length] = {}
    nodes.forEach(function(node){
        tab[app.length][node.id] = {
            cost: tabellaAppoggio[node.id].cost,
            prec: tabellaAppoggio[node.id].prec,
            used: tabellaAppoggio[node.id].used
        }
    })
    percorsi = app.length + 1;
    for (let i = 0; i < app.length; i++){
        tab[i] = {}
        nodes.forEach(function(node){
            if (node.id == app[i]){
                tab[i][node.id] = {
                    cost: cost[i],
                    prec: prec[i],
                    used: true
                }
            }
            else{
                tab[i][node.id] = {
                    cost: tabellaAppoggio[node.id].cost,
                    prec: tabellaAppoggio[node.id].prec,
                    used: tabellaAppoggio[node.id].used
                }
            }
        })
    }
}



```


## Licenze

| Componente         | Versione  | Copyright                         | Licenza                                                       |
|--------------------|-----------|-----------------------------------|---------------------------------------------------------------|
| Dijkstra-Bootstrap | v1.0.0    | 2024 Vittorio Piotti              | [GPL-3.0 License](https://github.com/vittorioPiotti/Dijkstra-Bootstrap/blob/main/LICENSE.md) |
| Bootstrap          | v4.0.0    | 2011-2018 The Bootstrap Authors   | [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE) |
| vis.js             | 4.21.0    | 2011-2017 Almende B.V, http://almende.com | [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0), [MIT License](http://opensource.org/licenses/MIT) |


