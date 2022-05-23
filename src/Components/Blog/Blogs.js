import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                        <p><small>
                            There are many ways to improve the performance of a react applicaion some are descused here
                            <br />
                            <b>1.Using immutable data structure</b>
                            <br />
                            Immutable data stracture are   like lists,array,sets etc.
                            The value inside them cannot be added removed or swaped that is why using this kind of data structure can improve the performance of react application.
                            <br />
                            <b>2.Using multiple chunk files</b>
                            <br />
                            React application always begins with few component. When added features on it then it ended up with a huge file .By splitting the files, and my browser caches less frequently and parallel downloads resources to reduce load time wait.
                            <br />
                            <b>3.Dependency optimization</b>
                            <br />
                            When considering optimizing the application bundle size, it is worth checking how much code i utilieze from dependecies. For example, I am using some js file which includes localized files for multi-language support. If i donot need to support multiple languages, then I can consider using moment-locales-webpack-plugin to remove unused locales for my final bundle.
                            <br />
                            <b>4.Avoid Inline Function Definition in the Render Function.</b>
                            <br />
                            Since functions are objects in JavaScrip, the inline function will always fail the prop diff when React does a diff check. Also, an arrow function will create a new instance of the function on each render if it's used in a JSX property. This might create a lot of work for the garbage collector
                        </small>
                        </p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">What are the different ways to manage a state in a React application?
                        </h2>
                        <p><small>
                            There are 4 type of state that have to manage
                            <ul>
                                <li>1.Local state</li>
                                <li>2.Global state</li>
                                <li>3.Server state</li>
                                <li>4.Url state</li>
                            </ul>
                            <b>1.Local state</b>
                            <br />
                            Local state is data where we manage in one or another component.
                            Local state is most often managed in React using the useState hook.
                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a forms inputs.
                            <br />
                            <b>2.Global state</b>
                            <br />
                            Global state is data we manage across multiple components.
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                            <br />
                            <b>3.Server state</b>
                            <br />
                            Data that comes from an external server that must be integrated with our UI state.
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                            There are several pieces of state that must be managed every time we fetch or update data from an external server, including loading and error state.
                            <br />
                            <b>4.Url state</b>
                            <br />
                            Data that exists on our URLs, including the pathname and query parameters.
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                        </small>
                        </p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> How does prototypical inheritance work?</h2>
                        <p>Protitypical inheritance is a features of JavaScript it can use to add methode and property on objects . It is the methode that can inherit the property and methode of another objects. Basically in order to get and set the prototype we use object.getPrototypeOf and object.setPrototypeOf.
                        </p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h2>
                        <p><small>
                            There are  three reasons why do not set the state directly in react
                            <br />
                            1.If anyone update it directly, calling the setState() afterward it may just replace the update that the persone has made.
                            <br />
                            When anyone directly update the state, it does not change this state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            <br />
                            It will lose control of the state across all components.
                        </small>
                        </p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </h2>
                        <p><small>
                            If i have an array of products and each products has a name,price and description and i have to implement a search to find the product by name then i will do array.find methode for example
                            <br />
                            array.find(x ={'>'} x.name === 'name')
                        </small>
                        </p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">14.6 What is a unit test? Why should write unit tests?
                        </h2>
                        <p><small>
                            A unite test is a type of software testing where iduvidul units and software are tested . It is the perpouse of validate that each code of the unite are performing as expected . A unit can be any thing like a line of a code or a metode or a class .
                            <br />
                            We should write unite testing because of saving time and money . if anyone release a app without do any anute testing and when the issue occurse or a problem rise then it will be fixing by the potential useres which is time and money consuming.
                            <br />
                            well written unite test will be work like a documentation of your code any developer can look into your test and understand your purpose of function
                            <br />
                            It simplifies the debugging process.
                            <br />
                            Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                        </small>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;