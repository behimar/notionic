import {Injectable} from '@angular/core'
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()

export class NoteService{
  constructor(public afDB: AngularFireDatabase){

  }
  notes=[];
  /*notes:Array<{id:number, title:string, description:any}> =[
    {id:1, title: 'Nota 1', description: 'Descripcion de la nota'},
    {id:2, title: 'Nota 2', description: 'Descripcion de la nota'},
    {id:3, title: 'Nota 3', description: 'Descripcion de la nota'}
  ]*/
  note = {id:null, title:null, description: null};
  public getNotes(){
    return this.afDB.list('notas/');
    //return this.notes;
  }
  public getNote(id){
    return this.afDB.object('notas/'+id);
    //return this.notes.filter(function (e, i) {return e.id == id }) [0] || {id: null, title: null, description: null};

  }

  public createNote(note){
    this.afDB.database.ref('notas/'+note.id).set(note);
    //this.notes.push(note);
  }

  public editNote(note){
    /*for(let i=0 ; i< this.notes.length;i++){
      if(this.notes[i].id ==note.id){
        this.notes[i] =note;
      }
    }*/
    this.afDB.database.ref('notas/'+note.id).set(note);
  }

  public deleteNote(note){
    this.afDB.database.ref('notas/'+note.id).remove();
    /*for(let i=0 ; i< this.notes.length;i++){
      if(this.notes[i].id ==note.id){
        this.notes.splice(i,1);
      }
    }*/
  }
}
