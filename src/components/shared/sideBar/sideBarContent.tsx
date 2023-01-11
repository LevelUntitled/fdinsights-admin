import PropTypes from "prop-types";
import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
//Import Icons
import Icon from "@ailibs/feather-react-ts";

// //Import Scrollbar
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import { withTranslation } from "react-i18next";

import MetisMenu from "metismenujs";

const SidebarContent = (props: any) => {
  const ref = useRef<any>();

  return (
    <>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu </li>
            <li>
              <Link href="/dashboard" className="">
                <Icon name="home" />
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link href="/#" className="has-arrow">
                <Icon name="grid" />
                <span>Client</span>
              </Link>
            </li>
            <li>
              <Link href="/#" className="has-arrow">
                <Icon name="grid" />
                <span>Report</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </>
  );
};

export default SidebarContent;
