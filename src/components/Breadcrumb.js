import React from 'react';

const breadcrumb = {
  backgroundColor: 'white',
  border: '1px solid rgba(0, 0, 0, 0.125)',
  borderRadius: '0.37rem'
}

const  Breadcrumb=({crumbs,selected})=> {

  function isLast(index) {
    return index === crumbs.length - 1;
  }
  console.log(crumbs)
  return (
    <nav className="row justify-content-center mt-4">
      <ol className="breadcrumb" style={ breadcrumb }>
        { 
          crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';
           
            
            return (
              <li
                key={ ci }
                className="breadcrumb-item align-items-center"
              >
                <button className={ `btn btn-link ${ disabled }` } onClick={ () => selected(crumb) }>
                  { crumb }
                </button>
              </li>
            );
          })
        }
      </ol>
    </nav>
  );
}

export default Breadcrumb;