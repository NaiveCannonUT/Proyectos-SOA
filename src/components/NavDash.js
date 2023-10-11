import React from "react";
import "boxicons";

function NavDash() {
  return (
    <div class="fixed container ">
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-red-400 dark:focus:ring-gray-600"
      >
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
              >
                <box-icon
                  name="cloud"
                  type="solid"
                  animation="tada"
                  rotate="90"
                  color="#7DA4FA"
                ></box-icon>
                <span className="flex-1 ml-3 whitespace-nowrap"> DashBoard </span>
              </a>
            </li>
            <li>
              <a
                href="/CondicionAtmosferica"
                className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
              >
                <box-icon
                  name="cloud"
                  type="solid"
                  animation="tada"
                  rotate="90"
                  color="#7DA4FA"
                ></box-icon>
                <span className="flex-1 ml-3 whitespace-nowrap"> Clima </span>
              </a>
            </li>
            <li>
              <a
                href="/CondicionAtmosferica"
                className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
              >
                <link to=""></link>
                <box-icon
                  name="cloud"
                  type="solid"
                  animation="tada"
                  rotate="90"
                  color="#7DA4FA"
                ></box-icon>
                <span className="flex-1 ml-3 whitespace-nowrap"> Clima </span>
              </a>
            </li>
            <li>
              <a
                href="/CondicionAtmosferica"
                className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
              >
                <box-icon
                  name="cloud"
                  type="solid"
                  animation="tada"
                  rotate="90"
                  color="#7DA4FA"
                ></box-icon>
                <span className="flex-1 ml-3 whitespace-nowrap"> Clima </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default NavDash;
