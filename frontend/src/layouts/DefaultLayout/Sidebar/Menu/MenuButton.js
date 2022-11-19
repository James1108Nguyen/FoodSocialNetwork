import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import {
    NavLink
} from 'react-router-dom';
import {
    EvalSourceMapDevToolPlugin
} from 'webpack';
import styles from './MenuButton.module.scss';

const cx = classNames.bind(styles);


function MenuButton({
    title,
    to,
    icon
}) {
    return (
        <NavLink className={
                (nav) => cx('button', {
                    active: nav.isActive
                })
            }
            to={to}>
            <span className={
                cx("content")
            }>
                <span className={
                    cx('icon')
                }>
                    {icon}</span>
                <span className={
                    cx('label')
                }>
                    {title}</span>
            </span>
        </NavLink>
    )
}

MenuButton.propTypes = {
    title: PropTypes.string.isRequired,
// to: PropTypes.string.isRequired,
// icon: PropTypes.node.isRequired,
};
export default MenuButton;
