import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  tree: { [key: string]: string[] } = {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  };

  treeChild(sub: string) {
    return this.tree[sub] || [];
  }

}
