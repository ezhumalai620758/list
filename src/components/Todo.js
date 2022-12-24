import React from "react";
export default function Todo(inherit) {
    return (
     
              <li className="todo stack-small">
                <div className="c-cb">
                  <input id={inherit.id} type="checkbox" defaultChecked={inherit.completed} />
                  
                  <label className="todo-label" htmlFor={inherit.id}>
                    {inherit.name}
                  </label>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn">
                    Edit <span className="visually-hidden">{inherit.name}</span>
                  </button>
                  <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">{inherit.name}</span>
                  </button>
                </div>
              </li>
            );
          }
          
       
      
 
  