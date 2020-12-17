import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TerminalImage } from '../model/terminal-image';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    // this.usersUrl = 'http://localhost:8080/scmp/terminalImages';
    this.usersUrl = '/terminalImages';
  }

  public findAll(): Observable<TerminalImage[]> {

    return this.http.get<TerminalImage[]>(this.usersUrl);
  }

  public save(terminalImage: TerminalImage) {
    return this.http.post<TerminalImage>(this.usersUrl, terminalImage);
  }

  public createTerminalImage(terminalImage: TerminalImage) {
    var myUrl= "/addImageSubmit" ;

    return this.http.post<TerminalImage>(myUrl, terminalImage);
  }

 
}
