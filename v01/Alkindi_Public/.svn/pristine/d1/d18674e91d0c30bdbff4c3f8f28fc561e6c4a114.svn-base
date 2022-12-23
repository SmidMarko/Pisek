///DragAndDropSystem

/*
  paper: paperRaphael, //le canvas Raphael dans lequel on dessine
  keepLastGoodAction : // ou false, indique si on garde la dernière action valide comme référence.
                       // (par defaut à true)
Callbacks :
   canBeTaken(containerID, position) : retourne si l'objet peut être attrappé par l'utilisateur

   actionIfDropped(srcContainerID, srcPos, dstContainerID, dstPos, dropType) :
       dropType: “insert” ou “replace”
       retourne :
       - true si l'objet source peut être inséré à cette destination
       - false si on refuse de l’insérer
       - un objet action(otherDstContId, otherDstPos, otherDropType) pour envoyer l’objet source ailleurs

   drop(srcContainerID, srcPos, dstContainerID, dstPos, dropType) :
      dropType: “insert” ou “replace”
      appelé lorsque l'on vient de dropper l'objet

   actionIfEjected(refElement, previousContainerId, previousPos) :
      appelée lorsqu’un objet est éjecté, par exemple parce qu’il vient d’être
      remplacé par un autre ou bien parce qu’il était en dernière position d’un
      conteneur et qu’une insertion le fait sortir.
      retourne :
      - null si l’objet éjecté doit être détruit.
      - un objet action(dstContId, dstPos, dropType) pour envoyer l’objet ailleurs
          (l’action est alors traitée, entrainant notamment un appel a drop).

   ejected(refEl, previousCont, previousPos) : indique qu'il y a eu une ejection
*/
function _DragAndDropSystem(paper)
{
   this.paper = paper;

   this.keepLastGoodAction = true;

//Containers
   this.containers = new Array();
   this.addContainer = function(params)
   {
      params.dragAndDropSystem = this;
      this.containers.push(container(params) );
      return this.containers[this.containers.length-1];
   };

   this.removeContainer = function(cont)
   {
      for (var i = 0; i < this.containers.length; i++) {
         if (this.containers[i] == cont)
         {
            this.containers[i] = this.containers[this.containers.length-1];
            this.containers.pop();
         }
      }
   };

   // Create a temporary container, useful for ejection
   this.addContainer({
      ident : 'temporaryContainer',
      cx : -1000, cy : -1000, nbPlaces : 1, widthPlace : 10, heigthPlace : 10,
      direction : 'vertical', align : 'top',
      dropMode : 'replace', dragDiplayMode : 'marker',
      placeBackgroundArray : [],
      type : 'list'});

//Draggable elements
   this.addDraggableElement = function(ident,container, position,comp)
   {
      var dragEl = new _draggableElement(ident, container, position,comp);
      comp.draggableElement = dragEl;
      container.draggableElements[position] = dragEl;

      var that = this;
      var start = function()
      {
         if (this.hasReallyMoved) {
            this.upDrag();
         }
         if (!that.canBeTaken(this.draggableElement.container.ident, this.draggableElement.position))
            return;
         this.startcx = this.cx;
         this.startcy = this.cy;
         this.hasReallyMoved = false;
         this.toFront();
      };

      var move = function(dx,dy)
      {
         if (isNaN(dx) || isNaN(dy)) // Très important : peu buggué sur certains navigateur sinon !
            return;

         if (!that.canBeTaken(this.draggableElement.container.ident, this.draggableElement.position))
            return;

         this.placeAt(this.startcx + dx, this.startcy + dy);

	 // tant que l'objet n'a pas vraiment bougé, on ne le detache pas vraiment
	 // sinon ça ferait un effet visuel pas très agréable.
         if (Math.abs(this.cx - this.startcx) > 5 || Math.abs(this.cy - this.startcy) > 5)
         {
            this.hasReallyMoved = true;
            that.hasBeenTaken(dragEl);
         }
         if (this.hasReallyMoved)
            that.hasBeenMoved(dragEl,this.cx,this.cy);
      }

      var up = function()
      {
         if (!that.canBeTaken(this.draggableElement.container.ident, this.draggableElement.position))
            return;

         if (!this.hasReallyMoved)
         {
            this.placeAt(this.startcx, this.startcy);
            return;
         }
		        this.hasReallyMoved = false;

         that.hasBeenDropped(dragEl,this.cx,this.cy);
      }

      comp.drag(move,start,up); // donne au component ses callbacks, qu'il retransmet
                                // à ses sous-objets (voir component.js)

      return dragEl;
   };

   this.removeDraggableElement = function(el)
   {
      for (var i = 0; i < this.draggableElements.length; i++)
         if (this.draggableElements[i] == el)
         {
            this.draggableElements[i] = this.draggableElements[this.draggableElements.length-1];
            this.draggableElements.pop();
         }
   };

   this.getObjects = function(containerId)
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         if (this.containers[iCont].ident == containerId)
            return this.containers[iCont].getObjects();
   };

   this.insertObject = function(containerId, pos, elem)
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         if (this.containers[iCont].ident == containerId)
            this.containers[iCont].createDraggable(elem.ident, pos, elem.elements);
   };

   this.insertObjects = function(containerId, pos, elems)
   {
      // optimized version of insertObject applied to each of the elems
      for (var iCont = 0; iCont < this.containers.length; iCont++) {
         if (this.containers[iCont].ident == containerId) {
            var cont = this.containers[iCont];
            for (var i = 0; i < elems.length; i++) {
               var elem = elems[i];
               if (elem != null) {
                  cont.createDraggable(elem.ident, pos+i, elem.elements);
               }
            }
         }
      }
   };


   this.removeObject = function(containerId, pos)
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         if (this.containers[iCont].ident == containerId)
         {
            var el = this.containers[iCont].draggableElements[pos];
            this.containers[iCont].draggableElements[pos] = null;
            el.remove();
         }
   };

   this.removeAllObjects = function(containerId)
   {
      // optimized version of: getObjects followed by removeObject on each of them
      for (var iCont = 0; iCont < this.containers.length; iCont++) {
         if (this.containers[iCont].ident == containerId) {
            var elems = this.containers[iCont].draggableElements;
            for (var i = 0; i < elems.length; i++) {
               var el = elems[i];
               if (el != null) {
                  elems[i] = null;
                  el.remove();
               }
            }
         }
      }
   }


   //the user uses identifier instead of a reference for containers
   this.userActionToAction = function(act)
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         if (this.containers[iCont].ident == act.dstCont)
            return action(this.containers[iCont], act.dstPos, act.dropType);

      return action(null , act.dstPos, act.dropType);
   };

   // return the action object corresponding to what to do if el is dropped here
   this.getCorrespondingAction = function(el,cx,cy)
   {
      var srcCont = el.container, srcPos = el.position;
      //We test if one containter can recieve
      for (var iCont = 0; iCont < this.containers.length; iCont++)
      {
         var dstCont = this.containers[iCont];
         if (dstCont.isInContainer(cx,cy))
         {
            var act = dstCont.getCorrespondingAction(el,cx,cy);
            if (act == null)
               continue;
            var actUser = this.actionIfDropped(srcCont.ident, srcPos, act.dstCont.ident, act.dstPos, act.dropType);
            if (actUser == true)
               return act;
            if (actUser != false)
               return this.userActionToAction(actUser);
         }
      }

      //Here, no container can recieve, we thus call actionIfDropped for an empty dst.
      var actUser = this.actionIfDropped(srcCont.ident, srcPos, null,null,'insert');
      if (actUser == true)
         return action(null,null,'insert');
      if (actUser != false)
         return this.userActionToAction(actUser);

      //Default behaviour
      if (this.keepLastGoodAction && this.lastDisplayedAction != null)
         return this.lastDisplayedAction;

      return action(srcCont, srcPos, srcCont.dropMode);
   };

   this.hideIndicators = function()
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         this.containers[iCont].hideIndicator();
   };

   this.updateDisplay = function()
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         this.containers[iCont].updateDisplay();
   };

   this.updateIntermediateDisplay = function(srcCont, srcPos, dstCont, dstPos, dropType)
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         this.containers[iCont].updateIntermediateDisplay(srcCont, srcPos, dstCont, dstPos, dropType);
   };

   this.getElementOver = function(srcEl,x,y)
   {
      for (var iCont = 0; iCont < this.containers.length; iCont++)
      {
         var el = this.containers[iCont].getElementOver(srcEl,x,y);
         if (el != null)
            return el;
      }
      return null;
   };

