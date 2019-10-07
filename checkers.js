  var divSquare = '<div id="s$coord" class="square $color"></div>';
var fivFigure = '<div id="f$coord" class="figure">$figure</div>'

    $(function () {
    addSquares();
    showFigure('');
    //setDraggable();
    //setDroppable()
    });

//function setDraggable() {
  //  $('.figure'). draggable();
//}

//function setDroppable() {
 //   $('.square').droppable({
 //       drop: function (event, ui) {


 //       }
 //   });
//}
  
  function addSquares() {
      console.log('addSquares')
      $('.board').html('');
      for (var coord = 0; coord < 64; coord++)
      $('.board').append(divSquare
          .replace('$coord',coord)
          .replace('$color',
              isBlackSquareAt(coord) ? 'black' : 'white'));
 
  }

  function showFigures(figures) {
      for (var coord = 0; coord < 64; coord ++)
          showFigureAt(coord, figures.charAt(coord));

  }

  function showFigureAt(coord, figure) {
      $('#s' + coord).html(fivFigure
          .replace('$coord', coord)
          .replace('$figure', getCheckerSymbole(figure)));

  }

  function getCheckerSymbol(figure) {
      switch (figure) {
          case 'R' : return 'O';
          default : return '';
      }

  }
  
  function isBlackSquareAt(coord) {
    return (coord % 8 + Math.floor(coord / 8)) % 2;
      
  }