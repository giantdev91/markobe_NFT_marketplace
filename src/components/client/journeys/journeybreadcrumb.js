import React from 'react';

const JourneyBreadCrumb = ({model}) => {
  return (
    <nav className="p-breadcrumb p-component" aria-label="Breadcrumb">
      <ul className="p-breadcrumb-list">
        {
          model.map((item, index) => {
            return (
              <React.Fragment key={`${item.label}-${index}`}>
                {index === 0 ? (
                                    <li className="p-menuitem">
                                      <a href="#" className="p-menuitem-link">
                                        <span className="p-menuitem-text">{item.label}</span>
                                      </a>
                                    </li>
                                ) : (
                                    <>
                                      <li className="p-menuitem-separator">
                                        <svg
                                          width="14"
                                          height="14"
                                          viewBox="0 0 14 14"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="p-icon p-breadcrumb-chevron"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </li>
                                      <li className="p-menuitem">
                                        <a href="#" className="p-menuitem-link">
                                          <span className="p-menuitem-text">{item.label}</span>
                                        </a>
                                      </li>
                                    </>
                                )}
              </React.Fragment>
            );
          })
        }
      </ul>
    </nav>
  );
};

export default JourneyBreadCrumb;
