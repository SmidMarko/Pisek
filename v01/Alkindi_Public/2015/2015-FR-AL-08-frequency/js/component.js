/*
  Component : Permet de manipuler un objet graphique composé de plusieurs
  petits objets Raphael, donnés dans le tableau arrayElems. Ces sous-objets
  doivent être donnés en coordonnées relatives : si un objet du tableau est
  un objet Raphael centré en (10,20) alors il apparaitra en (cx+10,cy+20),
  (cx,cy) étant le centre du super-objet.
  Notamment, on peut faire:
  - des déplacements, ce qui déplace ensemble tous les sous-objets.
  - du drag&drop, en propageant les fonctions callbacks à tous  les
    sous-objets, de sorte que lorsqu'un des sous-objets et déplacés,
    tous les autres subissent le même déplacement. Ainsi on voit
    tous les objets bouger ensemble, comme si c'était un seul gros objet.
*/
function _component(cx, cy, arrayElems, paper)
{
   var that = this;


   this.cx = cx;
   this.cy = cy;
   this.elems = arrayElems;
   this.paper = paper;

   this.nbEl = this.elems.length;

	for(var iEl = 0; iEl < this.nbEl; iEl++)
	{
		if(this.elems[iEl].type == 'text')
		{
			var bb = this.elems[iEl].getBBox();
			this.elems.push(paper.rect(bb.x,bb.y,bb.width,bb.height).attr('fill','red').attr('opacity',0));
		}
	}


        /*
	  Les sous-objets subissent des déplacements en utilisant la chaine de déplacements
          Raphael (c'est une chaine de caractêres qui concatêne toutes les transformations
          à appliquer à l'objet). Pour ne pas rendre cette chaine tres longue, on se souvient
          de la transformation initiale de l'objet et on applique une translation de (cx,cy).
        */
	this.oldTransforms = new Array();
	for(var i = 0; i < this.elems.length; i++)
	{
		this.elems[i].toFront();
		this.oldTransforms[i] = this.elems[i].transform();
		this.elems[i].transform('t' + this.cx + ',' + this.cy + this.oldTransforms[i]);
	}


   this.placeAt = function(cx,cy)
   {
      this.cx = cx;
      this.cy = cy;

      for (var i = 0; i < this.elems.length; i++)
         this.elems[i].transform('t' + this.cx + ',' + this.cy + this.oldTransforms[i]);
      return this;
   };

   var animation = function(i, time)
   {
      return Raphael.animation({'transform' : 't' + that.cx + ',' + that.cy + that.oldTransforms[i]}, time, '');
   };

   this.placeAtWithAnim = function(cx,cy,time)
   {
      this.cx = cx;
      this.cy = cy;

      for (var i = 0; i < this.elems.length; i++)
         this.elems[i].animate(animation(i,time));
      return this;
   };

   this.move = function(dx,dy) { this.placeAt(this.cx+dx,this.cy+dy); };
   this.moveWithAnim = function(dx,dy,time) { this.placeAt(this.cx+dx,this.cy+dy,time); };


        /*
	  On retransmet aux éléments fils les callbacks drag&drop
          pour wraper le système de drag&drop de Raphael js.
	  Lorsqu'on écrit "this" dans un de ces callbacks,
	  il faut voir que cela correspond au super objet.
	  (voir la définition de start, move et up dans
	  dragAndDropSystem.js)
        */
	this.drag = function(moveDrag, startDrag, upDrag)
	{
		that.hasReallyMoved = false;
		this.startDrag = startDrag;
		this.moveDrag = moveDrag;
		this.upDrag = upDrag;

      for (var i = 0; i < this.elems.length; i++)
         this.elems[i].drag(function(dx,dy){that.moveDrag(dx,dy);},
                            function(){that.startDrag();},
                            function(){that.upDrag();});
      return this;
   };


        /*
	  Recrée un super-objet identique, remis en position (cx,cy), dont
          les sous-objets sont obtenus avec le .clone() de Raphael.
	*/
	this.clone = function()
	{
		var newArr = new Array();
		for(var i = 0; i < this.nbEl; i++)
		{
			newArr[i] = this.elems[i].clone().attr('transform',this.oldTransforms[i]);
		}
		return new _component(this.cx,this.cy,newArr,this.paper);
	};

   this.remove = function()
   {
      for (var i = 0; i < this.elems.length; i++)
         this.elems[i].remove();
   };

   this.toFront = function()
   {
      for (var i = 0; i < this.elems.length; i++)
         this.elems[i].toFront();

   };

   this.show = function()
   {
      for (var i =0; i < this.nbEl; i++)
         if (!this.elems[i].attr('transparent')) { // TODO: save original opacity attribute
            this.elems[i].attr('opacity','1');
         }
   };

   this.hide = function()
   {
      for (var i = 0; i < this.nbEl; i++)
         this.elems[i].attr('opacity','0');
   };

   this.halfHide = function()
   {
      for (var i = 0; i < this.nbEl; i++)
         if (!this.elems[i].attr('transparent')) {
            this.elems[i].attr('opacity','0.3');
         }
   };
}

function component(cx, cy, arrayElems,paper){ return new _component(cx, cy, arrayElems,paper); }
