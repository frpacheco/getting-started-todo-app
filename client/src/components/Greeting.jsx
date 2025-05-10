import { useEffect, useState } from 'react';

export function Greeting() {
    const [greeting, setGreeting] = useState(null);

    useEffect(() => {
        fetch('/api/greeting')
            .then((res) => res.json())
            .then((data) => setGreeting(data.greeting));
    }, [setGreeting]);

    if (!greeting) return null;

    return (
        <>
            <h1 className="text-center mb-2">{greeting}</h1>

            {/* TODO: crie um link para  https://wp.conhecimentoia.com.br/ */}
            <div className="text-center mb-5">
                <h4 className="text-center"> Conheça este incrível Blog de IA</h4>
                <a className='conhecimento' href="https://wp.conhecimentoia.com.br/">Conhecimento IA</a>
            </div>
        </>
    );
}
