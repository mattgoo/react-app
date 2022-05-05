const time = new Date().getTime();

console.log(`${time} - Test`);

// format the time
const timeFormatted = new Date(time).toLocaleString();

console.log(`${timeFormatted} - Test`);


function test() {
    return (
        <div>
            <h1>Test</h1>
            <p>{timeFormatted}</p>
        </div>
    )
}

export default test;