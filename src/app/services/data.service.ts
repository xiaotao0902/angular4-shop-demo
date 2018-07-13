import { EventEmitter,Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  eventer: EventEmitter<any> = new EventEmitter();

  constantsList = Object.freeze({
      HOSTUser : 'http://localhost:8000/v1/user',
      ACCOUNTUser : 'http://localhost:8000/v1/account'
  });

  constructor(public http:Http) {
  }

  /**
   * @param {string} url地址
   * @param {any} [options]
   * @param {any} [header]
   * @memberof ServiceBaseService
   * @title: 封装一个get请求的基础类
   */
  getData(url: string, options?: any, myheaders?: any) {
      // 配置请求头
      const myHeaders: Headers = new Headers();

      // tslint:disable-next-line:forin
      for (const key in myheaders) {
          myHeaders.append(key, myheaders[key]);
      };
      console.log("header : " + JSON.stringify(myHeaders));
      url += (url.indexOf('?') < 0 ? '?' : '&') + this.param(options);
      console.log("url : " + url);
      return this.http.get(url, { headers: myHeaders }).map(res => res.json());
  }

  /**
   * @param {string} url地址
   * @param {any} [options]
   * @param {any} [header]
   * @memberof ServiceBaseService
   * @title: 封装一个get请求的基础类
   */
  delData(url: string, options?: any, myheaders?: any) {
      // 配置请求头
      const myHeaders: Headers = new Headers();

      // tslint:disable-next-line:forin
      for (const key in myheaders) {
          myHeaders.append(key, myheaders[key]);
      };
      console.log("header : " + JSON.stringify(myHeaders));
      url += (url.indexOf('?') < 0 ? '?' : '&') + this.param(options);
      console.log("url : " + url);
      return this.http.delete(url, { headers: myHeaders }).map(res => res.json());
  }
  /**
    * @param url地址
    * @param options提交的数据
    * @param myheaders可选参数设置头
    * @title:封装一个post请求数据的
    */
   postData(url: string, options: any, myheaders?: any): Observable<any> {
       const myHeaders: Headers = new Headers();
       myHeaders.append('Content-Type', 'application/json');
       // tslint:disable-next-line:forin
       for (const key in myheaders) {
           myHeaders.append(key, myheaders[key]);
       };
       return this.http.post(url, options, { headers: myHeaders });
  }

  /**
    * @param url地址
    * @param options提交的数据
    * @param myheaders可选参数设置头
    * @title:封装一个post请求数据的
    */
   putData(url: string, options: any, myheaders?: any): Observable<any> {
       const myHeaders: Headers = new Headers();
       myHeaders.append('Content-Type', 'application/json');
       // tslint:disable-next-line:forin
       for (const key in myheaders) {
           myHeaders.append(key, myheaders[key]);
       };
       return this.http.put(url, options, { headers: myHeaders });
  }

  /**
   * @param {any} data
   * @returns
   * @memberof ServiceBaseService
   * @title:封装一个序列化get请求的参数的方法
   */
  param(data): string {
      let url = '';
      // tslint:disable-next-line:forin
      for (const k in data) {
          const value = data[k] !== undefined ? data[k] : '';
          url += `&${k}=${encodeURIComponent(value)}`;
      }
      return url ? url.substring(1) : '';
  }

}
