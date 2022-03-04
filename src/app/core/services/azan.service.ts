import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class azanService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    gettimetehran() : Observable<any>{
        return this.http.get('https://api.pray.zone/v2/times/today.json?city=tehran');
    }
    gettimetoronto() : Observable<any> {
        return this.http.get('https://api.pray.zone/v2/times/today.json?city=toronto');
    }
    gettimevancouver() : Observable<any> {
        return this.http.get('https://api.pray.zone/v2/times/today.json?city=vancouver');
    }
    gettimetorontoavini() : Observable<any> {
        return this.http.get('https://prayer.aviny.com/api/prayertimes/228');
    }
}