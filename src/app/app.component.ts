import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  constructor(){
    this.setPosts();
    setTimeout(() =>this.getPosts(20), 3000);
  }
  ngOnInit(){
    //console.log(this.posts);
  }
  random = Math.random();
  posts = [];

  setPosts():void{
    fetch('http://jsonplaceholder.typicode.com/todos').then(data => data.json()).then(res => res.forEach(post =>{
      this.posts.push(post);
    }));
  }
  getPosts(num: number):void{
    /**
     * for all posts with no num argument 
     * this.posts.forEach(post =>{
      console.log(post);
    })
    Gets first x posts
    **/
    for(let i=0; i < num; i++){
      console.log(this.posts[i].title);
    }
  }

  
}
