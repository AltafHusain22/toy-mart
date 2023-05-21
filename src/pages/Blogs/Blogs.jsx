import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <section>
      <h2 className="font-bold md:text-5xl text-4xl mb-10 text-center mt-10">
        Blogs{" "}
      </h2>
      <div className="w-3/4 mx-auto">
        {/* question-1 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="">
            <p className="m-10">
              An access token and a refresh token are commonly used in
              authentication and authorization systems. Here's an explanation of
              each and how they work:
            </p>
            <p className="m-10 ">
              The typical flow involving access and refresh tokens is as
              follows: The client sends authentication credentials (e.g.,
              username and password) to the authentication server. If the
              credentials are valid, the authentication server generates an
              access token and a refresh token. The access token is returned to
              the client and is included in subsequent requests to protected
              resources. When the access token expires, the client can use the
              refresh token to request a new access token from the
              authentication server without having to re-authenticate. The
              authentication server verifies the refresh token and issues a new
              access token, which is returned to the client. The client
              continues to use the new access token for accessing protected
              resources.
            </p>
          </div>
        </div>
        {/* question-2 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
          </div>
          <div className="">
            <p className="m-10">
              SQL databases use a structured data model with predefined schemas,
              while NoSQL databases offer various flexible data models. SQL
              databases scale vertically by adding more resources to a single
              server, while NoSQL databases scale horizontally by distributing
              data across multiple servers. SQL databases use the SQL query
              language, while NoSQL databases may use different query languages
              or interfaces. SQL databases enforce a predefined schema, while
              NoSQL databases offer schema flexibility. SQL databases generally
              provide ACID transactions, while NoSQL databases may sacrifice
              strict transactional guarantees for performance and scalability.
            </p>
          </div>
        </div>
        {/* question-3 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS ?
          </div>
          <div className="">
            <p className="m-10 ">
              Express.js is a popular web application framework for Node.js. It
              provides a minimal and flexible set of features for building web
              applications and APIs. Express.js focuses on simplicity and allows
              developers to create routes, handle HTTP requests and responses,
              manage middleware, and implement various functionalities required
              for web development. It provides a robust ecosystem of plugins and
              middleware, making it highly extensible and customizable.
              Express.js is known for its lightweight nature, speed, and wide
              community adoption. Nest.js, on the other hand, is a progressive
              TypeScript-based framework for building scalable and maintainable
              server-side applications. It is built on top of Express.js and
              adds a layer of structure and additional features inspired by
              Angular. Nest.js leverages decorators, dependency injection, and
              TypeScript metadata to provide a modular and organized approach to
              building applications. It promotes the use of object-oriented
              programming principles and design patterns such as modules,
              controllers, services, and providers. Nest.js aims to improve
              developer productivity, code maintainability, and testability by
              offering a structured framework while still retaining the
              flexibility and performance of Express.js. It is often used for
              building enterprise-grade applications and APIs.
            </p>
          </div>
        </div>
        {/* question-4 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">
		  What is MongoDB aggregate and how does it work ?
          </div>
          <div className="">
            <p className="m-10">
			 the MongoDB aggregate function is used for advanced data processing and analysis. It takes an array of pipeline stages as input, with each stage representing an operation or transformation. The input documents are processed sequentially through the stages, and each stage operates on the data and passes the output to the next stage in the pipeline. It allows for computations, transformations, and aggregations on MongoDB collections.
            </p>
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
