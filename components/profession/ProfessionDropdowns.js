import React from 'react';

function ProfessionDropdowns() {
  return (
    <section className="leftNav w-full">
      <ul>
        <li>
          <a href="#" title="Nach Hause">
            Home
          </a>
        </li>
        <li className="sub">
          <input type="checkbox" />
          <a href="#">Profile</a>

          {/* <!-- Begin--> */}

          <ul className="submenu">
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Profile List</a>
            </li>
          </ul>
        </li>

        {/* <!-- end--> */}
        <li className="sub">
          <input type="checkbox" />
          <a href="#">Logs</a>

          {/* <!-- Begin--> */}

          <ul className="submenu">
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Search Log Items</a>
            </li>
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Show XLS Files</a>
            </li>
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Change Log Levels</a>
            </li>
          </ul>
        </li>

        {/* </li> */}
        <li className="sub">
          <input type="checkbox" />
          <a href="#">Policy</a>

          {/* <!-- Begin--> */}

          <ul className="submenu">
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Boot Parameters</a>
            </li>
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Configure SMTP</a>
            </li>
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Configure Purge Policy</a>
            </li>
            <li className="sub">
              <input type="checkbox" />
              <a href="#">Purge Now!</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default ProfessionDropdowns;
