
///Container
/*
  Un container est un ensemble de cases (aliginées verticalement ou horizontalement). On peut lui donner
  beaucoup de paramêtre pour spécifier son comportement.
  direction : doit valoir "vertical" ou "horizontal"
  align : dans le cas vertical, peut valoir "left" pour indiquer que la première case est à gauche, ou "right"
          pour indiquer que la première case est à droite. Dans le cas vertical, peut valoir "top" ou "bottom".
  cx, cy : donne le centre de la case la plus haute (pour le vertical) ou la plus a gauche (pour le cas horizontal)
  dropMode :
     - "replace" : lorsqu'un objet est laché sur une case, la case détruit son éventuel objet courant pour recevoir le nouveau.
     - "insert"  : lorsqu'un objet est laché sur la case, l'objet actuel de la case (s'il y en a un) est décalé vers la droite,
                   entrainant éventuellement un autre décalage et ainsi de suite... il peut y avoir une suppression
                   si le dernier objet se fait éjecter du container.
     - "insert-replace" : lorsqu'on lache l'objet, s'il est vers le début de la case, alors on a un comportement insert,
                          sinon un comportement replace.
     - "insertBefore" : comme insert, mais la zone de drop est plus du coté du début de la case, donc ca marche mieux
                        avec dragDisplayMode="marker".
     - "swap"    : lorsqu'un objet est laché sur la case, l'objet actuel de la case est remplacé par l'objet source et vice versa.
  dragDisplayMode : peut valoir "preview" (pour voir le placeholder avec des tirés jaune)
                    ou "marker" (pour voir le trait rouge).
  placeBackgroundArray : définit le background que l'on met à chaque case (juste pour faire joli).
  type : peut valoir "list", pour un container classique, ou "source" le container peut recréer des objets
         quand on lui prend le sien.
  sourceElemArray : Utile seulement dans le cas type="source", définit l'objet source à dupliquer.
*/
function _container(dragAndDropSystem,ident,cx, cy, nbPlaces, widthPlace, heightPlace, direction, align, dropMode, dragDisplayMode,
                   placeBackgroundArray, type, sourceElemArray)
{
   this.dragAndDropSystem = dragAndDropSystem;
   this.ident = ident;
   this.cx = cx;
   this.cy = cy;
   this.nbPlaces = nbPlaces;
   this.widthPlace = widthPlace;
   this.heightPlace = heightPlace;
   this.direction = direction;
   this.align = align;
   this.dropMode = dropMode;
   this.dragDisplayMode = dragDisplayMode;
   this.type = type;

   this.placeHolder = component(0,0,
      [dragAndDropSystem.paper.rect(-widthPlace/2,-heightPlace/2,widthPlace,heightPlace)
         .attr({'stroke' : 'yellow', 'stroke-width' : '2', 'stroke-dasharray': '-'})], this.dragAndDropSystem.paper);
   this.placeHolder.hide();

   this.sourceElemArray = sourceElemArray;

//sanityCheck
   this.sanityCheck = function()
   {
      if (direction != 'vertical' && direction != 'horizontal')
         alert('direction should be \'vertical\' or \'horizontal\'!');

      if (direction == 'vertical')
         if (align != 'top' && align != 'bottom')
            alert('Since direction is vertical, align should be \'top\' or \'bottom\'');
      if (direction == 'horizontal')
         if (align != 'left' && align != 'right')
            alert('Since direction is horizontal, align should be \'left\' or \'right\'');

      if (dropMode != 'replace' && dropMode != 'insert-replace' && dropMode != 'insert' && dropMode != 'insertBefore' && dropMode != 'swap')
         alert('dropMode should be \'replace\' or \'insert\' or \'insert-replace\' or \'insertBefore\' or \'swap\'');

      if (dragDisplayMode != 'preview' && dragDisplayMode != 'marker')
         alert('dragDisplayMode should be \'preview\' or \'marker\' ');

      if (type != 'list' && type != 'source')
         alert('type should be \'list\' or \'source\'');
   };
   this.sanityCheck();

//utils

   /*
     Fonction utiliraire : retourne les coordonnées du centre de la
     case à l'indice iPlace.
   */
   this.placeCenter = function(iPlace)
   {
      var w = this.widthPlace, h = this.heightPlace;
      if (direction == 'horizontal')
         if (align == 'left')
            return [this.cx + ((2*iPlace + 1 - this.nbPlaces)*w)/2, this.cy];
         else
            return [this.cx + ((this.nbPlaces - 2*iPlace - 1)*w)/2, this.cy];
      else
         if (align == 'top')
            return [this.cx, this.cy + ((2*iPlace + 1 - this.nbPlaces)*h)/2];
         else
            return [this.cx, this.cy + ((this.nbPlaces - 2*iPlace - 1)*h)/2];
   };

   /*
     Retourne l'id de la case contenant les coordonnées (x,y)
   */
   this.placeId = function(x,y) // return -1 if not contained in a place
   {
      for (var iPlace = 0; iPlace < this.nbPlaces; iPlace++)
      {
         var c = this.placeCenter(iPlace);
         var w = this.widthPlace, h = this.heightPlace;
         if (x>=c[0]-w/2 && x<=c[0]+w/2 && y>=c[1]-h/2 && y<=c[1]+h/2)
            return iPlace;
      }
      return -1;
   };

   this.isInContainer = function(x,y){return this.placeId(x,y) != -1;};

   // If the point (x,y) is in place i, return a real number between 0 and 1
   // to give its relative position in the place. For example, a value of
   // 0.1 means that the point is near from the common border of places i and i-1,
   // and a value of 0.5 indicates a position in the middle of the place i.
   this.ratioPositionInPlace = function(x,y)
   {
      var c0 = this.placeCenter(0), c1 = this.placeCenter(1);
      var c0p = [x - c0[0], y - c0[1]];
      var c0c1 = [c1[0] - c0[0], c1[1] - c0[1]];
      var prodScal = c0p[0]*c0c1[0] + c0p[1]*c0c1[1];
      var posAbs = parseFloat(prodScal) / parseFloat(c0c1[0]*c0c1[0] + c0c1[1]*c0c1[1]) + 0.5;
      return posAbs - this.placeId(x,y);
   };

   /*
     Renvoie l'action correspondant à ce qu'il faudrait faire si un objet
     l'objet est laché en position (x,y).
    */
   this.getCorrespondingAction = function(el,x,y)
   {
      var pos = this.placeId(x,y);
      var ratio = this.ratioPositionInPlace(x,y);
      if (pos == -1)
         return null;

      if (this.dropMode == 'replace')
         return action(this, pos,'replace');

      if (this.dropMode == 'swap')
          return action(this,pos,'swap');

      if (this.dropMode == 'insert-replace')
      {
         if (ratio < 0.25)
            return action(this, pos, 'insert');
         if (ratio > 0.75 && pos+1 < this.nbPlaces)
            return action(this, pos+1, 'insert');
         return action(this,pos,'replace');
      }

      if (this.dropMode == 'insert')
      {
         if (ratio < 0.25)
            return action(this, pos, 'insert');
         if (ratio > 0.75 && pos+1 < this.nbPlaces)
            return action(this, pos+1, 'insert');
         return null;
      }

      if (this.dropMode == 'insertBefore')
      {
         if (ratio < 0.75)
            return action(this, pos, 'insert');
         else if (ratio > 0.75 && pos+1 < this.nbPlaces)
            return action(this, pos+1, 'insert');
         else
            return null;
      }

      alert('dropMode ?');
   };

   /*
     retourne le tableau correspondant à la liste des objets qu'aurait notre container
     s'il l'action correspondant aux paramêtres était effectuée.
   */
   this.getElementsAfterDrop = function(srcCont, srcPos, dstCont, dstPos, dropType)
   {
      var res = new Array();
      for (var i = 0; i < this.nbPlaces; i++)
         res[i] = this.draggableElements[i];
      res[this.nbPlaces] = null;

      //removal
      if (this == srcCont)
      {
         if (this.dropMode == 'replace')
            res[srcPos] = null;
         else if (this.dropMode == 'swap') {
            res[srcPos] = dstCont.draggableElements[dstPos];
	    res[srcPos].component.toFront();
         } else
         {
            var i = srcPos;
            while(i+1 <= this.nbPlaces && this.draggableElements[i] != null)
            {
               res[i] = res[i+1];
               i++;
            }
         }
      }

      //push
      var el = srcCont.draggableElements[srcPos];
      if (this == dstCont)
      {
         if (dropType == 'replace')
            res[dstPos] = el;
         else if (dropType == 'swap')
            res[dstPos] = el;
	 else
         {
            var end = dstPos;
            while(end < this.nbPlaces && res[end] != null)
               end++;
            for (var i = end; i > dstPos; i--)
               res[i] = res[i-1];
            res[dstPos] = el;
         }
      }

      return res;
   };

//Draw places
   this.placeBG = component(0,0,placeBackgroundArray,this.dragAndDropSystem.paper);
   for (var iPlace = 0; iPlace < this.nbPlaces; iPlace++)
   {
      var c = this.placeCenter(iPlace);
      if (iPlace == 0)
         this.placeBG.placeAt(c[0],c[1]);
      else
         this.placeBG.clone().placeAt(c[0],c[1]);
   }

//Contents

   this.draggableElements = new Array();
   for (var i = 0; i < this.nbMax; i++)
      this.draggableElements[i] = null;

   this.createDraggable = function(ident, position, shapesArray)
   {
      this.dragAndDropSystem.addDraggableElement(ident, this, position,
         new _component(this.placeCenter(position)[0], this.placeCenter(position)[1], shapesArray,this.dragAndDropSystem.paper) );

      if (this.type == 'source')
      {
         this.sourceCompo = this.draggableElements[0].component.clone();
         this.sourceCompo.move(-10000,-10000);
         this.sourceIdent = ident;
         this.sourcePos = position;
      }
   };

   if (this.type == 'source')
   {
      var cloneArray = new Array();
      for (var i = 0; i < this.sourceElemArray.length; i++)
         cloneArray[i] = this.sourceElemArray[i].clone();
      component(this.cx, this.cy, cloneArray,this.dragAndDropSystem.paper)

      this.createDraggable(this.ident, 0, this.sourceElemArray);
   }


   this.getObjects = function()
   {
      var res = new Array();
      for (var i = 0; i < this.nbPlaces; i++)
         if (this.draggableElements[i] != null)
            res[i] = this.draggableElements[i].ident;
         else
            res[i] = null;
      return res;
   };

   this.getElementOver = function(srcEl,x,y)
   {
      for (var i = 0; i < this.nbPlaces; i++)
         if (this.draggableElements[i] != null && this.draggableElements[i] != srcEl)
         {
            var el = this.draggableElements[i];
            if (x >= el.component.cx - this.widthPlace/2 - 1 && x <= el.component.cx + this.widthPlace/2 + 1)
               if (y >= el.component.cy - this.heightPlace/2 - 1 && y <= el.component.cy + this.heightPlace/2 + 1)
                  return el;

         }
      return null;
   };

//Indicator
   this.indicator = null;

   /*
     Fait apparaitre le trait rouge ou le carré jaune en pointillé.
   */
   this.showIndicator = function(act)
   {
      if (this.dragDisplayMode != 'marker')
         return;

      var paper = this.dragAndDropSystem.paper;
      var c = this.placeCenter(act.dstPos);
      var w = this.widthPlace, h = this.heightPlace;

      if (act.dropType == 'replace')
         this.indicator = paper.rect(c[0]-w/2,c[1]-h/2,w,h).attr({'stroke' : 'red', 'stroke-width' : '4'});

      if (act.dropType == 'insert')
      {
         var prevC = this.placeCenter(act.dstPos-1);
         if (this.direction == 'vertical')
         {
            var y = (prevC[1] + c[1])/2;
            this.indicator = paper.rect(c[0]-3*w/4,y,3*w/2,1).attr({'stroke' : 'red', 'stroke-width' : '4'});
         }
         else
         {
            var x = (prevC[0] + c[0])/2;
            this.indicator = paper.rect(x,c[1]-3*h/4,1,3*h/2).attr({'stroke' : 'red', 'stroke-width' : '4'});
         }
      }
   };

   this.hideIndicator = function()
   {
      if (this.indicator != null)
         this.indicator.remove();
      this.indicator = null;
   };

// update source

this.updateSource = function()
{
   if (this.type == 'source' && this.draggableElements[0] == null)
   {
      this.sourceCompo.placeAt(0,0);

      var newSize = this.sourceCompo.elems.length;
      for (var i = this.sourceCompo.nbEl; i < newSize; i++)
         this.sourceCompo.elems[i].remove();
      for (var i = this.sourceCompo.nbEl; i < newSize; i++)
         this.sourceCompo.elems.pop();

      this.createDraggable(this.sourceIdent, 0 ,this.sourceCompo.elems);
   }
};

// update views

   this.timeAnim = this.dropMode == 'swap' ? 0 : 100;

   /*
     Demande de faire un affichage correspondant à l'état actuel
     du container (et dessinant chacun de ses objets contenus à la bonne place)
   */
   this.updateDisplay = function()
   {
      this.updateSource();
      this.placeHolder.hide();
      for (var i = 0; i < this.draggableElements.length; i++)
      {
         var center = this.placeCenter(i);
         if (this.draggableElements[i] != null)
         {
            this.draggableElements[i].component.placeAtWithAnim(center[0], center[1], this.timeAnim);
            this.draggableElements[i].component.show();
         }
      }
   };

   /*
     Demande de montrer un affichage correspondant à l'état dans lequel deviendrait
     le container si on faisait la manipulation passée en paramêtre.
   */
   this.updateIntermediateDisplay = function(srcCont, srcPos, dstCont, dstPos, dropType)
   {
      this.placeHolder.hide();
      var intermed = this.getElementsAfterDrop(srcCont, srcPos, dstCont, dstPos, dropType);

      if (this.dragDisplayMode == 'preview')
         for (var i = 0; i <= this.nbPlaces; i++)
         {
            var center = this.placeCenter(i);
            if (intermed[i] != null)
               if (intermed[i] == srcCont.draggableElements[srcPos])
               {
                  this.placeHolder.show();
                  this.placeHolder.placeAt(center[0], center[1]);
                  this.placeHolder.toFront();
                  srcCont.draggableElements[srcPos].show();
                  srcCont.draggableElements[srcPos].component.toFront();
               }
               else
               {
                  intermed[i].component.placeAtWithAnim(center[0], center[1], this.timeAnim);
                  intermed[i].show();
               }
         }


      if (this.dragDisplayMode == 'marker')
      {
         if (this.dropMode == 'replace')
            return;

         for (var i = 0; i < this.nbPlaces; i++)
            if (this.draggableElements[i] != null)
               this.draggableElements[i].show();

         if (this == srcCont)
         {
            var iPlaceIns = srcPos;
            while(iPlaceIns+1 < this.nbPlaces && this.draggableElements[iPlaceIns+1] != null)
            {
               var center = this.placeCenter(iPlaceIns);
               this.draggableElements[iPlaceIns+1].component.placeAtWithAnim(center[0],center[1],this.timeAnim);
               iPlaceIns++;
            }
         }
      }

      if (intermed[this.nbPlaces] != null)
         intermed[this.nbPlaces].cross();
   };
}

