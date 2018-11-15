import { Injectable ,Inject}    from '@angular/core';
import { Router } from '@angular/router';

import { Headers, Http , URLSearchParams ,RequestOptions,ResponseContentType} from '@angular/http';//RequestOptions

import { CONFIG_API } from '../config/config';

@Injectable()
export class AjaxService{
	private headers = new Headers({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
    });

	constructor(
        private http: Http,
        @Inject(CONFIG_API) private Url: string,
        private router: Router
    ) { }
	getJson(data) {
        let obj = {};
        data.forEach((e) => { obj[e.name] = this.getMethodFn(e); });
        return obj;
    }

    getMethodFn(e){
        var _self = this;
        let ojb = {
            'get':e => this.doGet(e),
            'post': e => this.doPost(e),
            'filesaver':e => this.doFileSaver(e),
        }
        return ojb[e.methed](e);
    }

    doPost(data){
        let _self = this;

        return function (param) {
            if (!_self.checkPeopleKeyFn(param)) { return Promise.reject('no PeopleKey'); };
            return _self.http.post(_self.Url + data.url,param,{headers: this.headers})
            .toPromise().then( response => response.json() )
            .catch(_self.handleError);
        }
    }

    doGet(data){ 
        let _self = this;
        return function(param){
           var search = new URLSearchParams();
           var url_d = new Date().getTime();
           
           if (!_self.checkPeopleKeyFn(param)) { return Promise.reject('no PeopleKey'); };
           
           if (param) {for (let k in param) { search.set(k, param[k]); }}
           search.set('t_c_r',url_d + '');
           return _self.http.get(_self.Url + data.url,{ search: search,headers: this.headers})
           .toPromise().then( response =>  response.json() )
           .catch(_self.handleError);
        }   
    	
    }
    
    doFileSaver(data){ 
        let _self = this;
        
        return function(param){
            var search = new URLSearchParams();
            if(param){for(let k in param){search.set(k,param[k]);}}

            let options = new RequestOptions({
                responseType: ResponseContentType.Blob,
                search: search,
                headers: this.headers,
            });

            return _self.http.get(_self.Url + data.url,options)
            .toPromise().then(
                (response:any) => response['_body'],
                error => error.json()
            ).catch(_self.handleError);
        }   
    }

    checkPeopleKeyFn(param) {
        
        if (!param) { return true;  }
        if ((Reflect.has(param, 'PeopleKey') && !param['PeopleKey'] ) ||
            (Reflect.has(param, 'empolyeePeopleKey') && !param['empolyeePeopleKey']) ||
            (Reflect.has(param, 'peopleKey') && !param['peopleKey'] ) ) {
            
            window.location.href = '/app/index.aspx';
            return false;
        } else {
            return true;
        }
        
    }

	private handleError(error: any){
	    console.error('error : An error occurred');
      // Exceptionless.createClient('RYvmkhvxAFZolCesQVD19IYe9VEKEJyZ7ay3YJqN', 'http://10.237.168.84:8006/');
      // Exceptionless.createLog('GDN CAMS', error, '1',[]);
      //console.log(error);
      //console.log(JSON.parse(error._body));
      //console.log(JSON.parse(error._body).Code == 401);
      if (error != undefined && error._body != undefined) {
        var rep = JSON.parse(error._body);
        if (rep != null && rep != undefined && rep.Code == 401 && rep.Code == 302) {
          window.location.href = '/new_home.aspx';
          return;
        }
      }
	    return Promise.reject(error.json());
	}
}
