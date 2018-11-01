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
  let page_template = "<div id='page-template'><nav id='sidebar'></nav><p id='post'></p></div>"
  let page_template_foo = _.template(page_template)
  
  let post_template = "<div id='post-template'></div>"
  let post_template_foo = _.template(post_template)
  
  document.getElementById("post-form").innerHTML += page_template_foo()
  //document.getElementById("post-form").innerHTML += post_template_foo()
  
}