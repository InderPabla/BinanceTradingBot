import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decx'
})
export class DecimalFixPipe implements PipeTransform {

  transform(value: number, args?: any): any {
 
    let valStr: string = value.toString();
    let first:string = valStr.charAt(0);
    let indexOfDot:number= valStr.indexOf(".");
    
    if(indexOfDot===-1){
      return value;
    }

    if(Math.abs(value)>1){
      //let fixed = (valStr.length-indexOfDot)/2;
      return value.toFixed(3);
    }
    else if(Math.abs(value)>0.1){
      return value.toFixed(5);
    }
    else if(Math.abs(value)>0.01){
      return value.toFixed(6);
    }
    else if(Math.abs(value)>0.001){
      return value.toFixed(6);
    }
    else 
      return value;
    // if(typeof first === "string" && !Number.isNaN(Number(first)) && parseInt(first)===0) {
      
    // } 
    // else if(typeof first === "string" && !Number.isNaN(Number(first)) && parseInt(first)>0){
    //   if(indexOfDot>)
    // }
    // else {
    //   return value;
    // }


    // for(let i =0;i<valStr.length;i++) {
    //   if(valStr[i])
    // }

    // if (valStr.length <= 8) {
    //   return value;
    // }
    // else {
    //   //return value.toFixed(8);

    // }
  }

}
