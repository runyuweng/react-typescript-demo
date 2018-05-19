import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

type ButtonSize = 'small' | 'default' | 'large';

type State = { isOpen: boolean; num: number; }
// export interface State { isOpen: boolean; num: number; }
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, State> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {
            isOpen: false,
            num: 0
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            num: this.state.num + 1
        })
    }

    render() {
        const { isOpen, num } = this.state
        return (
            <div>
                <p>{isOpen ? '已打开' : '已关闭'}</p>
                <p>{`点击次数：${num}`}</p>
                <button onClick={this.handleClick}>{isOpen ? '关闭' : '打开'}</button>
            </div>
        )
    }
}