
import './style.css';

// JSX: 1 parent
// Fragment

const MyComponent = () => {
    const a = 236423;
    const b = "Nguyen Ngoc Hieu";
    const myArray = [5, 9, 2003];
    const myObject = {
        name: 'Hieu',
        age: 22
    }

    return (
        <>
            <h3> {a} {b} </h3>
            <h3> {myArray} </h3>
            <h3> {JSON.stringify(myArray)} </h3>
            <h3> {myObject.name} - {myObject.age} </h3>
            <h3> {JSON.stringify(myObject)} </h3>
            <p>{console.log('Hello Word')}</p>

            <h4>Hi, i'm Cristiano</h4>
            <h5 className="cr7" style={{ fontStyle: 'italic' }} > CRISTIANO RONALDO </h5>
        </>
    );
}

export default MyComponent;