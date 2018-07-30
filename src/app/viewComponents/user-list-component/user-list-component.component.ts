import { Component, OnInit } from '@angular/core';
import { UserDetail} from '../../models/user-detail'
import {USERS} from '../../mock/mock-users'

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {

  users = USERS;

  selectedUser: UserDetail;

  onSelect(UserDetail: UserDetail): void {
    this.selectedUser = UserDetail;
  }

  constructor() { }

  ngOnInit() {
  }

}

