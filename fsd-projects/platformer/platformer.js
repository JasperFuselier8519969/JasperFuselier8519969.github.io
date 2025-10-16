$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 20, 90);
    createPlatform(300, 200, 20, 300);
    createPlatform(550, 550, 70, 20);
    createPlatform(300, 500, 50, 20);
    createPlatform(600, 400, 20, 150);
    createPlatform(850, 300, 100, 20);
    createPlatform(800, 550, 30, 20);
    createPlatform(550, 200, 50, 20);
    // TODO 3 - Create Collectables
    createCollectable("steve", 260, 270); 
    createCollectable("max", 900, 450); 
    createCollectable("kennedi", 1200, 200); 
    // TODO 4 - Create Cannons
    createCannon("bottom", 850, 1000)
    createCannon("right", 200, 2000)
    createCannon("right", 800, 2000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
