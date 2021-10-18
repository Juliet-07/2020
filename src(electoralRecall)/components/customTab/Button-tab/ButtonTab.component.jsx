/*
 * component: Button-Tab
 * author: George Favour
 * Date: April 13th, 2020
 * EmBED Button-Tab component
 */

import React from "react";
import _ from "lodash";
import { TabStylesWrapper } from "./ButtonTab.styles";
import { IoMdMenu } from "react-icons/io";
import { generateID } from "../../../lib/generateID";

export class ButtonTab extends React.Component {
  myInput = React.createRef();
  state = {
    active: 0,
    style: {},
    tabs: this.props.tabsList || [],
    responsiveTabs: [],
    dropdownStatus: false,
  };

  componentDidMount() {
    this.spliceTabs();
    window.addEventListener("resize", _.throttle(this.update, 1000));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", _.throttle(this.update, 1000));
  }

  spliceTabs = () => {
    let totalWidth = 0;
    let barWidth = this.tabs.clientWidth - 44;

    const el = document.getElementsByClassName("tab__item-button");
    for (let i = 0; i < el.length; i++) {
      const tabWidth = el[i].clientWidth;
      if (i === el.length - 1) {
        barWidth += 44;
      }

      if (totalWidth + tabWidth > barWidth) {
        const tabs = this.state.tabs;
        const responsiveTabs = tabs.splice(i, tabs.length);
        this.setState({ responsiveTabs }, () => {
          this.setStyle();
        });
        break;
      }
      totalWidth += tabWidth;
    }
    this.setStyle();
  };

  update = () => {
    this.setState(
      (prevState) => {
        return {
          tabs: prevState.tabs.concat(prevState.responsiveTabs),
          responsiveTabs: [],
        };
      },
      () => {
        this.spliceTabs();
      }
    );
  };

  setStyle = () => {
    const { active, tabs } = this.state;
    let width = 5;
    let left = 0;
    if (active < tabs.length) {
      const el = document.getElementsByClassName("tab__item-button");
      for (let i = 0; i < el.length; i++) {
        let tabWidth = el[i].clientWidth;
        if (i === active) {
          width = tabWidth;
          break;
        } else {
          left += tabWidth;
        }
      }
    }

    this.setState({
      style: { width, left },
    });
  };

  changeTab = (index) => {
    this.setState({ active: index, dropdownStatus: false }, () => {
      this.setStyle();
    });
  };

  toggleDropdown = () => {
    this.setState((prevState) => {
      return { dropdownStatus: !prevState.dropdownStatus };
    });
  };

  render() {
    const {
      active,
      style,
      tabs,
      responsiveTabs,
      dropdownStatus,
      width,
      height,
    } = this.state;
    const {
      children,
      type,
      text,
      loading,
      disabled,
      click,
      ...otherProps
    } = this.props;

    return (
      <TabStylesWrapper {...otherProps}>
        <ul
          ref={this.myInput}
          className="tabs"
          ref={(node) => (this.tabs = node)}>
          {tabs.map((item, index) => {
            return (
              <li
                ref={this.myInput}
                key={generateID(20)}
                onClick={() => this.changeTab(index)}
                className={`tab__item-button ${
                  active === index ? "active" : ""
                }`}>
                {item}
              </li>
            );
          })}
          <span style={style} className="b-indicator" />
          {responsiveTabs.length > 0 && (
            <Dropdown
              active={dropdownStatus}
              toggleDropdown={() => this.toggleDropdown()}>
              {responsiveTabs.map((tab, index) => {
                const tabIndex = tabs.length + index;
                return (
                  <li
                    key={generateID(20)}
                    ref={this.myInput}
                    className={`tab__item-button ${
                      tabIndex === active ? "active" : ""
                    }`}
                    onClick={() => this.changeTab(tabIndex)}>
                    {tab}
                  </li>
                );
              })}
            </Dropdown>
          )}
        </ul>
        {children.map((child, index) => {
          return (
            <div key={generateID(20)} className="content">
              <div
                className={`tab__content ${index === active ? "active" : ""}`}>
                {child}
              </div>
            </div>
          );
        })}
      </TabStylesWrapper>
    );
  }
}

class Dropdown extends React.Component {
  toggleDropdown = () => {
    this.props.toggleDropdown();
  };

  render() {
    const { children, customClass, active } = this.props;

    return (
      <div className={"dropdown__wrapper"}>
        <a
          className={"dropdown__toggle"}
          onClick={this.toggleDropdown}
          data-toggle="dropdown">
          <IoMdMenu color="#444" />
        </a>
        <ul className={`dropdown ${active ? "active" : ""}`}>{children}</ul>
      </div>
    );
  }
}
