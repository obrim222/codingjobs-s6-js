const blogList = [
  {
    Title: "King Of Rock n Roll",
    Type: "Music",
    Blog: "Elvis was the king of Rock n Roll. He was born in Memphis Tennessee.....",
  },
  {
    Title: "Hero Old Trafford",
    Type: "Sport",
    Blog: "Eric Cantona was the king of football at Old Trafford Machester.....",
  },
];

const blogElement = document.getElementById("list");

const initList = function () {
  for (let blogIndex = 0; blogIndex < blogList.length; blogIndex++) {
    appendblogs(blogIndex);
  }
};

const appendblogs = function (index) {
  console.log("call with index", index);
  const newblog = document.createElement("li");
  newblog.innerText =
    blogList[index].Title +
    "\n" +
    blogList[index].Type +
    "\n" +
    blogList[index].Blog;
  blogElement.prepend(newblog);
};

const addblog = function () {
  // const blogName = document.getElementsByTagName("input")[0].value;
  var Title = document.querySelector('input[name="title-box"]').value;
  var Type = document.querySelector('input[name="type-box"]').value;
  var Blog = document.querySelector('input[name="blog-box"]').value;
  console.log("Title:", Title, "Type:", Type, "Blog:", Blog);
  let blog = { Title: Title, Type: Type, Blog: Blog };
  blogList.unshift(blog);
  let index = 0;
  appendblogs(index);
};

initList();

function SortArray(x, y) {
  return x.Title.localeCompare(y.Title);
}

function callSort() {
  var s = blogList.sort(SortArray);
  console.log(s);
}
