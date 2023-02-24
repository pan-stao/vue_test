let person = [
	{name:'zs',age:22},
	{name:'ls',age:20},
	{name:'ww',age:28},
]
// 如果我们需要按照对象中的age属性进行数组排序
person.sort((a,b)=>{
	return a.age - b.age
})
console.log(person) // [{name:'ls',age:20},{name:'zs',age:22},{name:'ww',age:28},]