// Inner Signals
   this.hasBeenTaken = function(el)
   {
   };

   this.lastDisplayedAction = null;
   this.lastOver = -1;
   this.hasBeenMoved = function(el,cx,cy)
   {
      var action = this.getCorrespondingAction(el,cx,cy);

      var elOver = this.getElementOver(el,cx,cy);

      if (this.lastOver !== elOver)
      {
         this.lastOver = elOver;
         if (this.lastOver != null)
            this.over(el.container.ident, el.position, elOver.container.ident, elOver.position);
         else
            this.over(el.container.ident, el.position, null, 0);
      }

      if (this.lastDisplayedAction == null || !action.sameAs(this.lastDisplayedAction))
      {
         this.lastDisplayedAction = action;
         this.hideIndicators();
         if (action.dstCont != null)
         {
            action.dstCont.showIndicator(action);
            el.component.toFront();
         }
         this.updateIntermediateDisplay(el.container, el.position, action.dstCont, action.dstPos, action.dropType);
      }
   };

   this.hasBeenDropped = function(el,cx,cy)
   {
      this.hideIndicators();
      var action = this.getCorrespondingAction(el,cx,cy);

      var srcCont = el.container, srcPos = el.position;
      this.processDeplacement(srcCont, srcPos, action.dstCont, action.dstPos, action.dropType);

      this.lastDisplayedAction = null;
      this.lastOver = -1;
   };

