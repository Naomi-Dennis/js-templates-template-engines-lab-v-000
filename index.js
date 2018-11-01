  // describe('createPost', () => {
  //     it('exists', () => {
  //       expect(createPost).toExist("Must have a function named createPost")
  //     })
  //     it('builds the proper templates', () => {
  //       var spy = expect.spyOn(window._, 'template').andCallThrough()
  //       createPost()
  //       expect(spy).toHaveBeenCalledWith(document.getElementById("page-template").innerHTML)
  //       expect(spy).toHaveBeenCalledWith(document.getElementById("post-template").innerHTML)
  //     })
  //   })
function createPost(){
   console.log("Test")
  let template_data = "<div id='page-template'></div><div id='post-template'></div>"
  let template_foo = _.template(template_data)
  
  document.getElementById("post-form").innerHTML += template_foo()
  
}