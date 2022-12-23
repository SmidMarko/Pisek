
///DraggableElement
/*
  Un draggable element, correspond à un objet graphique (voir component.js)
  capable de changé de case de container.
*/
function _draggableElement(ident, container, position, component)
{
   this.ident = ident;
   this.container = container;
   this.position = position;
   this.component = component;


    this.crossShape = null; //symbole de la croix en cas d'éjection

   this.remove = function()
   {
      if (this.crossShape != null)
         this.crossShape.remove();
      this.crossShape = null;

      this.component.remove();
   };

   this.cross = function()
   {
      if (this.crossShape != null)
         this.crossShape.remove();

      this.component.halfHide();

   };

   this.show = function()
   {
      if (this.crossShape != null)
         this.crossShape.remove();
      this.crossShape = null;

      this.component.show();
   };

   this.hide = function()
   {
      if (this.crossShape != null)
         this.crossShape.remove();
      this.crossShape = null;

      this.component.hide();
   };
}
