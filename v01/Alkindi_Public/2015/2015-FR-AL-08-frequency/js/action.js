/*
  Une action correspond à ce qui peut se passer un draggable objet
  si on le lache. Elle indique où l'objet doit être envoyé (dstCont est
  l'id du container destination, et dstPos et l'indice de la position
  dans le container).
  dropType peut valoir : "replace" ou "insert"
  et expliquer comment l'objet doit être mis dans le container destination
  (dans le cas où l'action est bien réalisée).
*/
function _action(dstCont, dstPos, dropType)
{
   this.dstCont = dstCont;
   this.dstPos = dstPos;
   this.dropType = dropType;  

   this.sameAs = function(other)
   {
      return this.dstCont == other.dstCont && this.dstPos == other.dstPos && this.dropType == other.dropType;
   };
}

function action(dstCont, dstPos, dropType) 
{ 
   return new _action(dstCont, dstPos, dropType); 
}

