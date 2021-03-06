/*
jQWidgets v6.2.0 (2018-Dec)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdockpanel.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDockPanel extends React.Component {
    constructor(props) {
        super(props);
        const widgetId = 'jqxDockPanel' + JQXLite.generateID();
        this.componentSelector = '#' + widgetId;
        this.state = { id: widgetId };
    };
    componentDidMount() {
        const options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        const properties = ['disabled','height','lastchildfill','width'];
        let options = {};
        for(let item in this.props) {
            if(item === 'settings') {
                for(let itemTwo in this.props[item]) {
                    options[itemTwo] = this.props[item][itemTwo];
                }
            } else {
                if(properties.indexOf(item) !== -1) {
                      options[item] = this.props[item];
                }
            }
        }
        return options;
    };
    createComponent(options) {
        if(!this.style) {
            for (let style in this.props.style) {
                JQXLite(this.componentSelector).css(style, this.props.style[style]);
            }
        }
        if(this.props.className !== undefined) {
            const classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
            JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxDockPanel(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDockPanel('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDockPanel(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDockPanel('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDockPanel('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDockPanel('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDockPanel('height');
        }
    };
    lastchildfill(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDockPanel('lastchildfill', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDockPanel('lastchildfill');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDockPanel('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDockPanel('width');
        }
    };
    refresh() {
        JQXLite(this.componentSelector).jqxDockPanel('refresh');  
    };
    render() {
        return (
            <div id={this.state.id}>{this.props.value}{this.props.children}</div>
        )
    };
};