// Constructeur "intelligent"

function container(_params)
{
   var params = _params;

   if (params.dragAndDropSystem == undefined)
      alert('no dragAndDropSystem is specified');
   if (params.ident == undefined)
      params.ident = '';
   if (params.type == undefined)
      params.type = 'list';
   if (params.type != 'source' && params.type != 'list')
      alert('type should be \'source\' or \'list\'');

   if (params.cx == undefined || params.cy == undefined)
      alert('cx and cy are not specified');

   if (params.widthPlace == undefined)
      params.widthPlace = 40;
   if (params.heightPlace == undefined)
      params.heightPlace = 40;

   if (params.align != undefined)
   {
      if (params.align != 'top' && params.align != 'bottom' && params.align != 'left' && params.align != 'right')
         alert('align should be \'top\' or \'bottom\' or \'left\' or \'right\'');

      if (params.align == 'top' || params.align == 'bottom')
         params.direction = 'vertical';
      else
         params.direction = 'horizontal';
   }
   else
   {
      if (params.direction == undefined)
      {
         params.direction = 'horizontal';
         params.align = 'left';
      }
      else
      {
         if (params.direction == 'vertical')
            params.align = 'top';
         else if (params.direction == 'horizontal')
            params.align = 'left';
         else
            alert('direction should be \'vertical\' or \'horizontal\' ');
      }
   }

   if (params.dragDisplayMode == undefined)
      params.dragDisplayMode = 'preview';
   else if (params.dragDisplayMode != 'preview' && params.dragDisplayMode != 'marker')
      alert('dragDisplayMode should be \'preview\' or \'marker\' ');

   if (params.placeBackgroundArray == undefined)
   {
      var paper = params.dragAndDropSystem.paper;
      var w = params.widthPlace, h = params.heightPlace;
      params.placeBackgroundArray = [paper.rect(-w/2,-h/2,w,h).attr('fill','blue')];
   }

//Source
   if (params.type == 'source')
   {
      if (params.dropMode == undefined)
         params.dropMode = 'replace';

      params.nbPlaces = 1;

      if (params.sourceElemArray == undefined)
         alert('sourceElemArray should be defined');
   }

//List
   if (params.type == 'list')
   {
      if (params.dropMode == undefined)
         params.dropMode = 'insert';

      if (params.nbPlaces == undefined)
         params.nbPlaces = 5;
   }

   return new _container(
      params.dragAndDropSystem, params.ident,
      params.cx, params.cy, params.nbPlaces, params.widthPlace, params.heightPlace,
      params.direction, params.align,
      params.dropMode, params.dragDisplayMode,
      params.placeBackgroundArray, params.type, params.sourceElemArray);
}
