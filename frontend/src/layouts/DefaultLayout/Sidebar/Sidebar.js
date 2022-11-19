import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import {
    FaBeer
} from 'react-icons/fa'
import Menu, {
    MenuButton
} from "./Menu";

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={
            cx("wrapper")
        }>
            {/* <header></header> */}
            {/* <span className={
                cx("container")
            }>
                <span className={
                    cx("button")
                }>
                    <span className={
                        cx("content")
                    }>
                        <span className={
                            cx("icon")
                        }>
                            <FaBeer/></span>
                        <span className={
                            cx("label")
                        }>Profile</span>
                    </span>
                </span>
            </span> */} </div>
    );
};

export default Sidebar;