// Authorization

   this.canBeTaken = function(conteneurId, position) { return true; };
   this.actionIfDropped = function(srcContId, srcPos, dstContId, dstPos, dropType) { return true; };

// User signals

   this.drop = function(srcContId, srcPos, dstContId, dstPos, dropType) {  };
   this.over = function(srcContId, srcPos, dstContId, dstPos) {} ;
   this.actionIfEjected = function(refEl, previousCont, previousPos) {return null; };
   this.ejected = function(refEl, previousCont, previousPos){};

// Process deplacement

   this.processDeplacement = function(srcCont, srcPos, dstCont, dstPos, dropType)
   {
      var newObjects = new Array();
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         newObjects[iCont] = this.containers[iCont].getElementsAfterDrop(srcCont, srcPos, dstCont, dstPos, dropType);

      var ejected = null;

      //If an element is deplaced after the end, it will be ejected
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         if (newObjects[iCont][this.containers[iCont].nbPlaces] != null)
         {
            var elEjected = newObjects[iCont][this.containers[iCont].nbPlaces];
            var previousCont = this.containers[iCont];
            ejected = {'refEl' : elEjected, 'previousCont' : previousCont, 'previousPos' : (this.containers[iCont].nbPlaces-1)};
         }

      //If an element was overwritten, it will be ejected
      var iDstCont = -1;
      for (var iCont = 0; iCont < this.containers.length; iCont++)
         if (this.containers[iCont] == dstCont)
            iDstCont = iCont;
      if (iDstCont != -1)
         if (dropType == 'replace' && newObjects[iDstCont][dstPos] != null)
            if (newObjects[iDstCont][dstPos] != srcCont.draggableElements[srcPos])
            {
               var elEjected = newObjects[iDstCont][dstPos];
               var previousCont = this.containers[iDstCont];
               // We have to find its position after the movement
               var previousPos = -1;
               for (var iPlace = 0; iPlace < this.containers[iDstCont].length; iPlace++)
                  if (this.containers[iDstCont][iPlace] == elEjected)
                     previousPos = iPlace
               if (previousPos == -1)
                  alert('did not find previous position for ejection');
               ejected = {'refEl' : elEjected, 'previousCont' : previousCont, 'previousPos' : previousPos};
            }

      //If we drop into the void, the element will be ejected
      if (dstCont == null)
         ejected = {'refEl' : srcCont.draggableElements[srcPos], 'previousCont' : srcCont, 'previousPos' : srcPos};

      //copy
      for (var iCont = 0; iCont < this.containers.length; iCont++)
      {
         var cont = this.containers[iCont];
         for (var iPlace = 0; iPlace < cont.nbPlaces; iPlace++)
         {
            cont.draggableElements[iPlace] = newObjects[iCont][iPlace];
            if (cont.draggableElements[iPlace] != null)
            {
               cont.draggableElements[iPlace].container = cont;
               cont.draggableElements[iPlace].position = iPlace;
            }
         }
      }

      this.updateDisplay();

      if (dstCont != null)
         this.drop(srcCont.ident, srcPos, dstCont.ident, dstPos, dropType);
      else
         this.drop(srcCont.ident, srcPos, null);

      //If needed, we process the ejection
      if (ejected != null)
         this.manageEjection(ejected['refEl'], ejected['previousCont'], ejected['previousPos']);

   };

   // Ejection

   this.manageEjection = function(refEl, previousCont, previousPos)
   {
      var act = this.actionIfEjected(refEl, previousCont.ident, previousPos);
      refEl.show();
      if (act == null)
         refEl.remove();
      else
      {
         //push in temporary container, little hack
         act = this.userActionToAction(act);
         this.containers[0].draggableElements[0] = refEl;
         refEl.container = this.containers[0];
         refEl.position = 0;
         this.processDeplacement(this.containers[0], 0, act.dstCont, act.dstPos, act.dropType);
      }

      this.ejected(refEl, previousCont.ident, previousPos);
   };
}

//function DragAndDropSystem(paper){return new _DragAndDropSystem(paper);}

function DragAndDropSystem(params)
{
   if (params.paper == undefined)
      alert('paper should be defined');

   var dragAndDrop = new _DragAndDropSystem(params.paper);

   if (params.keepLastGoodAction != undefined)
      dragAndDrop.keepLastGoodAction = params.keepLastGoodAction;

   if (params.canBeTaken != undefined)
      dragAndDrop.canBeTaken = params.canBeTaken;

   if (params.actionIfDropped != undefined)
      dragAndDrop.actionIfDropped = params.actionIfDropped;

   if (params.drop != undefined)
      dragAndDrop.drop = params.drop;

   if (params.actionIfEjected != undefined)
      dragAndDrop.actionIfEjected = params.actionIfEjected;

   if (params.ejected != undefined)
      dragAndDrop.ejected = params.ejected;

   if (params.over != undefined)
      dragAndDrop.over = params.over;

   return dragAndDrop;
};
