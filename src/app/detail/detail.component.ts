import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  showSpinner =true;
  userId;
  user;

  constructor(
    private userServies: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId=this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId){
  this.getDetail();
    }  
  }

  getDetail(){
    this.userServies.getUser(this.userId)
    .subscribe((res:any)=>{
      this.user= res.data;
      this.showSpinner=false;
    }, (err:any)=>{
      console.log(err);
    });
}
}
