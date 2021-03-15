import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({

  'selector' : 'app-login-details',

  'templateUrl' : './login-details.component.html',

  'styleUrls' : ['./login-details.component.css'] ,

  'animations' : [fadeAnimation]

})

export class LoginDetailsComponent implements OnInit {

  constructor() { 

  }

  public entries : { [key : string] : string}[] = [
  {
    "email_address": "volunux@gmail.com",
    "password": "09022035587",
    "role": "Super Administrator",
    "department": "Animal Production",
    "unit": null,
    "faculty": "Business Administration"
  },
  {
    "email_address": "azeez@gmail.com",
    "password": "09022035587",
    "role": "Student",
    "department": "Animal Production",
    "unit": null,
    "faculty": "Business Administration"
  },
  {
    "email_address": "rabi@gmail.com",
    "password": "09022035587",
    "role": "Student",
    "department": "Agriculture and Bio-Resources Engineering",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "paul@gmail.com",
    "password": "09022035587",
    "role": "Student",
    "department": "Education Technology",
    "unit": "Others",
    "faculty": "Life Science"
  },
  {
    "email_address": "paul1@gmail.com",
    "password": "09022035587",
    "role": "Student",
    "department": "Entrepreneurship and Business Studies",
    "unit": "Others",
    "faculty": "Science and Technology Education"
  },
  {
    "email_address": "paul2@gmail.com",
    "password": "09022035587",
    "role": "Student",
    "department": "Library Information Technology",
    "unit": "Others",
    "faculty": "Development and Architecture and Design"
  },
  {
    "email_address": "janet@gmail.com",
    "password": "09022035587",
    "role": "Staff",
    "department": "Animal Production",
    "unit": "Email Password",
    "faculty": "Business Administration"
  },
  {
    "email_address": "lawson@gmail.com",
    "password": "09022035587",
    "role": "Staff",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "leon@gmail.com",
    "password": "09022035587",
    "role": "Dean of Faculty",
    "department": "Education Technology",
    "unit": "Others",
    "faculty": "Life Science"
  },
  {
    "email_address": "leon1@gmail.com",
    "password": "09022035587",
    "role": "Dean of Faculty",
    "department": "Entrepreneurship and Business Studies",
    "unit": "Others",
    "faculty": "Science and Technology Education"
  },
  {
    "email_address": "leon2@gmail.com",
    "password": "09022035587",
    "role": "Dean of Faculty",
    "department": "Library Information Technology",
    "unit": "Others",
    "faculty": "Development and Architecture and Design"
  },
  {
    "email_address": "william@gmail.com",
    "password": "09022035587",
    "role": "Head of Department",
    "department": "Education Technology",
    "unit": "Others",
    "faculty": "Life Science"
  },
  {
    "email_address": "william1@gmail.com",
    "password": "09022035587",
    "role": "Head of Department",
    "department": "Entrepreneurship and Business Studies",
    "unit": "Others",
    "faculty": "Science and Technology Education"
  },
  {
    "email_address": "william2@gmail.com",
    "password": "09022035587",
    "role": "Head of Department",
    "department": "Library Information Technology",
    "unit": "Others",
    "faculty": "Development and Architecture and Design"
  },
  {
    "email_address": "bennet@gmail.com",
    "password": "09022035587",
    "role": "Vice Chancellor",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "coleman@gmail.com",
    "password": "09022035587",
    "role": "Chacellor",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "nath@gmail.com",
    "password": "09022035587",
    "role": "Registrar",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "rosemary@gmail.com",
    "password": "09022035587",
    "role": "Bursar",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "grace@gmail.com",
    "password": "09022035587",
    "role": "Librarian",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "esther@gmail.com",
    "password": "09022035587",
    "role": "Super Administrator",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "jerry@gmail.com",
    "password": "09022035587",
    "role": "Administrator",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "richard@gmail.com",
    "password": "09022035587",
    "role": "Moderator",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "debbie@gmail.com",
    "password": "09022035587",
    "role": "Moderator",
    "department": "Animal Production",
    "unit": "Others",
    "faculty": "Business Administration"
  },
  {
    "email_address": "mike@gmail.com",
    "password": "09022035587",
    "role": "Staff",
    "department": "Animal Production",
    "unit": "Course Registration",
    "faculty": "Business Administration"
  },
  {
    "email_address": "harry@gmail.com",
    "password": "09022035587",
    "role": "Staff",
    "department": "Animal Production",
    "unit": "Internet Credential",
    "faculty": "Business Administration"
  },
  {
    "email_address": "gareth@gmail.com",
    "password": "09022035587",
    "role": "Staff",
    "department": "Animal Production",
    "unit": "Internet Password",
    "faculty": "Business Administration"
  },
  {
    "email_address": "deborah@gmail.com",
    "password": "09022035587",
    "role": "Staff",
    "department": "Animal Production",
    "unit": "Academic Result",
    "faculty": "Business Administration"
  }
];

  ngOnInit() : void {
  
  }

}
