import * as React from 'react';

export interface HelloProps {compiler: string; framework: string;}

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello from {props.compiler} and {props.framework}!</h1>;
    }
}