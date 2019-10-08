const container = document.querySelector("#container");
        const newBoard = document.querySelector('#createBoard');
        const buttonBlack = document.querySelector('#colorBlack');
        const buttonRainbow = document.querySelector('#colorRainbow');
        
        function clearGrid() {
            let gridCells = container.childElementCount;
            for(let i = 0; i < gridCells; i++) {
            container.removeChild(container.children[0]);
            }
        }
        function createGrid() {
            clearGrid();
            let gridSize = prompt("Gridsize (1-100):",16);
            if (gridSize == "" || gridSize == null) {
                return;
            }
            else if(gridSize > 100 | gridSize < 1| isNaN(gridSize) | !Number.isInteger(Number(gridSize))) {
	            alert("Incorrect input");
                createGrid();
            }
            else {
                container.style.setProperty("--rowNum", gridSize);
                container.style.setProperty("--colNum", gridSize);
                for(x=0; x<gridSize; x++) {
                    for(i=0; i<gridSize; i++) {
                        let cells = document.createElement('div');
                        cells.classList.add('grid_cell');
                        cells.setAttribute("id", "cell");
                        container.appendChild(cells);

                        //Mouseover määritykset
                        cells.addEventListener('mouseenter', function() {
                            cells.style.background = "#000";
                        });
                    }
                }
            } return gridSize;
        } 
        newBoard.addEventListener('click', createGrid);
        function colorRainbow() {
            let cells = document.querySelectorAll(".grid_cell");
            cells.forEach(grid_cell=>{
                let r = Math.floor(Math.random()*255);
                let g = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                grid_cell.removeEventListener("mouseenter", function(){});
                grid_cell.onmouseenter = () => grid_cell.style.background = `rgb(${r},${g},${b})`;
            });
        };
        function colorBlack() {
            let cells = document.querySelectorAll(".grid_cell");
            cells.forEach(grid_cell=>{
                grid_cell.removeEventListener("mouseenter", function(){});
                grid_cell.onmouseenter = () => grid_cell.style.background = "#000";
            });
        };
        buttonRainbow.addEventListener("click", colorRainbow);
        buttonBlack.addEventListener("click", colorBlack);