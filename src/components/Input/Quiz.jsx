import { useState } from 'react';

export default function Quiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null); // Changed initial error state to `null`
    const [status, setStatus] = useState('');

    if (status === 'success') {
        return <h1>That right!</h1>;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        setError(null); // Clear previous errors
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button
                    disabled={
                        answer.length === 0 || 
                        status === 'submitting'
                    }
                >
                    Submit
                </button>
                {error && (
                    <p className="Error">
                        {error.message}
                    </p>
                )}
            </form>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldError = answer.toLowerCase() !== 'lima';
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}
