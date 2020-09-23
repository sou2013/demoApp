import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TerminalImage } from '../model/terminal-image';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/scmp/terminalImages';
  }

  public findAll(): Observable<TerminalImage[]> {

    return this.http.get<TerminalImage[]>(this.usersUrl);
  }

 
}
