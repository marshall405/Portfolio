const posts = [
    {
        date : 'August 14, 2018',
        title: 'What is "this" in JavaScript?',
        post: `The use of "this" can be tricky, but hopefully after this post you will feel a little better about it.<br />
                Lets keep it simple, an object can have properties and methods. When the object calls a method, that method gets a variable called "this" with the value of the object.<br />
                Example: <br />
            
                <code>const genericObject = </code>
                    <code style="text-indent: 30px;">name: 'Marshall', </code>
                    <code style="text-indent: 30px">getName() { </code>
                        <code style="text-indent: 60px">console.log(this.name); </code>
                        <code style="text-indent: 30px"> } </code>
                <code> } </code>
                In the code above, we created an object named genericObject and defined a property and a method. When we call the method <span>genericObject.getName()</span>, JavaScript sets "this" to the object <span> genericObject</span>.<br />
                `
    }
]