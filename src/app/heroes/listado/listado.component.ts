import { ConditionalExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent   {

 heroes: string[]=['Spíderman','Ironman', 'Hulk']

 heroeBorrar: string="";



 borraHeroe(){
console.log("borrando.....");

 this.heroeBorrar=this.heroes.shift()||'';

}


}
