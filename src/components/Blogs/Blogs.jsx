import React, { useContext } from 'react';
import useTitleHook from '../../CustomHook/TitleHook';
import { AuthContext } from '../../providers/AuthProviders';
import { useNavigation } from 'react-router-dom';

const Blogs = () => {
    useTitleHook("Blogs");
    const { setPreloader } = useContext(AuthContext);
    const navigation = useNavigation();
    if (navigation.state === "idle") {
      setPreloader(false);
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center my-5">
              <h1 className="fw-bold align-self-center mx-1">My Blogs</h1>
              <h1 className="section-title--special">Faq Section</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 my-5 mx-auto">
              <div className="accordion " id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      #1 What is an access token and refresh token? How do they
                      work and where should we store them on the client-side?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <strong className="active">
                        Access Token and store :{" "}
                      </strong>
                      An access token is a credential that is used to access
                      protected resources on behalf of an authenticated user.
                      Access tokens are often stored in memory or local storage
                      on the client-side. Storing them in memory is generally
                      more secure than local storage.
                      <p className="mt-3">
                        <strong className="active">
                          Refresh Token and store :{" "}
                        </strong>
                        A refresh token is a long-lived credential used to
                        obtain a new access token after the previous one
                        expires. Refresh tokens are sensitive and should be
                        stored securely to prevent unauthorized access. They are
                        typically stored in an HTTP-only cookie, which makes it
                        inaccessible to JavaScript code and protects it from
                        cross-site scripting (XSS) attacks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      #2 Compare SQL and NoSQL databases?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong className="active">
                        SQL and NoSQL databases :{" "}
                      </strong>
                      SQL and NoSQL differ in whether they are relational (SQL)
                      or non-relational (NoSQL), whether their schemas are
                      predefined or dynamic, how they scale, the type of data
                      they include and whether they are more fit for multi-row
                      transactions or unstructured data.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      #3 What is express js? What is Nest JS?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong className="active">
                        Express js and Nest js:{" "}
                      </strong>
                      Express.js is known for its simplicity and flexibility,
                      while NestJS brings a more opinionated and structured
                      approach to Node.js development, leveraging TypeScript and
                      Angular-inspired patterns. Both frameworks have their
                      strengths and can be chosen based on the specific needs
                      and preferences of a project.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      #4 What is MongoDB aggregate and how does it work?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong className="active">MongoDB aggregate: </strong>
                      Aggregation is a way of processing a large number of
                      documents in a collection by means of passing them through
                      different stages. The stages make up what is known as a
                      pipeline. The stages in a pipeline can filter, sort,
                      group, reshape and modify documents that pass through the
                      pipeline.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Blogs;