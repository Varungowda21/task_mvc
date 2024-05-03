let names={
  fname:'varun',
  lname:'gowda',
  fullname:function(){
    this.fullname()
    
    return this.fname+' '+this.lname
  }
}
console.log(names)
// let names = {
//   fname: 'varun',
//   lname: 'gowda',
//   fullname: () => {
//     return names.fname + ' ' + names.lname;
//   }
// };

// console.log(names);
// var hh=(function(){return 'hello'})();
// console.log(hh)
// var wF = {
//   w : 560,
//   h : function() { return (312 - 42) / (560 / this.w) + 42; }
// };

// console.log(wf.h())