export interface HolaMundo2Props {
    name: string;
    age?: number;
}

function HolaMundo2({ name, age }: HolaMundo2Props) {
    return (
        <>
            <h2>Hola {name}</h2>
            {age !== undefined && <h2>Edad {age}</h2>}
        </>
    );
}

export default HolaMundo2;
