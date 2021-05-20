import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notas} from "./interfaces/notas";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioNotaService {
  url:string="http://localhost/evaluacion4/backend/";

  constructor(private servicio:HttpClient) { }

  GuardarDatos(lista:Array<Notas>):Observable<any>{
    return this.servicio.post(`${this.url}guardar.php`,JSON.stringify(lista));
   }

  TomarNotas():Observable<any>{
    return this.servicio.get(`${this.url}mostrar.php`);
   }
 
}
