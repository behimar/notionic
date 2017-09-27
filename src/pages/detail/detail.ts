import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoteService} from "../../services/note.service";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note ={id: null, title: null, description: null};
  id= null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _noteService: NoteService) {
    this.id = navParams.get('id');
    if (this.id !=0){
      _noteService.getNote(this.id)
        .subscribe(note => {
          this.note = note;
        });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  addNote(){
    if(this.id !=0){
      //editando
      this._noteService.editNote(this.note);
      alert('nota editada');

    }
    else{
      this.note.id = Date.now();
      this._noteService.createNote(this.note);
      alert('Nota creada');

    }
    this.navCtrl.pop();
  }

  deleteNote(){
    this._noteService.deleteNote(this.note);
    alert('Nota eliminada');
    this.navCtrl.pop();
  }

}
