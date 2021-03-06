class Form {
  constructor() {
    this.title = createElement('h2');
   this.input = createInput("Name");
   this.button = createButton('Play');
  this.greeting = createElement('h3');

  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    
    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    this.input.position(130, 160);
    this.button .position(250, 200);

    this.button .mousePressed(function(){
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      
      playerCount+=1;
      player.index= playerCount;
      player.update(name)
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
