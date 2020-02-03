//create a single node 

class Node{
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST{
      constructor(){
          this.root = null;
      }
      // insert a new value 
      insert(value){
          var newNode = new Node(value);
          
          // check: if there is any root
            if(this.root === null){
              this.root = newNode;
              return this;
            } else {
              // check: if the value is less than the root node
              var current = this.root;
              while(true){
  
              if(value < current.value){
               
                  if(current.left===null){
                      current.left = newNode;
                      return this;
                  } else {
                      current= current.left;
                  }
              }
              // check: if the value is greater than the root node 
               if(value > current.value){
  
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  } else {
                      current = current.right;
                  }
              }
              
             
          }
          
          }
      }
      }
  
  
  var tree = new BST();
  
  tree.insert(10);
  tree.insert(500);
  tree.insert(2);
  tree.insert(20);
  tree.insert(22);
  tree.insert(21);
  console.log(tree);