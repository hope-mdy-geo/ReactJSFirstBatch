import logo from './logo.svg';
import './css/App.css';
import Hello from "./componets/Hello";
import HelloWorld from "./componets/HelloWorld";
import {HelloWorldClassComp} from "./componets/HelloWorld";
import UserAvatar from "./componets/UserAvatar";
import Counter from "./componets/Counter";
import EventDemoComponent from './componets/EventDemoComponent';
function App() {
    function hello() {
        console.log('Hello function invoked');
        return "Hello World";
    }

    var names = ['Aung Aung', 'Ma Mya'];
    const jsxCode = <h1>Hello</h1>;

    let user = {
        imageUrl : 'https://m.media-amazon.com/images/M/MV5BMjQ4MjEyNTE4M15BMl5BanBnXkFtZTgwMzcyNDE0NDM@._V1_.jpg',
        name : 'James'
    };
    return (
        <div className="App another-class">
           {/* {hello() + 'How are you'}*/}

            {/* <Hello/>*/}
            {/*<HelloWorld color={"blue"}></HelloWorld>
            <HelloWorldClassComp name="How are you"/>*/}
            {/*<Counter value={5}/>
            <UserAvatar user={user}/>*/}
            <EventDemoComponent/>
        </div>
    );
}

export default App;