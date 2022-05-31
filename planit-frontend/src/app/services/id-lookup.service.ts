import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { planit } from '../models/planit';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
}

@Injectable({
  providedIn: 'root'
})
export class IdLookupService {

	serverUrl:string = "api";
	serverQuery:string = "/id?id=";

	constructor(private http:HttpClient) { }

	getId(id:string):Observable<planit>
	{
		return this.http.get<planit>(this.serverUrl + this.serverQuery + id);
	}
}
