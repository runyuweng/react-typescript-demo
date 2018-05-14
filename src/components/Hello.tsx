import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {
    isOpen: boolean
}> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state
        return (
            <div>
                <p>{isOpen ? '已打开' : '已关闭'}</p>
                <button onClick={this.handleClick}>{isOpen ? '关闭' : '打开'}</button>
            </div>
        )
    }
}